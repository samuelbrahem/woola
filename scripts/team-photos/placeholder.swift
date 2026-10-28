// Uniform placeholder headshot: soft person silhouette on the same flat grey
// the real cutouts get, so a mixed row still reads as one set.
import AppKit
let size: CGFloat = 800
let img = NSImage(size: NSSize(width: size, height: size))
img.lockFocus()
NSColor(red: 0.925, green: 0.925, blue: 0.92, alpha: 1).setFill()
NSRect(x: 0, y: 0, width: size, height: size).fill()
let ink = NSColor(red: 0.72, green: 0.72, blue: 0.71, alpha: 1)
ink.setFill()
// shoulders
let sh = NSBezierPath()
sh.move(to: NSPoint(x: 90, y: -40))
sh.curve(to: NSPoint(x: 400, y: 330), controlPoint1: NSPoint(x: 110, y: 230), controlPoint2: NSPoint(x: 260, y: 330))
sh.curve(to: NSPoint(x: 710, y: -40), controlPoint1: NSPoint(x: 540, y: 330), controlPoint2: NSPoint(x: 690, y: 230))
sh.close(); sh.fill()
// head
NSBezierPath(ovalIn: NSRect(x: 400 - 135, y: 350, width: 270, height: 300)).fill()
img.unlockFocus()
let rep = NSBitmapImageRep(data: img.tiffRepresentation!)!
try! rep.representation(using: .jpeg, properties: [.compressionFactor: 0.9])!.write(to: URL(fileURLWithPath: CommandLine.arguments[1]))
print("wrote", CommandLine.arguments[1])
