import type { ServiceContent } from "../types";
import { maintenanceInspections } from "./maintenance-inspections";
import { repairsTroubleshooting } from "./repairs-troubleshooting";
import { fuelSystems } from "./fuel-systems";
import { generators } from "./generators";
import { emergencyService } from "./emergency-service";
import { integratedContracting } from "./integrated-contracting";

export const powerContent: Record<string, ServiceContent> = {
  "maintenance-inspections": maintenanceInspections,
  "repairs-troubleshooting": repairsTroubleshooting,
  "fuel-systems": fuelSystems,
  generators,
  "emergency-service": emergencyService,
  "integrated-contracting": integratedContracting,
};
