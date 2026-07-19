import Link from "next/link";

const links = [
  { label: "Overview", href: "/about" },
  { label: "Credentials", href: "/about/credentials" },
  { label: "Fleet & Branding", href: "/about/fleet" },
  { label: "Our Process", href: "/process" },
  { label: "Featured Work", href: "/work" },
  { label: "Careers", href: "/careers" },
];

export function AboutSubnav({ active }: { active: string }) {
  return (
    <div className="border-b hairline bg-cream-50">
      <div className="container-x">
        <nav aria-label="About Woola" className="flex gap-1 overflow-x-auto py-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition ${
                l.href === active
                  ? "bg-ink-800 text-cream-50"
                  : "text-ink-600 hover:bg-ink-50 hover:text-ink-800"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
