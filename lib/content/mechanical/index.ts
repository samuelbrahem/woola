import type { ServiceContent } from "../types";
import { hvac } from "./hvac";
import { heatingSystems } from "./heating-systems";
import { coolingSystems } from "./cooling-systems";
import { ventilationIaq } from "./ventilation-iaq";
import { plumbing } from "./plumbing";
import { drainage } from "./drainage";
import { gas } from "./gas";
import { refrigeration } from "./refrigeration";
import { preventativeMaintenance } from "./preventative-maintenance";
import { retrofits } from "./retrofits";

export const mechanicalContent: Record<string, ServiceContent> = {
  hvac,
  "heating-systems": heatingSystems,
  "cooling-systems": coolingSystems,
  "ventilation-iaq": ventilationIaq,
  plumbing,
  drainage,
  gas,
  refrigeration,
  "preventative-maintenance": preventativeMaintenance,
  retrofits,
};
