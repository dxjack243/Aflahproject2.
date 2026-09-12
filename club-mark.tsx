import type { ClubPattern } from "@/data/clubs";

export function ClubMark({
  pattern,
  className,
}: {
  pattern: ClubPattern;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true" fill="none">
      {pattern === "stripes" ? (
        <>
          <rect x="8" y="8" width="12" height="64" fill="var(--club-a)" />
          <rect x="34" y="8" width="12" height="64" fill="var(--club-b)" />
          <rect x="60" y="8" width="12" height="64" fill="var(--club-a)" />
        </>
      ) : null}
      {pattern === "ring" ? (
        <>
          <circle cx="40" cy="40" r="28" stroke="var(--club-a)" strokeWidth="6" />
          <circle cx="40" cy="40" r="12" fill="var(--club-b)" />
        </>
      ) : null}
      {pattern === "chevron" ? (
        <path d="M12 58 L40 18 L68 58" stroke="var(--club-a)" strokeWidth="8" strokeLinejoin="miter" />
      ) : null}
      {pattern === "bars" ? (
        <>
          <rect x="8" y="18" width="64" height="10" fill="var(--club-a)" />
          <rect x="8" y="36" width="64" height="10" fill="var(--club-b)" />
          <rect x="8" y="54" width="64" height="10" fill="var(--club-a)" />
        </>
      ) : null}
      {pattern === "cross" ? (
        <>
          <rect x="34" y="8" width="12" height="64" fill="var(--club-a)" />
          <rect x="8" y="34" width="64" height="12" fill="var(--club-b)" />
        </>
      ) : null}
      {pattern === "diamond" ? (
        <path d="M40 10 L70 40 L40 70 L10 40 Z" stroke="var(--club-a)" strokeWidth="6" />
      ) : null}
      {pattern === "split" ? (
        <>
          <path d="M8 8 H72 L8 72 Z" fill="var(--club-a)" />
          <path d="M72 8 V72 H8 Z" fill="var(--club-b)" opacity="0.85" />
        </>
      ) : null}
      {pattern === "grid" ? (
        <>
          <rect x="12" y="12" width="22" height="22" fill="var(--club-a)" />
          <rect x="46" y="12" width="22" height="22" fill="var(--club-b)" />
          <rect x="12" y="46" width="22" height="22" fill="var(--club-b)" />
          <rect x="46" y="46" width="22" height="22" fill="var(--club-a)" />
        </>
      ) : null}
      {pattern === "arc" ? (
        <path d="M12 62 A28 28 0 0 1 68 62" stroke="var(--club-a)" strokeWidth="8" strokeLinecap="square" />
      ) : null}
      {pattern === "sun" ? (
        <>
          <circle cx="40" cy="40" r="10" fill="var(--club-a)" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <rect
              key={deg}
              x="38"
              y="8"
              width="4"
              height="14"
              fill="var(--club-b)"
              transform={`rotate(${deg} 40 40)`}
            />
          ))}
        </>
      ) : null}
      {pattern === "block" ? (
        <rect x="16" y="16" width="48" height="48" fill="var(--club-a)" />
      ) : null}
      {pattern === "wave" ? (
        <path
          d="M8 50 C 22 20, 38 20, 52 50 S 72 80, 72 40"
          stroke="var(--club-a)"
          strokeWidth="7"
          strokeLinecap="square"
        />
      ) : null}
    </svg>
  );
}
