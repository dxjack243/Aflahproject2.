import type { CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  CR7_AWARDS,
  CR7_CLUB_RECORDS,
  CR7_GOAT,
  CR7_HAT_TRICKS,
  CR7_HEADLINE,
  CR7_PORTUGAL,
  CR7_RECORDS,
  CR7_SECTIONS,
  CR7_SPELLS,
  CR7_STATS,
  CR7_TRANSFERS,
  CR7_UPDATED,
  type Cr7Spell,
} from "@/data/ronaldo";

export const Route = createFileRoute("/legacy")({
  component: LegacyPage,
  head: () => ({
    meta: [
      { title: "The Legacy — Cristiano Ronaldo" },
      {
        name: "description",
        content:
          "Cristiano Ronaldo's complete football legacy: clubs, records, trophies, Portugal, hat-tricks, and why he is the greatest.",
      },
    ],
  }),
});

function clubVars(colors: Cr7Spell["colors"]): CSSProperties {
  return {
    "--club-paper": colors.paper,
    "--club-ink": colors.ink,
    "--club-a": colors.a,
    "--club-b": colors.b,
  } as CSSProperties;
}

function LegacyPage() {
  const clubTrophies = CR7_SPELLS.flatMap((spell) =>
    spell.trophies.map((trophy) => ({ club: spell.club, ...trophy })),
  );

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader compact />

      <section className="relative min-h-[88dvh] overflow-hidden border-b border-line">
        <img
          src="/legacy/madrid.jpg"
          alt={CR7_HEADLINE.name}
          className="absolute inset-0 size-full object-cover object-[center_18%]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-bg/25 via-bg/55 to-bg" />
        <div className="relative mx-auto flex min-h-[88dvh] max-w-7xl flex-col justify-end gap-5 px-4 pt-24 pb-12 sm:px-6 sm:pb-16">
          <p className="hero-enter font-sans text-xs font-medium tracking-[0.22em] text-muted uppercase">
            {CR7_HEADLINE.kicker} · updated {CR7_UPDATED}
          </p>
          <h1 className="hero-enter max-w-5xl font-display text-[clamp(3.4rem,12vw,9.5rem)] leading-[0.82] tracking-wide uppercase">
            {CR7_HEADLINE.name}
          </h1>
          <p
            className="hero-enter max-w-2xl font-serif text-xl text-accent italic sm:text-2xl"
            style={{ animationDelay: "80ms" }}
          >
            {CR7_HEADLINE.line}
          </p>
          <p
            className="hero-enter font-sans text-sm text-muted"
            style={{ animationDelay: "120ms" }}
          >
            {CR7_HEADLINE.born}
            <span className="mx-2 opacity-40">/</span>
            Shirt {CR7_HEADLINE.number}
          </p>
        </div>
      </section>

      <nav
        aria-label="Legacy sections"
        className="sticky top-[57px] z-20 border-b border-line bg-bg/90 backdrop-blur-md"
      >
        <div className="toc-scroll mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 sm:px-6">
          {CR7_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="inline-flex h-11 shrink-0 items-center rounded-full px-3 font-sans text-sm text-muted no-underline hover:text-fg"
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="stats" className="scroll-mt-32 border-b border-line">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHead kicker="Career" title="The numbers" />
          <p className="mb-8 max-w-2xl font-serif text-lg text-muted italic">
            Official senior football, club and country, as of {CR7_UPDATED}. Twenty-one goals
            from a thousand.
          </p>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
            {CR7_STATS.map((stat) => (
              <div key={stat.label} className="bg-bg-elevated px-4 py-6 sm:px-5 sm:py-8">
                <p className="font-display text-[clamp(2.4rem,6vw,3.6rem)] leading-none tracking-wide tabular-nums">
                  {stat.value}
                </p>
                <p className="mt-2 font-sans text-xs tracking-[0.16em] text-muted uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="clubs" className="scroll-mt-32">
        <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16">
          <SectionHead kicker="The map" title="Every club he played" />
          <p className="mb-10 max-w-2xl font-serif text-lg text-muted italic">
            Lisbon, Manchester, Madrid, Turin, Manchester again, Riyadh. The sport moved
            with him.
          </p>
        </div>
        {CR7_SPELLS.map((spell) => (
          <ClubChapter key={spell.id} spell={spell} />
        ))}
      </section>

      <section id="transfers" className="scroll-mt-32 border-y border-line">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHead kicker="The market" title="Transfer history" />
          <ol className="relative mt-2 flex flex-col border-l border-line pl-6 sm:pl-8">
            {CR7_TRANSFERS.map((move) => (
              <li key={move.date} className="relative pb-10 last:pb-0">
                <span className="absolute top-1.5 -left-[1.9rem] size-3 rounded-full border border-line bg-accent sm:-left-[2.4rem]" />
                <p className="font-sans text-xs tracking-[0.16em] text-muted uppercase">
                  {move.date}
                  <span className="mx-2 opacity-40">/</span>
                  {move.fee}
                </p>
                <p className="mt-1 font-display text-3xl tracking-wide uppercase sm:text-4xl">
                  {move.from} → {move.to}
                </p>
                <p className="mt-2 max-w-2xl font-serif text-base text-muted italic sm:text-lg">
                  {move.note}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="trophies" className="scroll-mt-32">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHead kicker="Silver" title="Club trophies" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {clubTrophies.map((trophy) => (
              <div
                key={`${trophy.club}-${trophy.name}-${trophy.years}`}
                className="rounded-xl border border-line bg-bg-elevated p-5"
              >
                <p className="font-sans text-xs tracking-[0.16em] text-muted uppercase">
                  {trophy.club}
                </p>
                <p className="mt-2 font-display text-2xl tracking-wide uppercase">
                  {trophy.name}
                </p>
                <p className="mt-1 font-serif text-sm text-muted italic">{trophy.years}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="club-records" className="scroll-mt-32 border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHead kicker="By shirt" title="Club records" />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {CR7_CLUB_RECORDS.map((block) => (
              <div key={block.club} className="rounded-xl border border-line p-6">
                <h3 className="font-display text-3xl tracking-wide uppercase">{block.club}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="border-t border-line pt-3 font-serif text-base text-muted sm:text-lg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="portugal"
        className="scroll-mt-32"
        style={clubVars(CR7_PORTUGAL.colors)}
      >
        <div className="relative min-h-[70vh] overflow-hidden">
          <img
            src={CR7_PORTUGAL.image}
            alt={CR7_PORTUGAL.imageAlt}
            className="absolute inset-0 size-full object-cover object-[center_20%]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in oklab, var(--color-bg) 20%, transparent) 0%, color-mix(in oklab, var(--club-paper) 70%, var(--color-bg)) 58%, var(--club-paper) 100%)",
            }}
          />
          <div
            className="relative mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-end gap-3 px-4 pt-24 pb-10 sm:px-6"
            style={{ color: "var(--club-ink)" }}
          >
            <p className="font-sans text-xs tracking-[0.22em] uppercase opacity-70">
              International · Portugal
            </p>
            <h2 className="font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.88] tracking-wide uppercase">
              Captain of a country
            </h2>
            <p className="font-serif text-xl italic opacity-85">
              {CR7_PORTUGAL.caps} caps · {CR7_PORTUGAL.goals} goals · {CR7_PORTUGAL.hatTricks}{" "}
              hat-tricks
            </p>
          </div>
        </div>
        <div style={{ background: "var(--club-paper)", color: "var(--club-ink)" }}>
          <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_17rem]">
            <div className="flex flex-col gap-6">
              {CR7_PORTUGAL.story.map((paragraph) => (
                <p key={paragraph.slice(0, 28)} className="font-serif text-lg leading-relaxed sm:text-xl">
                  {paragraph}
                </p>
              ))}
              <p className="font-sans text-sm opacity-70">
                Debut {CR7_PORTUGAL.debut}
                <span className="mx-2 opacity-40">/</span>
                First goal {CR7_PORTUGAL.firstGoal}
              </p>
            </div>
            <aside className="flex h-fit flex-col gap-4">
              {CR7_PORTUGAL.trophies.map((trophy) => (
                <div
                  key={trophy.name}
                  className="rounded-lg border border-[color-mix(in_oklab,var(--club-ink)_16%,transparent)] p-4"
                >
                  <p className="font-display text-2xl tracking-wide uppercase">{trophy.name}</p>
                  <p className="mt-1 font-serif text-sm italic opacity-75">{trophy.years}</p>
                </div>
              ))}
            </aside>
          </div>
          <div className="mx-auto grid max-w-5xl gap-4 px-4 pb-14 sm:grid-cols-2 sm:px-6">
            {CR7_PORTUGAL.roleBeats.map((beat) => (
              <div
                key={beat.title}
                className="rounded-lg border border-[color-mix(in_oklab,var(--club-ink)_16%,transparent)] p-5"
              >
                <h3 className="font-display text-2xl tracking-wide uppercase">{beat.title}</h3>
                <p className="mt-2 font-serif text-base leading-relaxed opacity-80">{beat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="awards" className="scroll-mt-32 border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHead kicker="Individual" title="Awards" />
          <ul className="flex flex-col">
            {CR7_AWARDS.map((award) => (
              <li
                key={award.name}
                className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 border-t border-line py-5 sm:grid-cols-[5rem_minmax(0,1fr)_minmax(0,18rem)] sm:items-baseline"
              >
                <p className="font-display text-4xl leading-none tracking-wide tabular-nums">
                  {award.count}
                </p>
                <p className="font-display text-2xl tracking-wide uppercase sm:text-3xl">
                  {award.name}
                </p>
                <p className="col-span-2 font-serif text-sm text-muted italic sm:col-span-1 sm:text-right">
                  {award.years}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="records" className="scroll-mt-32 border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHead kicker="The ledger" title="Records in football" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {CR7_RECORDS.map((record) => (
              <article key={record.title} className="rounded-xl border border-line p-6">
                <h3 className="font-display text-2xl tracking-wide uppercase sm:text-3xl">
                  {record.title}
                </h3>
                <p className="mt-3 font-serif text-base text-muted sm:text-lg">{record.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="hatricks" className="scroll-mt-32 border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHead kicker="Threes" title="Hat-tricks" />
          <p className="mb-8 max-w-2xl font-serif text-lg text-muted italic">
            {CR7_HAT_TRICKS.note} {CR7_HAT_TRICKS.total} official. {CR7_HAT_TRICKS.international}{" "}
            for Portugal. {CR7_HAT_TRICKS.ucl} in the Champions League.
          </p>
          <ol className="flex flex-col">
            {CR7_HAT_TRICKS.famous.map((trick, index) => (
              <li
                key={`${trick.when}-${trick.where}`}
                className="grid grid-cols-[3rem_minmax(0,1fr)] gap-3 border-t border-line py-5 sm:grid-cols-[3.5rem_11rem_minmax(0,1fr)]"
              >
                <p className="font-display text-2xl text-subtle tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="font-sans text-sm text-muted sm:pt-1">{trick.when}</p>
                <div>
                  <p className="font-display text-2xl tracking-wide uppercase">
                    {trick.where}
                  </p>
                  <p className="font-serif text-sm text-muted italic">
                    {trick.shirt} — {trick.note}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="goat" className="scroll-mt-32 relative overflow-hidden border-t border-line">
        <img
          src="/legacy/united-first.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover object-[center_18%] opacity-25"
        />
        <div className="absolute inset-0 bg-linear-to-b from-bg via-bg/92 to-bg" />
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="font-sans text-xs tracking-[0.22em] text-muted uppercase">The last page</p>
          <h2 className="mt-3 font-display text-[clamp(3rem,8vw,6rem)] leading-[0.88] tracking-wide uppercase">
            Why he is the greatest
          </h2>
          <div className="mt-10 flex flex-col gap-6">
            {CR7_GOAT.map((paragraph, i) => (
              <p
                key={paragraph.slice(0, 24)}
                className={
                  i === 0
                    ? "font-serif text-2xl leading-snug text-accent italic sm:text-3xl"
                    : "font-serif text-lg leading-relaxed text-fg sm:text-xl"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
          <Link
            to="/"
            className="mt-12 inline-flex h-11 items-center font-sans text-sm text-muted no-underline hover:text-fg"
          >
            Back to the thirty clubs
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="font-sans text-xs font-medium tracking-[0.22em] text-muted uppercase">
        {kicker}
      </p>
      <h2 className="font-display text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.9] tracking-wide uppercase">
        {title}
      </h2>
    </div>
  );
}

function ClubChapter({ spell }: { spell: Cr7Spell }) {
  return (
    <article style={clubVars(spell.colors)}>
      <div className="relative min-h-[72vh] overflow-hidden">
        <img
          src={spell.image}
          alt={spell.imageAlt}
          className="absolute inset-0 size-full object-cover object-[center_18%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--color-bg) 18%, transparent) 0%, color-mix(in oklab, var(--club-paper) 62%, var(--color-bg)) 58%, var(--club-paper) 100%)",
          }}
        />
        <div
          className="relative mx-auto flex min-h-[72vh] max-w-5xl flex-col justify-end gap-3 px-4 pt-20 pb-10 sm:px-6"
          style={{ color: "var(--club-ink)" }}
        >
          <p className="font-sans text-xs tracking-[0.22em] uppercase opacity-70">
            {spell.years}
            <span className="mx-2 opacity-40">/</span>
            Shirt {spell.shirt}
          </p>
          <h3 className="font-display text-[clamp(3rem,9vw,7rem)] leading-[0.86] tracking-wide uppercase">
            {spell.club}
          </h3>
          <p className="max-w-2xl font-serif text-lg italic opacity-85 sm:text-xl">{spell.role}</p>
          <p className="font-sans text-sm tracking-wide uppercase opacity-70">
            {spell.apps} apps
            <span className="mx-2 opacity-40">/</span>
            {spell.goals} goals
            {spell.assists != null ? (
              <>
                <span className="mx-2 opacity-40">/</span>
                {spell.assists} assists
              </>
            ) : null}
          </p>
        </div>
      </div>
      <div style={{ background: "var(--club-paper)", color: "var(--club-ink)" }}>
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <div className="flex flex-col gap-5">
            <p className="font-serif text-xl italic sm:text-2xl">{spell.thesis}</p>
            {spell.story.map((paragraph) => (
              <p key={paragraph.slice(0, 28)} className="font-serif text-lg leading-relaxed sm:text-xl">
                {paragraph}
              </p>
            ))}
          </div>
          <aside className="flex h-fit flex-col gap-3">
            {spell.trophies.length === 0 ? (
              <p className="rounded-lg border border-[color-mix(in_oklab,var(--club-ink)_16%,transparent)] p-4 font-serif text-sm italic opacity-75">
                No trophy in this spell. The ledger still moved.
              </p>
            ) : (
              spell.trophies.map((trophy) => (
                <div
                  key={trophy.name}
                  className="rounded-lg border border-[color-mix(in_oklab,var(--club-ink)_16%,transparent)] p-4"
                >
                  <p className="font-display text-xl tracking-wide uppercase">{trophy.name}</p>
                  <p className="mt-1 font-serif text-sm italic opacity-75">{trophy.years}</p>
                </div>
              ))
            )}
          </aside>
        </div>
      </div>
    </article>
  );
}
