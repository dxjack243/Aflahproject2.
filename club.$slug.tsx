import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ClubMark } from "@/components/club-mark";
import { ClubPoster } from "@/components/club-poster";
import { SiteHeader } from "@/components/site-header";
import { getClub, relatedClubs } from "@/data/clubs";

export const Route = createFileRoute("/club/$slug")({
  loader: ({ params }) => {
    const club = getClub(params.slug);
    if (!club) throw notFound();
    return { club };
  },
  component: ClubPage,
  notFoundComponent: ClubNotFound,
});

function ClubPage() {
  const { club } = Route.useLoaderData();
  const related = relatedClubs(club);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader compact />
      <article
        style={
          {
            "--club-paper": club.colors.paper,
            "--club-ink": club.colors.ink,
            "--club-a": club.colors.a,
            "--club-b": club.colors.b,
          } as React.CSSProperties
        }
      >
        <header className="relative min-h-[70vh] overflow-hidden border-b border-line">
          <img
            src={`/atmospheres/${club.atmosphere}.jpg`}
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in oklab, var(--color-bg) 25%, transparent) 0%, color-mix(in oklab, var(--club-paper) 55%, var(--color-bg)) 55%, var(--club-paper) 100%)",
            }}
          />
          <div className="relative mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-end gap-4 px-4 pt-16 pb-10 sm:px-6 sm:pb-14">
            <Link
              to="/"
              className="inline-flex h-11 w-fit items-center gap-2 font-sans text-sm no-underline"
              style={{ color: "color-mix(in oklab, var(--club-ink) 70%, transparent)" }}
            >
              <ArrowLeft className="size-4" />
              All clubs
            </Link>
            <div className="flex items-end justify-between gap-4">
              <p
                className="font-sans text-xs font-medium tracking-[0.22em] uppercase"
                style={{ color: "color-mix(in oklab, var(--club-ink) 65%, transparent)" }}
              >
                {club.city} · {club.country}
              </p>
              <ClubMark pattern={club.pattern} className="size-12 opacity-80 sm:size-16" />
            </div>
            <h1
              className="font-display text-[clamp(3rem,9vw,7rem)] leading-[0.88] tracking-wide uppercase"
              style={{ color: "var(--club-ink)" }}
            >
              {club.reasonLine}
            </h1>
            <p
              className="font-serif text-xl italic sm:text-2xl"
              style={{ color: "color-mix(in oklab, var(--club-ink) 80%, transparent)" }}
            >
              {club.isLine} {club.club}.
            </p>
            <p
              className="font-sans text-sm font-medium tracking-wide uppercase"
              style={{ color: "color-mix(in oklab, var(--club-ink) 60%, transparent)" }}
            >
              {club.roleLabel}
              <span className="mx-2 opacity-50">/</span>
              {club.era}
            </p>
          </div>
        </header>
        <div style={{ background: "var(--club-paper)", color: "var(--club-ink)" }}>
          <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_16rem]">
            <div className="flex flex-col gap-6">
              {club.story.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="font-serif text-lg leading-relaxed sm:text-xl">
                  {paragraph}
                </p>
              ))}
            </div>
            <aside className="flex h-fit flex-col gap-3 rounded-lg border border-[color-mix(in_oklab,var(--club-ink)_16%,transparent)] p-5">
              <p className="font-sans text-xs font-medium tracking-[0.18em] uppercase opacity-60">
                {club.momentLabel}
              </p>
              <p className="font-serif text-base leading-relaxed italic">{club.moment}</p>
              <p className="font-sans text-sm opacity-70">{club.people.join(" · ")}</p>
            </aside>
          </div>
        </div>
      </article>
      {related.length > 0 ? (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <h2 className="mb-6 font-display text-3xl tracking-wide uppercase">Same continent</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {related.map((item, i) => (
              <ClubPoster key={item.slug} club={item} index={i} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

function ClubNotFound() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <SiteHeader compact />
      <main className="mx-auto flex max-w-lg flex-1 flex-col items-start justify-center gap-4 px-4">
        <h1 className="font-display text-5xl tracking-wide uppercase">No such argument</h1>
        <p className="font-serif text-lg text-muted italic">That club is not in this list — yet.</p>
        <Link to="/" className="font-sans text-sm text-fg underline underline-offset-4">
          Back to the giants
        </Link>
      </main>
    </div>
  );
}
