import Link from "next/link";
import Image from "next/image";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link href="/" className="inline-flex items-center group" aria-label="Woola home">
      <Image
        src="/brand/woola-main.png"
        alt="Woola"
        width={150}
        height={72}
        priority
        className={`logo-mark ${variant === "dark" ? "logo-mark--invert" : ""}`}
      />
    </Link>
  );
}
