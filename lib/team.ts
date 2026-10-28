/**
 * Leadership shown on /about. Photos are run through scripts/team-photos/cutout
 * (person cut-out, same grey backdrop, desaturated, face-centred square) so they
 * read as one set; public/team/placeholder.jpg is the stand-in for anyone
 * without a photo. Titles marked TODO still need Woola's confirmation.
 */
export type TeamMember = {
  name: string;
  /** Role as it should appear on the site. */
  title: string;
  linkedin: string;
  /** Path under /public, or null until a photo is supplied. */
  photo: string | null;
};

export const team: TeamMember[] = [
  {
    name: "Brett Johnston",
    title: "Co-founder",
    linkedin: "https://www.linkedin.com/in/brettjohnston53/",
    photo: "/team/brett-johnston.jpg",
  },
  {
    name: "Chantel K.",
    title: "Leadership team", // TODO: confirm surname and title with Woola
    linkedin: "https://www.linkedin.com/in/chantel-k-5990596b/",
    photo: "/team/chantel-k.jpg",
  },
  {
    name: "Graham McVeigh",
    title: "Leadership team", // TODO: confirm title with Woola
    linkedin: "https://www.linkedin.com/in/graham-mcveigh-b5957459/",
    photo: "/team/graham-mcveigh.jpg", // 200px LinkedIn thumbnail upscaled; replace with a full-size shot
  },
];
