"use client";

import { useState } from "react";
import { UploadCloud, X, FileText, CheckCircle2, Loader2 } from "lucide-react";

const MAX_FILES = 10;
const MAX_FILE_MB = 8;
const MAX_IMAGE_DIM = 1600;

async function compressImage(file: File): Promise<File> {
  if (!file.type.startsWith("image/") || file.type === "image/gif") return file;
  const bitmap = await createImageBitmap(file).catch(() => null);
  if (!bitmap) return file;
  const scale = Math.min(1, MAX_IMAGE_DIM / Math.max(bitmap.width, bitmap.height));
  if (scale === 1 && file.size < 1.5 * 1024 * 1024) return file;
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext("2d")!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  const blob: Blob | null = await new Promise((res) => canvas.toBlob(res, "image/jpeg", 0.8));
  if (!blob || blob.size >= file.size) return file;
  return new File([blob], file.name.replace(/\.[^.]+$/, ".jpg"), { type: "image/jpeg" });
}

export function SecondOpinionForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const addFiles = async (list: FileList | null) => {
    if (!list) return;
    setError("");
    const incoming = Array.from(list);
    const processed: File[] = [];
    for (const f of incoming) {
      const c = await compressImage(f);
      if (c.size > MAX_FILE_MB * 1024 * 1024) {
        setError(`${f.name} is over ${MAX_FILE_MB}MB even after compression. Try a smaller file.`);
        continue;
      }
      processed.push(c);
    }
    setFiles((prev) => [...prev, ...processed].slice(0, MAX_FILES));
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const fd = new FormData(e.currentTarget);
    fd.delete("files");
    files.forEach((f) => fd.append("files", f));
    try {
      const res = await fetch("/api/second-opinion", { method: "POST", body: fd });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Something went wrong. Please call us instead.");
      }
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "done") {
    return (
      <div className="card p-10 text-center">
        <CheckCircle2 className="w-12 h-12 mx-auto text-brand-500" strokeWidth={1.5} />
        <h2 className="mt-4 text-2xl font-semibold text-ink-800">Sent to estimating.</h2>
        <p className="mt-2 text-ink-500 max-w-md mx-auto">
          Our team reviews every submission before anyone gets dispatched. Expect a response within
          one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="card p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-sm font-medium text-ink-800">Name</span>
          <input name="name" required className="field mt-1.5" placeholder="Your name" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink-800">Phone</span>
          <input name="phone" required type="tel" className="field mt-1.5" placeholder="604-" />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-ink-800">Email</span>
        <input name="email" required type="email" className="field mt-1.5" placeholder="you@email.com" />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-ink-800">Property type</span>
        <select name="propertyType" className="field mt-1.5">
          <option>Strata / multi-family</option>
          <option>Office / commercial</option>
          <option>Industrial</option>
          <option>Retail / restaurant</option>
          <option>Single-family home</option>
          <option>Other</option>
        </select>
      </label>
      <label className="block">
        <span className="text-sm font-medium text-ink-800">What are you looking at?</span>
        <textarea
          name="message"
          required
          rows={4}
          className="field mt-1.5"
          placeholder="Tell us about the quote, report, or problem. The more context, the better the second opinion."
        />
      </label>

      <div>
        <span className="text-sm font-medium text-ink-800">
          Quotes, reports, photos, or plans
        </span>
        <label className="mt-1.5 flex flex-col items-center justify-center gap-2 border-2 border-dashed hairline rounded-md p-8 cursor-pointer hover:border-brand-500/50 transition text-center">
          <UploadCloud className="w-8 h-8 text-brand-500" strokeWidth={1.5} />
          <span className="text-sm text-ink-600">
            Drop files or tap to upload · up to {MAX_FILES} files, {MAX_FILE_MB}MB each
          </span>
          <span className="text-xs text-ink-400">Images are compressed automatically</span>
          <input
            type="file"
            name="files"
            multiple
            accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
            className="hidden"
            onChange={(e) => addFiles(e.target.files)}
          />
        </label>
        {files.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {files.map((f, i) => (
              <li key={`${f.name}-${i}`} className="flex items-center justify-between text-sm bg-cream-100 rounded px-3 py-2">
                <span className="flex items-center gap-2 text-ink-700 truncate">
                  <FileText className="w-4 h-4 text-brand-500 shrink-0" />
                  <span className="truncate">{f.name}</span>
                  <span className="text-xs text-ink-400 shrink-0">{(f.size / 1024 / 1024).toFixed(1)}MB</span>
                </span>
                <button
                  type="button"
                  onClick={() => setFiles(files.filter((_, j) => j !== i))}
                  aria-label={`Remove ${f.name}`}
                  className="p-1 text-ink-400 hover:text-ink-800"
                >
                  <X className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full justify-center text-base">
        {status === "sending" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending…
          </>
        ) : (
          "Get my second opinion"
        )}
      </button>
      <p className="text-xs text-ink-400 text-center">
        Everything goes straight to our estimating team. No dispatch fee, no obligation.
      </p>
    </form>
  );
}
