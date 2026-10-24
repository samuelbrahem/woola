// Person cut-out + uniform headshot treatment using Apple Vision.
// usage: cutout <in.jpg> <out.jpg> [size]
// Output: square, centred on the face when one is found, person isolated on a
// flat light-grey backdrop, desaturated, so a set of mixed LinkedIn photos reads as one.
import Foundation
import Vision
import CoreImage
import AppKit

let args = CommandLine.arguments
guard args.count >= 3, let src = CIImage(contentsOf: URL(fileURLWithPath: args[1])) else {
  FileHandle.standardError.write("usage: cutout in out [size]\n".data(using: .utf8)!); exit(1)
}
let outSize = args.count > 3 ? CGFloat(Int(args[3]) ?? 800) : 800
let ctx = CIContext()

// 1. Person segmentation mask
let seg = VNGeneratePersonSegmentationRequest()
seg.qualityLevel = .accurate
seg.outputPixelFormat = kCVPixelFormatType_OneComponent8
let face = VNDetectFaceRectanglesRequest()
let handler = VNImageRequestHandler(ciImage: src, options: [:])
try handler.perform([seg, face])

var maskImage = CIImage(color: .white).cropped(to: src.extent)
if let buf = seg.results?.first?.pixelBuffer {
  let m = CIImage(cvPixelBuffer: buf)
  let sx = src.extent.width / m.extent.width, sy = src.extent.height / m.extent.height
  maskImage = m.transformed(by: CGAffineTransform(scaleX: sx, y: sy))
    .applyingFilter("CIGaussianBlur", parameters: [kCIInputRadiusKey: 1.5])
    .cropped(to: src.extent)
}

// 2. Desaturate subject slightly and lift contrast so skin tones match across sources
let graded = src
  .applyingFilter("CIColorControls", parameters: [kCIInputSaturationKey: 0.0, kCIInputContrastKey: 1.08, kCIInputBrightnessKey: 0.02])

// 3. Composite onto flat backdrop
let backdrop = CIImage(color: CIColor(red: 0.925, green: 0.925, blue: 0.92)).cropped(to: src.extent)
let composited = graded.applyingFilter("CIBlendWithMask", parameters: [
  kCIInputBackgroundImageKey: backdrop, kCIInputMaskImageKey: maskImage,
])

// 4. Square crop centred on the face (Vision coords are normalised, origin bottom-left)
let W = src.extent.width, H = src.extent.height
var cx = W / 2, cy = H / 2, side = min(W, H)
if let f = (face.results as? [VNFaceObservation])?.max(by: { $0.boundingBox.width < $1.boundingBox.width }) {
  let bb = f.boundingBox
  cx = (bb.midX) * W
  cy = (bb.midY + bb.height * 0.08) * H   // nudge up so there is more room below the chin
  side = min(min(W, H), max(bb.width * W, bb.height * H) * 3.2)
}
var x = cx - side / 2, y = cy - side / 2
x = max(0, min(x, W - side)); y = max(0, min(y, H - side))
let cropped = composited.cropped(to: CGRect(x: x, y: y, width: side, height: side))
  .transformed(by: CGAffineTransform(translationX: -x, y: -y))
let scale = outSize / side
let final = cropped.transformed(by: CGAffineTransform(scaleX: scale, y: scale))

// 5. Write JPEG
guard let cg = ctx.createCGImage(final, from: CGRect(x: 0, y: 0, width: outSize, height: outSize)) else { exit(2) }
let rep = NSBitmapImageRep(cgImage: cg)
guard let data = rep.representation(using: .jpeg, properties: [.compressionFactor: 0.88]) else { exit(3) }
try data.write(to: URL(fileURLWithPath: args[2]))
print("wrote \(args[2]) \(Int(outSize))px")
