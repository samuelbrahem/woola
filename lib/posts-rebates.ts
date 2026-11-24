import type { Post } from "./posts";

/**
 * Rebate and incentive studies, published every three days by the scheduled
 * "Woola rebate study" routine (see docs/REBATE-STUDIES.md).
 *
 * Rules for every entry:
 *  - Newest first. One object per study. Never edit or remove earlier entries
 *    except to correct a fact.
 *  - category "Rebates & Compliance"; division set to the division that does
 *    the work the rebate pays for.
 *  - Every dollar figure, date and eligibility rule must come from the
 *    program's own page, listed in `sources`.
 *  - `services` links point at that division's own domain.
 */
export const rebateStudies: Post[] = [];
