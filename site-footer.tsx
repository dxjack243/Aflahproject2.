import { Link } from "@tanstack/react-router";
import { CLUBS } from "@/data/clubs";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <p className="max-w-lg font-serif text-base text-muted italic">
          Every club has more than one architect. These are the names worth starting the fight
          with. Then there is the other argument —{" "}
          <Link to="/legacy" className="text-fg underline underline-offset-4">
            Cristiano Ronaldo
          </Link>
          .
        </p>
        <p className="font-display text-sm tracking-wide text-subtle uppercase">
          {CLUBS.length} clubs · The Reason
        </p>
      </div>
    </footer>
  );
}
