import { Link } from "@tanstack/react-router";
import { ClubMark } from "@/components/club-mark";
import { cn } from "@/lib/cn";
import type { Club } from "@/data/clubs";

export function ClubPoster({
  club,
  index,
  featured = false,
}: {
  club: Club;
  index: number;
  featured?: boolean;
}) {
  return (
    <Link
      to="/club/$slug"
      params={{ slug: club.slug }}
      className={cn(
        "poster-enter group relative flex min-h-80 flex-col overflow-hidden rounded-xl p-5 no-underline",
        "transition-transform duration-(--motion-fast) ease-(--ease-out)",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg",
        featured ? "min-h-100 sm:min-h-120" : "min-h-80 sm:min-h-96",
      )}
      style={
        {
          "--club-paper": club.colors.paper,
          "--club-ink": club.colors.ink,
          "--club-a": club.colors.a,
          "--club-b": club.colors.b,
          backgroundColor: "var(--club-paper)",
          color: "var(--club-ink)",
          animationDelay: `${Math.min(index, 12) * 40}ms`,
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={`/atmospheres/${club.atmosphere}.jpg`}
          alt=""
          className="size-full object-cover opacity-35 transition-transform duration-(--motion-slow) ease-(--ease-out) group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--club-paper) 35%, transparent) 0%, var(--club-paper) 78%)",
          }}
        />
        <div className="pitch-lines absolute inset-0 opacity-40" />
      </div>
      <div className="relative flex items-start justify-between gap-3">
        <span className="font-display text-lg tracking-wide text-[color-mix(in_oklab,var(--club-ink)_55%,transparent)] tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <ClubMark pattern={club.pattern} className="size-10 opacity-80 sm:size-12" />
      </div>
      <div className="relative mt-auto flex flex-col gap-1 pt-16">
        <p className="font-display text-[clamp(2.1rem,5vw,3.4rem)] leading-[0.9] tracking-wide uppercase">
          {club.reasonLine}
        </p>
        <p className="font-serif text-base italic text-[color-mix(in_oklab,var(--club-ink)_75%,transparent)] sm:text-lg">
          {club.isLine}
        </p>
        <p className="font-display text-[clamp(2.4rem,6vw,4rem)] leading-[0.88] tracking-wide uppercase">
          {club.shortClub}
        </p>
        <p className="mt-3 font-sans text-xs font-medium tracking-wide text-[color-mix(in_oklab,var(--club-ink)_60%,transparent)] uppercase">
          {club.roleLabel}
          <span className="mx-2 opacity-50">/</span>
          {club.era}
        </p>
      </div>
    </Link>
  );
}
