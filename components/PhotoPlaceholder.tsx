import { ImageIcon } from "lucide-react";

export function PhotoPlaceholder({
  label,
  dark = false,
  className = "",
}: {
  label: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-2 ${
        dark
          ? "border-cream-100/25 bg-white/5 text-cream-100/60"
          : "border-ink-200 bg-cream-100 text-ink-400"
      } ${className}`}
    >
      <ImageIcon className="w-6 h-6 opacity-70" strokeWidth={1.5} />
      <span className="text-xs uppercase tracking-wider">{label}</span>
      <span className="text-[10px] opacity-70">Photo coming soon</span>
    </div>
  );
}
