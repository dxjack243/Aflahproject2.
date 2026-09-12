import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { cn } from "@/lib/cn";

export function SiteHeader({
  query,
  onQuery,
  compact = false,
}: {
  query?: string;
  onQuery?: (value: string) => void;
  compact?: boolean;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="font-display text-2xl tracking-wide text-fg no-underline sm:text-3xl"
        >
          The Reason
        </Link>
        <span className="hidden font-serif text-sm italic text-muted sm:inline">
          Who built the giants
        </span>
        <div className="ml-auto flex min-w-0 items-center gap-2 sm:gap-3">
          <Link
            to="/legacy"
            className="inline-flex h-11 shrink-0 items-center rounded-full border border-line px-3 font-sans text-sm text-muted no-underline hover:border-fg/40 hover:text-fg"
          >
            <span className="sm:hidden">CR7</span>
            <span className="hidden sm:inline">The Legacy</span>
          </Link>
          {onQuery ? (
            <label className="relative min-w-0 max-w-56 flex-1 sm:max-w-72">
              <span className="sr-only">Search clubs and names</span>
              <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" />
              <input
                value={query}
                onChange={(e) => onQuery(e.target.value)}
                placeholder="Search a club or name"
                className={cn(
                  "h-11 w-full rounded-full border border-line bg-bg-elevated pr-4 pl-10",
                  "font-sans text-sm text-fg placeholder:text-subtle",
                  "outline-none focus-visible:border-fg/40",
                )}
              />
            </label>
          ) : compact ? (
            <Link to="/" className="font-sans text-sm text-muted no-underline hover:text-fg">
              All clubs
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
}
