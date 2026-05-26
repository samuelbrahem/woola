import { ReactNode } from "react";

export function Section({
  children,
  className = "",
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section className={`${dark ? "dark-section" : ""} ${className}`}>
      <div className="container-x section">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 ${dark ? "text-cream-50" : "text-ink-800"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg ${dark ? "text-ink-200" : "text-ink-500"}`}>{description}</p>
      )}
    </div>
  );
}
