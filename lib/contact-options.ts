/**
 * Dropdown choices on the contact form. The service and request type lead
 * the email subject so dispatch can route sales enquiries and service calls
 * without opening the message. Keep wording plain; visitors pick fast.
 */
export const CONTACT_OPTIONS = {
  role: [
    "Property manager",
    "Strata council member",
    "Building owner or operator",
    "Homeowner",
    "Contractor or partner",
    "Other",
  ],
  request: [
    "Service call (something needs fixing)",
    "Urgent, needs attention today",
    "Quote or proposal",
    "Maintenance program",
    "General question",
  ],
  service: [
    "Mechanical: HVAC, boilers, refrigeration",
    "Mechanical: plumbing, drains, gas",
    "Power: generators, transfer switches, UPS",
    "Electrical: panels, EV charging, lighting",
    "Build: repairs, maintenance, envelope",
    "Not sure, let dispatch decide",
  ],
} as const;
