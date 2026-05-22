import type { LinkItem } from "./links-data";

export type SearchMatch = {
  linkId: string;
  explanation: string;
  score: number;
};

export type SearchResult = {
  query: string;
  matches: SearchMatch[];
  summary: string;
};

/**
 * Lightweight metadata-driven matcher that mimics an AI-assisted smart search.
 * Scores links by overlap between query tokens and each link's keywords,
 * then returns short human explanations pulled from the link's metadata.
 */
export function searchLinks(query: string, links: LinkItem[]): SearchResult {
  const cleaned = query.trim().toLowerCase();
  if (!cleaned) return { query, matches: [], summary: "" };

  const tokens = Array.from(
    new Set(cleaned.split(/[^a-z0-9+]+/i).filter((t) => t.length > 1)),
  );

  const matches: SearchMatch[] = [];

  for (const link of links) {
    const { keywords, explanations } = link.metadata;
    let score = 0;
    let bestKeyword: string | null = null;

    for (const keyword of keywords) {
      const k = keyword.toLowerCase();
      if (cleaned.includes(k)) {
        const weight = k.length; // longer phrase matches win
        if (weight > score) {
          score = weight;
          bestKeyword = keyword;
        }
      } else {
        for (const token of tokens) {
          if (k.includes(token) || token.includes(k)) {
            const weight = Math.min(k.length, token.length);
            if (weight > score) {
              score = weight;
              bestKeyword = keyword;
            }
          }
        }
      }
    }

    if (score > 0 && bestKeyword) {
      const explanation =
        explanations[bestKeyword.toLowerCase()] ??
        `Mentions ${bestKeyword} — open the link for full context.`;
      matches.push({ linkId: link.id, explanation, score });
    }
  }

  matches.sort((a, b) => b.score - a.score);

  const summary =
    matches.length === 0
      ? `No direct matches for "${query}". Try terms like "Kubernetes", "research", or "hackathon".`
      : matches.length === 1
        ? `Found 1 link related to "${query}".`
        : `Found ${matches.length} links related to "${query}".`;

  return { query, matches, summary };
}