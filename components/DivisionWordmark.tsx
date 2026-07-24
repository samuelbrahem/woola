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
  sm: { imgW: 320, imgH: 150, imgClass: "h-14 w-auto" },
  md: { imgW: 400, imgH: 188, imgClass: "h-20 w-auto" },
  lg: {
    imgW: 668,
    imgH: 314,
    imgClass: "w-[260px] md:w-[340px] lg:w-[420px] h-auto",
  },
};

export function DivisionWordmark({
  division,
  size = "md",
  priority = false,
  invert = false,
}: {
  division: Division;
  size?: Size;
  priority?: boolean;
  invert?: boolean;
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
      style={invert ? { filter: "brightness(0) invert(1)" } : undefined}
    />
  );
}
