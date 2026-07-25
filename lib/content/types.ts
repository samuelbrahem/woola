export type ContentBlock = {
  /** Rendered as an H2. Omit for a continuation block. */
  heading?: string;
  paragraphs?: string[];
  /** Rendered as a two-column checked list. */
  bullets?: string[];
};

export type RelatedLink = { label: string; href: string; note?: string };

export type ServiceContent = {
  /** Intro paragraphs rendered under the page H1. Keep to 1-3. */
  lead: string[];
  blocks: ContentBlock[];
  /** Unique closing section per page. Never reuse wording across pages. */
  closing?: { heading: string; paragraphs: string[] };
  cta?: { label: string; href: string };
  related?: RelatedLink[];
  /** Internal editorial flags: facts Brett must confirm before this copy ships. Not rendered publicly. */
  needsFromBrett?: string[];
};
