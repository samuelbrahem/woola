# Rebate studies: publishing playbook

A scheduled routine publishes one new "rebate study" to woola.ca/blog every
three days. This file is its instruction set. Humans can follow it too.

## What a rebate study is

A plain-English explainer on one rebate, incentive, grant or regulatory change
that affects buildings Woola services in Metro Vancouver and BC, written for
property managers, strata councils, building owners and homeowners. Examples:

- BC Hydro, FortisBC or CleanBC programs for heat pumps, boilers, hot water,
  lighting, controls, EV charging, energy studies or custom projects
- Federal programs (Natural Resources Canada, Canada Infrastructure Bank,
  greener homes or buildings programs)
- Municipal incentives (City of Vancouver, Coquitlam, Burnaby, Surrey, etc.)
- New or changed rules with deadlines (strata reports, building bylaws,
  Technical Safety BC directives, refrigerant rules)

## Step by step

1. Read `lib/posts.ts`, `lib/posts-rebates.ts`, `lib/posts-field-guides.ts` and
   `lib/posts-field-guides-2.ts` to see what is already covered. Never repeat
   a topic unless the program has materially changed; then write an update
   that says what changed.
2. Research. Use web search to find a program that is new, recently changed,
   about to close, or not yet covered. Prefer official program pages
   (bchydro.com, fortisbc.com, betterhomesbc.ca, gov.bc.ca, canada.ca,
   vancouver.ca and other municipal sites).
3. Verify every fact on the official page itself: amounts, eligibility,
   deadlines, who applies, and whether a registered contractor is required.
   If you cannot confirm a figure on an official page, leave it out and say
   "check the program page for current amounts". Never invent numbers.
   If no program can be verified this run, stop without publishing.
4. Pick the division whose work the rebate pays for:
   - `mechanical`: heat pumps, boilers, hot water, ventilation, refrigeration, plumbing, gas
   - `electrical`: EV charging, lighting, panels and service upgrades, controls wiring, EPRs
   - `power`: generators, transfer switches, UPS, battery storage, resilience grants
   - `build`: envelope, windows, insulation, roofing, repiping, renovations
5. Write the post as a new object at the TOP of the `rebateStudies` array in
   `lib/posts-rebates.ts`, following the `Post` type in `lib/posts.ts`:
   - `slug`: kebab-case, include the program name and "bc" or the city
   - `title`: say what the reader gets, e.g. "FortisBC commercial boiler rebate: who qualifies and how to apply"
   - `excerpt`: 2 sentences, under 300 characters
   - `date`: today's date (YYYY-MM-DD, Pacific time)
   - `readingTime`: estimate at 220 words per minute
   - `category`: "Rebates & Compliance"
   - `division`: from step 4
   - `author`: `{ name: "Woola <Division>", role: "Field Notes" }`
   - `cover` / `coverAlt`: reuse a relevant photo already in `public/blog/` or
     `public/field/`. Do not hotlink images. Only set `coverCredit` when the
     cover is an Unsplash photo that already has a credit elsewhere in the posts files.
   - `body`: 5 to 7 sections: what the program is, who qualifies, what it
     pays (only verified figures), how to apply step by step, common reasons
     applications fail, how it fits with other programs, what to do next.
     Use `bullets` for lists.
   - `faqs`: 3 or 4 real questions people search, with short direct answers
   - `sources`: every official page used, with clear labels
   - `services`: 2 or 3 links to the division's own site, using these bases:
     mechanical `https://woolamech.ca/`, electrical `https://woolaelectrical.ca/`,
     power `https://woolapower.ca/`, build `https://woolabuild.ca/`, with
     service slugs that exist in `lib/divisions.ts`
6. Voice: plain, direct, specific. No em dashes. No hype words (unlock,
   seamless, elevate, robust, cutting-edge, game-changer). No made-up
   statistics or client stories. Canadian spelling.
7. Check: run `npx tsc --noEmit -p .` and `npx next build`. Both must pass.
8. Publish: commit only `lib/posts-rebates.ts` (and any new image) with the
   message `Rebate study: <title>`, then push to `main`. Netlify deploys
   automatically. If the build fails on Netlify with no log, the fix is a
   cache-cleared rebuild; note it in the run summary.
9. After deploy, submit the new URL to IndexNow with `bash scripts/indexnow.sh`
   if the key file is available; otherwise skip.

## Never

- Publish an amount, deadline or eligibility rule you did not see on an
  official page.
- Edit unrelated files, change site design, or touch DNS, env vars or Netlify settings.
- Use the Vercel CLI or any Vercel account.
