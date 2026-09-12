import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ClubPoster } from "@/components/club-poster";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/cn";
import { FILTERS, filterClubs, type FilterId } from "@/data/clubs";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterId>("all");
  const clubs = useMemo(() => filterClubs(query, filter), [query, filter]);
  const featured = clubs.slice(0, 3);
  const rest = clubs.slice(3);
  const showFeatured = !query && filter === "all";

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader query={query} onQuery={setQuery} />
      <section className="relative overflow-hidden border-b border-line">
        <img
          src="/atmospheres/hero.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-bg/30 via-bg/70 to-bg" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 pt-12 pb-14 sm:px-6 sm:pt-16 sm:pb-20">
          <p className="hero-enter font-sans text-xs font-medium tracking-[0.22em] text-muted uppercase">
            A football argument
          </p>
          <div className="flex max-w-4xl flex-col gap-2">
            <HeroLink delay="40ms" slug="como">
              Cesc Fàbregas is the reason for Como.
            </HeroLink>
            <HeroLink delay="90ms" slug="real-madrid">
              Pérez and Santiago Bernabéu, for Real Madrid.
            </HeroLink>
            <HeroLink delay="140ms" slug="barcelona">
              Johan Cruyff, for Barcelona.
            </HeroLink>
          </div>
          <p
            className="hero-enter max-w-xl font-serif text-lg text-muted italic sm:text-xl"
            style={{ animationDelay: "180ms" }}
          >
            Every giant has someone who built the thing you see today. Thirty clubs. The
            presidents, coaches, and players who made them.
          </p>
        </div>
      </section>

      <Link
        to="/legacy"
        className="group relative block overflow-hidden border-b border-line no-underline"
      >
        <img
          src="/legacy/united-first.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover object-[center_20%] opacity-45 transition-transform duration-(--motion-slow) ease-(--ease-out) group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-r from-bg via-bg/80 to-bg/40" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-3 px-4 py-10 sm:px-6 sm:py-12">
          <p className="font-sans text-xs font-medium tracking-[0.22em] text-muted uppercase">
            The second page · Cristiano Ronaldo
          </p>
          <p className="max-w-3xl font-display text-[clamp(2.2rem,6vw,4.4rem)] leading-[0.9] tracking-wide uppercase">
            The legacy — every club, every record, why he is the greatest.
          </p>
          <p className="max-w-xl font-serif text-base text-muted italic sm:text-lg">
            Sporting to Al-Nassr. Five Ballons. Five European Cups. Portugal. The argument
            that does not fit on a poster.
          </p>
        </div>
      </Link>

      <div className="sticky top-[57px] z-20 border-b border-line bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {FILTERS.map((item) => {
            const active = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={cn(
                  "h-11 shrink-0 rounded-full px-4 font-sans text-sm font-medium transition-colors duration-(--motion-quick)",
                  active
                    ? "bg-fg text-bg"
                    : "border border-line bg-transparent text-muted hover:text-fg",
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <p className="font-sans text-sm text-muted">
            {clubs.length} {clubs.length === 1 ? "argument" : "arguments"}
          </p>
          <p className="hidden font-serif text-sm text-subtle italic sm:block">
            Not a museum. An argument.
          </p>
        </div>
        {clubs.length === 0 ? (
          <p className="py-20 text-center font-serif text-xl text-muted italic">
            No club matches that argument.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {showFeatured ? (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {featured.map((club, i) => (
                  <ClubPoster key={club.slug} club={club} index={i} featured />
                ))}
              </div>
            ) : null}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {(showFeatured ? rest : clubs).map((club, i) => (
                <ClubPoster
                  key={club.slug}
                  club={club}
                  index={showFeatured ? i + 3 : i}
                />
              ))}
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

function HeroLink({
  children,
  slug,
  delay,
}: {
  children: string;
  slug: string;
  delay: string;
}) {
  return (
    <Link
      to="/club/$slug"
      params={{ slug }}
      className="hero-enter font-display text-[clamp(2.2rem,7vw,5.2rem)] leading-[0.92] tracking-wide text-fg uppercase no-underline decoration-accent decoration-2 underline-offset-4 hover:underline"
      style={{ animationDelay: delay }}
    >
      {children}
    </Link>
  );
}
