import type { ServiceContent } from "../types";
import { maintenance } from "./maintenance";
import { envelope } from "./envelope";
import { waterlineRepiping } from "./waterline-repiping";
import { construction } from "./construction";
import { propertyServices } from "./property-services";
import { turnkeyProjects } from "./turnkey-projects";

export const buildContent: Record<string, ServiceContent> = {
  maintenance,
  envelope,
  "waterline-repiping": waterlineRepiping,
  construction,
  "property-services": propertyServices,
  "turnkey-projects": turnkeyProjects,
};
