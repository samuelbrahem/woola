/**
 * BambooHR job board. Reads the public careers feed that every BambooHR
 * account exposes at https://<subdomain>.bamboohr.com/careers/list (no API
 * key, no auth); applicants are sent to the BambooHR posting itself, so
 * applications land in Woola's ATS.
 *
 * The subdomain is the first part of Woola's BambooHR login URL
 * (https://<subdomain>.bamboohr.com). Set BAMBOOHR_SUBDOMAIN in .env.
 */

import type { Division } from "./divisions";

export type Opening = {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  division: Division["slug"] | null;
  applyUrl: string;
};

type BambooJob = {
  id: string;
  jobOpeningName: string;
  departmentLabel?: string | null;
  employmentStatusLabel?: string | null;
  location?: { city?: string | null; state?: string | null } | null;
  isRemote?: boolean | null;
};

const SUBDOMAIN = process.env.BAMBOOHR_SUBDOMAIN?.trim();

export const bambooConfigured = Boolean(SUBDOMAIN);

export function bambooCareersUrl() {
  return SUBDOMAIN ? `https://${SUBDOMAIN}.bamboohr.com/careers` : null;
}

/** Map a posting to a division from its department, then its title. */
function guessDivision(job: BambooJob): Division["slug"] | null {
  const text = `${job.departmentLabel ?? ""} ${job.jobOpeningName}`.toLowerCase();
  if (/\bbuild|construction|carpent|envelope|renovat|maintenance tech/.test(text)) return "build";
  if (/\bpower|generator|ups\b|battery/.test(text)) return "power";
  if (/electric|\bev\b|lighting|panel/.test(text)) return "electrical";
  if (/\bmech(anical)?\b|hvac|plumb|refrigerat|gas ?fit|sheet metal|boiler/.test(text)) return "mechanical";
  return null;
}

function formatLocation(job: BambooJob) {
  const parts = [job.location?.city, job.location?.state]
    .map((p) => p?.trim())
    .filter(Boolean);
  if (job.isRemote) parts.push("Remote");
  return parts.join(", ") || "Metro Vancouver";
}

/** Open postings, newest first as BambooHR orders them. Empty when not configured or unreachable. */
export async function getOpenings(): Promise<Opening[]> {
  if (!SUBDOMAIN) return [];
  try {
    const res = await fetch(`https://${SUBDOMAIN}.bamboohr.com/careers/list`, {
      headers: { Accept: "application/json" },
      next: { revalidate: 600 },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as { result?: BambooJob[] };
    return (data.result ?? []).map((job) => ({
      id: String(job.id),
      title: job.jobOpeningName,
      department: job.departmentLabel?.trim() || "",
      type: job.employmentStatusLabel?.trim() || "Full-time",
      location: formatLocation(job),
      division: guessDivision(job),
      applyUrl: `https://${SUBDOMAIN}.bamboohr.com/careers/${job.id}`,
    }));
  } catch {
    return [];
  }
}
