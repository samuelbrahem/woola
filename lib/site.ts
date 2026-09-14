import { cities } from "./cities";

export const site = {
  name: "Woola",
  fullName: "Woola Services Group",
  tagline: "Strata & Commercial Property Services",
  promise: "Out Work. Out Perform. Out Play.",
  description:
    "Woola is a single accountable partner for strata, commercial and high-end residential properties across Metro Vancouver and the Sea-to-Sky: mechanical, electrical, and building services under one roof.",
  hq: {
    line1: "#110 – 42 Fawcett Rd.",
    line2: "Coquitlam, BC V3K 6X9",
  },
  phone: "604-800-3617",
  emergencyPhone: "604-800-3617",
  email: "services@woola.ca",
  hours: "Mon – Fri · 7:00 AM – 5:00 PM",
  emergency: "24/7 emergency dispatch for contracted clients",
  // Only figures Woola can stand behind: service-model facts and counts
  // derived from site data (lib/cities.ts). A technician headcount goes back
  // in once Brett supplies a number he's comfortable maintaining.
  stats: [
    { value: `${cities.length}+`, label: "Municipalities served" },
    { value: "4", label: "Divisions, one PO" },
    { value: "24/7", label: "Emergency response" },
    { value: "1", label: "Dispatcher, one call" },
  ],
  certifications: [
    "TECA Quality First",
    "WorkSafeBC COR",
    "PAMA Member",
    "BOMA BC",
    "CleanBC Better Homes Contractor",
    "FortisBC Trade Ally",
    "BC Hydro Power Smart Alliance",
    "Generac Authorized Service",
    "Gold Seal Certified PMs",
    "Cross Connection Control Certified",
    "Class A & B Gas Fitters",
    "ODP Refrigeration Trade",
  ],
};
