import Image from "next/image";
import type { Division } from "@/lib/divisions";

const pngBySlug: Record<Division["slug"], string> = {
  mechanical: "/brand/woola-mechanical-black.png",
  power: "/brand/woola-power-black.png",
  electrical: "/brand/woola-electrical-black.png",
  build: "/brand/woola-build-black.png",
};

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, { imgW: number; imgH: number; imgClass: string }> = {
  sm: { imgW: 120, imgH: 67, imgClass: "h-8 w-auto" },
  md: { imgW: 146, imgH: 82, imgClass: "h-16 w-auto" },
  lg: {
    imgW: 584,
    imgH: 326,
    imgClass: "w-[260px] md:w-[340px] lg:w-[420px] h-auto",
  },
};

export function DivisionWordmark({
  division,
  size = "md",
  priority = false,
}: {
  division: Division;
  size?: Size;
  priority?: boolean;
}) {
  const s = sizes[size];
  return (
    <Image
      src={pngBySlug[division.slug]}
      alt={division.name}
      width={s.imgW}
      height={s.imgH}
      priority={priority}
      className={s.imgClass}
    />
  );
}
