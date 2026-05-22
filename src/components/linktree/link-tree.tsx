import { useMemo, useState } from "react";
import { ProfileHeader } from "./profile-header";
import { profile } from "./links-data";
import { SmartSearchBar } from "./smart-search-bar";
import { LinkCard } from "./link-card";
import { links } from "./links-data";
import { searchLinks, type SearchResult } from "./smart-search";

export function LinkTree() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<SearchResult | null>(null);
  const [isThinking, setIsThinking] = useState(false);

  const matchMap = useMemo(() => {
    const map = new Map<string, { label: string; explanation: string }>();
    result?.matches.forEach((m) =>
      map.set(m.linkId, { label: m.label, explanation: m.explanation }),
    );
    return map;
  }, [result]);

  const hasMatches = (result?.matches.length ?? 0) > 0;

  const runSearch = (q: string) => {
    setQuery(q);
    if (!q.trim()) {
      setResult(null);
      return;
    }
    setIsThinking(true);
    // Simulate AI thinking latency for the animation to land.
    window.setTimeout(() => {
      setResult(searchLinks(q, links));
      setIsThinking(false);
    }, 420);
  };

  const clear = () => {
    setQuery("");
    setResult(null);
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[560px] flex-col gap-8 px-5 pb-16 pt-12 sm:px-6 sm:pt-16">
      <ProfileHeader />

      <SmartSearchBar
        value={query}
        onChange={setQuery}
        onSubmit={runSearch}
        onClear={clear}
        isThinking={isThinking}
        summary={result?.summary}
        hasResult={!!result}
      />

      <ul className="flex flex-col gap-3">
        {links.map((link, i) => {
          const match = matchMap.get(link.id);
          const highlighted = !!match;
          const dimmed = !!result && hasMatches && !highlighted;
          return (
            <LinkCard
              key={link.id}
              link={link}
              index={i}
              highlighted={highlighted}
              dimmed={dimmed}
              matchLabel={match?.label}
              explanation={match?.explanation}
            />
          );
        })}
      </ul>

      <footer className="mt-auto pt-8 text-center text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-foreground/85">{profile.status}</span>
          <span aria-hidden className="text-muted-foreground/60">·</span>
          <span>{profile.graduation}</span>
        </span>
      </footer>
    </main>
  );
}