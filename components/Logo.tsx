import Link from "next/link";
import Image from "next/image";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link href="/" className="inline-flex items-center group" aria-label="Woola home">
      <Image
        src={variant === "light" ? "/brand/woola-ca-white.svg" : "/brand/woola-ca-black.svg"}
        alt="Woola"
        width={150}
        height={84}
        priority
        className="logo-mark"
      />
    </Link>
  );
}
