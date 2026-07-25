import type { ServiceContent } from "../types";
import { heating } from "./heating";
import { cooling } from "./cooling";
import { plumbing } from "./plumbing";
import { hotWater } from "./hot-water";
import { drains } from "./drains";
import { gasFitting } from "./gas-fitting";
import { indoorAirQuality } from "./indoor-air-quality";
import { repairs } from "./repairs";
import { installations } from "./installations";
import { maintenancePlans } from "./maintenance-plans";
import { emergency } from "./emergency";

export const residentialContent: Record<string, ServiceContent> = {
  heating,
  cooling,
  plumbing,
  "hot-water": hotWater,
  drains,
  "gas-fitting": gasFitting,
  "indoor-air-quality": indoorAirQuality,
  repairs,
  installations,
  "maintenance-plans": maintenancePlans,
  emergency,
};
