import type { ServiceContent } from "../types";
import { electrical } from "./electrical";
import { tenantImprovements } from "./tenant-improvements";
import { ledLighting } from "./led-lighting";
import { evChargers } from "./ev-chargers";
import { panelUpgrades } from "./panel-upgrades";
import { infraredScanning } from "./infrared-scanning";

export const electricalContent: Record<string, ServiceContent> = {
  electrical,
  "tenant-improvements": tenantImprovements,
  "led-lighting": ledLighting,
  "ev-chargers": evChargers,
  "panel-upgrades": panelUpgrades,
  "infrared-scanning": infraredScanning,
};
