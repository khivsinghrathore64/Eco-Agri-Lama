// Eco Agri Lama - AI Remedy & Spooky Telemetry Engine

export const SPOOKY_REMEDIES = {
  pests: {
    title: "Phantom Aphid Exorcism",
    symptom: "Sticky residue and withered leaves under the moonlight.",
    remedy: "Spray a potent concoction of organic neem oil mixed with crushed garlic and ghost pepper extract at dusk."
  },
  soil: {
    title: "Cursed Acidic Soil Revitalization",
    symptom: "Stunted growth and ghostly pale foliage.",
    remedy: "Incorporate bone meal and aged compost to balance soil pH and summon vital microbial activity."
  },
  irrigation: {
    title: "Blood Moon Watering Ritual",
    symptom: "Parched, cracked earth gasping for hydration.",
    remedy: "Implement deep drip irrigation strictly during pre-dawn hours to prevent evaporation and root rot."
  },
  disease: {
    title: "Cryptic Blight Quarantine",
    symptom: "Dark necrotic lesions spreading across stems like a shadow.",
    remedy: "Prune infected branches immediately with sterilized shears and apply a copper-based organic fungicide."
  }
};

export function getOfflineRemedy(topic) {
  return SPOOKY_REMEDIES[topic] || {
    title: "General Harvest Blessing",
    symptom: "Uncertain agricultural distress.",
    remedy: "Maintain optimal soil moisture, rotate crops cyclically, and consult the soil-carbon ledger."
  };
}
