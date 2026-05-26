export type SystemType =
  | "furnace"
  | "ac"
  | "furnace_ac"
  | "heat_pump"
  | "heat_pump_furnace"
  | "tankless"
  | "tank";

export type HomeType = "detached" | "townhouse" | "apartment";

export type CalculatorInput = {
  sqft: number;
  system: SystemType;
  homeType: HomeType;
  ductwork: "existing" | "new" | "ductless";
  rebatesEligible: boolean;
};

export type CalculatorResult = {
  equipmentLow: number;
  equipmentHigh: number;
  installLow: number;
  installHigh: number;
  totalLow: number;
  totalHigh: number;
  rebateLow: number;
  rebateHigh: number;
  netLow: number;
  netHigh: number;
  notes: string[];
  systemLabel: string;
};

const systemMeta: Record<
  SystemType,
  { label: string; baseEquipLow: number; baseEquipHigh: number; perSqft: number; installLow: number; installHigh: number }
> = {
  furnace: {
    label: "High-efficiency gas furnace",
    baseEquipLow: 3800,
    baseEquipHigh: 5600,
    perSqft: 0.8,
    installLow: 1800,
    installHigh: 2800,
  },
  ac: {
    label: "Central air conditioner",
    baseEquipLow: 3200,
    baseEquipHigh: 5000,
    perSqft: 0.9,
    installLow: 1500,
    installHigh: 2500,
  },
  furnace_ac: {
    label: "Furnace + central AC pairing",
    baseEquipLow: 7000,
    baseEquipHigh: 10400,
    perSqft: 1.6,
    installLow: 3200,
    installHigh: 4800,
  },
  heat_pump: {
    label: "Cold-climate central heat pump",
    baseEquipLow: 6800,
    baseEquipHigh: 9800,
    perSqft: 1.7,
    installLow: 3500,
    installHigh: 5200,
  },
  heat_pump_furnace: {
    label: "Dual-fuel heat pump + furnace",
    baseEquipLow: 10200,
    baseEquipHigh: 14500,
    perSqft: 2.0,
    installLow: 4500,
    installHigh: 6800,
  },
  tankless: {
    label: "Tankless hot water system",
    baseEquipLow: 2400,
    baseEquipHigh: 4200,
    perSqft: 0.1,
    installLow: 1500,
    installHigh: 2600,
  },
  tank: {
    label: "Hot water tank replacement",
    baseEquipLow: 1100,
    baseEquipHigh: 1900,
    perSqft: 0,
    installLow: 700,
    installHigh: 1300,
  },
};

const rebatesBySystem: Record<SystemType, [number, number]> = {
  furnace: [400, 1000],
  ac: [0, 0],
  furnace_ac: [400, 1000],
  heat_pump: [3000, 6000],
  heat_pump_furnace: [3500, 7500],
  tankless: [500, 1000],
  tank: [0, 300],
};

export function estimate(input: CalculatorInput): CalculatorResult {
  const meta = systemMeta[input.system];
  const sqftFactor = Math.max(0, input.sqft - 1200);
  const equipmentLow = Math.round(meta.baseEquipLow + sqftFactor * meta.perSqft * 0.9);
  const equipmentHigh = Math.round(meta.baseEquipHigh + sqftFactor * meta.perSqft * 1.1);

  let installLow = meta.installLow;
  let installHigh = meta.installHigh;

  if (input.ductwork === "new") {
    installLow += 2800;
    installHigh += 5400;
  }
  if (input.ductwork === "ductless") {
    if (input.system === "heat_pump") {
      installLow += 1200;
      installHigh += 2800;
    }
  }
  if (input.homeType === "detached") {
    installLow = Math.round(installLow * 1.1);
    installHigh = Math.round(installHigh * 1.2);
  }
  if (input.homeType === "apartment") {
    installLow = Math.round(installLow * 0.85);
    installHigh = Math.round(installHigh * 0.95);
  }

  const totalLow = equipmentLow + installLow;
  const totalHigh = equipmentHigh + installHigh;
  const [rLow, rHigh] = rebatesBySystem[input.system];
  const rebateLow = input.rebatesEligible ? rLow : 0;
  const rebateHigh = input.rebatesEligible ? rHigh : 0;

  const netLow = Math.max(0, totalLow - rebateHigh);
  const netHigh = Math.max(0, totalHigh - rebateLow);

  const notes: string[] = [];
  if (input.system === "heat_pump" || input.system === "heat_pump_furnace") {
    notes.push("CleanBC, BC Hydro and FortisBC rebates are combinable. Up to $7,500 in stacked rebates is realistic.");
  }
  if (input.ductwork === "new") {
    notes.push("New ductwork adds material cost. We size and design ducts to TECA Quality First standards.");
  }
  if (input.sqft > 3500) {
    notes.push("Homes over 3,500 sqft often benefit from zoned systems — we'll quote those at the in-home estimate.");
  }
  if (input.system === "furnace_ac") {
    notes.push("Pairing furnace with AC during install saves ~$1,800 vs. installing them separately later.");
  }
  notes.push("Final pricing depends on equipment tier, line set length, electrical service, and permit fees.");

  return {
    equipmentLow,
    equipmentHigh,
    installLow,
    installHigh,
    totalLow,
    totalHigh,
    rebateLow,
    rebateHigh,
    netLow,
    netHigh,
    notes,
    systemLabel: meta.label,
  };
}

export function formatCurrency(n: number) {
  return n.toLocaleString("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  });
}
