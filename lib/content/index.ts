import type { ServiceContent } from "./types";
import { residentialContent } from "./residential";
import { mechanicalContent } from "./mechanical";
import { powerContent } from "./power";
import { electricalContent } from "./electrical";
import { buildContent } from "./build";

const divisionContent: Record<string, Record<string, ServiceContent>> = {
  mechanical: mechanicalContent,
  power: powerContent,
  electrical: electricalContent,
  build: buildContent,
};

export function getServiceContent(division: string, service: string): ServiceContent | null {
  return divisionContent[division]?.[service] ?? null;
}

export function getResidentialContent(slug: string): ServiceContent | null {
  return residentialContent[slug] ?? null;
}

export { residentialContent };
export type { ServiceContent, ContentBlock, RelatedLink } from "./types";
