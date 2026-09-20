export interface WordCategory {
  id: string;
  label: string;
  emoji: string;
  words: string[];
}

export const WORD_CATEGORIES: WordCategory[] = [
  {
    id: "cibo",
    label: "Cibo & Bevande",
    emoji: "🍕",
    words: [
      "Pizza", "Gelato", "Cappuccino", "Pasta", "Sushi", "Panino",
      "Cioccolato", "Formaggio", "Vino", "Popcorn", "Hamburger", "Tiramisù",
    ],
  },
  {
    id: "luoghi",
    label: "Luoghi",
    emoji: "🗺️",
    words: [
      "Spiaggia", "Montagna", "Aeroporto", "Biblioteca", "Ospedale", "Deserto",
      "Stadio", "Vulcano", "Metropolitana", "Castello", "Foresta", "Isola",
    ],
  },
  {
    id: "professioni",
    label: "Professioni",
    emoji: "👷",
    words: [
      "Medico", "Insegnante", "Pompiere", "Cuoco", "Astronauta", "Pilota",
      "Fotografo", "Idraulico", "Giornalista", "Barista", "Detective", "Sarto",
    ],
  },
  {
    id: "sport",
    label: "Sport",
    emoji: "⚽",
    words: [
      "Calcio", "Tennis", "Nuoto", "Pallavolo", "Sci", "Boxe",
      "Ciclismo", "Scherma", "Basket", "Golf", "Arrampicata", "Surf",
    ],
  },
  {
    id: "animali",
    label: "Animali",
    emoji: "🐾",
    words: [
      "Leone", "Delfino", "Pinguino", "Ragno", "Elefante", "Gufo",
      "Squalo", "Farfalla", "Canguro", "Polpo", "Cammello", "Pipistrello",
    ],
  },
  {
    id: "oggetti",
    label: "Oggetti quotidiani",
    emoji: "🧦",
    words: [
      "Ombrello", "Occhiali", "Zaino", "Specchio", "Chiave", "Candela",
      "Forbici", "Orologio", "Valigia", "Bussola", "Lente d'ingrandimento", "Termometro",
    ],
  },
  {
    id: "tecnologia",
    label: "Tecnologia",
    emoji: "💻",
    words: [
      "Smartphone", "Robot", "Drone", "Router", "Stampante 3D", "Auricolari",
      "Videocamera", "Console", "Tastiera", "Realtà virtuale", "Batteria", "Satellite",
    ],
  },
  {
    id: "eventi",
    label: "Feste & Eventi",
    emoji: "🎉",
    words: [
      "Carnevale", "Matrimonio", "Capodanno", "Concerto", "Compleanno", "Halloween",
      "Laurea", "Festival", "Sagra", "Fuochi d'artificio", "Presepe", "Palio",
    ],
  },
  {
    id: "corpo",
    label: "Corpo umano",
    emoji: "🫀",
    words: [
      "Cuore", "Cervello", "Polmone", "Scheletro", "Occhio", "Sorriso",
      "Impronta digitale", "Voce", "Sistema immunitario", "Battito cardiaco", "Riflesso", "Respiro",
    ],
  },
  {
    id: "natura",
    label: "Natura & Fenomeni",
    emoji: "🌪️",
    words: [
      "Temporale", "Arcobaleno", "Terremoto", "Marea", "Eclissi", "Valanga",
      "Aurora boreale", "Nebbia", "Tornado", "Corrente marina", "Brina", "Vulcano attivo",
    ],
  },
];

export function pickRandomWord(categoryId: string | null): { category: WordCategory; word: string } {
  const pool = categoryId
    ? WORD_CATEGORIES.filter((c) => c.id === categoryId)
    : WORD_CATEGORIES;
  const category = pool[Math.floor(Math.random() * pool.length)];
  const word = category.words[Math.floor(Math.random() * category.words.length)];
  return { category, word };
}
