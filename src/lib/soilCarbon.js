// Eco Agri Lama - Soil Carbon Ledger & Sequestration Tracker

export const CARBON_PRACTICES = [
  {
    id: 1,
    practice: "Cover Cropping (Crimson Clover)",
    date: "2026-10-12",
    impactKgCo2e: 145.5,
    status: "Verified Sequestration",
    spookyNote: "Summons deep root webs to lock carbon beneath the frost."
  },
  {
    id: 2,
    practice: "No-Till Pumpkin Patch Management",
    date: "2026-10-18",
    impactKgCo2e: 210.0,
    status: "Verified Sequestration",
    spookyNote: "Preserves ancient fungal networks undisturbed in the dark soil."
  },
  {
    id: 3,
    practice: "Biochar Amendment Ritual",
    date: "2026-10-25",
    impactKgCo2e: 325.2,
    status: "Active Ledger",
    spookyNote: "Infuses charred organic embers to trap greenhouse gases eternally."
  }
];

export function calculateTotalCarbonOffset(practices) {
  return practices.reduce((total, item) => total + item.impactKgCo2e, 0);
}
