/** Meta description that fits a search snippet: cut at a sentence or clause
 *  boundary before `max` characters instead of mid-word. */
export function metaDescription(text: string, max = 155) {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const end = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("; "), cut.lastIndexOf(", "));
  const base = end > 60 ? cut.slice(0, end) : cut.slice(0, cut.lastIndexOf(" "));
  return base.replace(/[,;:\s]+$/, "") + ".";
}
