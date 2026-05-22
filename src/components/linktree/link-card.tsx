import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LinkItem } from "./links-data";

type Props = {
  link: LinkItem;
  index: number;
  highlighted: boolean;
  dimmed: boolean;
  matchLabel?: string;
  explanation?: string;
};

export function LinkCard({ link, index, highlighted, dimmed, matchLabel, explanation }: Props) {
  const Icon = link.icon;

  return (
    <li
      className="animate-fade-up"
      style={{ animationDelay: `${120 + index * 60}ms` }}
    >
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer noopener"
        className={cn(
          "group relative flex items-center gap-4 rounded-2xl border border-border/70 bg-card px-4 py-4 sm:px-5",
          "shadow-[var(--shadow-soft)] transition-all duration-[var(--transition-base)]",
          "hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] hover:border-primary/40",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          highlighted && "border-primary/60 animate-link-pulse",
          dimmed && "opacity-40 saturate-50",
        )}
      >
        <span
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-secondary text-secondary-foreground transition-colors",
            "group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary",
            highlighted && "bg-primary text-primary-foreground border-primary",
          )}
        >
          <Icon className="h-5 w-5" aria-hidden />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="truncate text-[15px] font-semibold text-foreground">
              {link.title}
            </span>
            {highlighted && (
              <span className="rounded-full bg-highlight px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-highlight-foreground">
                Match
              </span>
            )}
          </div>
          <p className="mt-0.5 truncate text-sm text-muted-foreground">
            {link.description}
          </p>
        </div>

        <ArrowUpRight
          className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-[var(--transition-base)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
          aria-hidden
        />
      </a>

      {highlighted && explanation && (
        <div
          role="note"
          className="mt-2 ml-2 flex items-start gap-2 rounded-xl border border-primary/30 bg-primary/10 px-3 py-2 text-[13px] leading-relaxed text-foreground/90 animate-fade-up backdrop-blur-sm"
        >
          <span className="mt-0.5 text-primary">↳</span>
          <span>
            {matchLabel && (
              <span className="font-semibold text-foreground">[{matchLabel}]: </span>
            )}
            {explanation}
          </span>
        </div>
      )}
    </li>
  );
}