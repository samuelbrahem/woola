/**
 * Animated schematic: system lines trace in from the edges and converge into
 * one pulsing node. Optionally, the Woola van drives the longest line.
 * Shared by the homepage hero and audience landing heroes.
 */
export function CircuitField({
  withVan = false,
  className = "pointer-events-none absolute right-0 inset-y-0 h-full w-[58%] hidden md:block opacity-60",
}: {
  withVan?: boolean;
  className?: string;
}) {
  const paths = [
    "M600 80 H314 Q300 80 300 94 V366 Q300 380 286 380 H84",
    "M600 210 H374 Q360 210 360 224 V366 Q360 380 346 380 H84",
    "M600 560 H314 Q300 560 300 546 V394 Q300 380 286 380 H84",
    "M430 700 V394 Q430 380 416 380 H84",
    "M520 0 V226 Q520 240 506 240 H254 Q240 240 240 254 V366 Q240 380 226 380 H84",
  ];
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 700"
      preserveAspectRatio="xMaxYMid slice"
      className={className}
    >
      {paths.map((d, i) => (
        <path
          key={`t${i}`}
          d={d}
          fill="none"
          stroke="#188CA0"
          strokeWidth="1.5"
          strokeLinejoin="round"
          className="hero-trace"
          style={{ animationDelay: `${0.3 + i * 0.25}s` }}
        />
      ))}
      {[
        [600, 80],
        [600, 210],
        [600, 560],
        [430, 700],
        [520, 0],
      ].map(([x, y], i) => (
        <circle key={`n${i}`} cx={x} cy={y} r="4" fill="#188CA0" opacity="0.8" />
      ))}
      <circle cx="84" cy="380" r="7" fill="#188CA0">
        <animate attributeName="r" values="6;9;6" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="84" cy="380" r="14" fill="none" stroke="#188CA0" strokeWidth="1.5" opacity="0.5">
        <animate attributeName="r" values="12;22" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2.4s" repeatCount="indefinite" />
      </circle>
      {withVan && (
        <g className="hero-vans">
          <g>
            <image href="/brand/van-topdown.png" width="46" height="30.9" x="-23" y="-15.5" />
            <animateMotion dur="14s" begin="1s" repeatCount="indefinite" rotate="auto" path={paths[4]} />
          </g>
        </g>
      )}
    </svg>
  );
}
