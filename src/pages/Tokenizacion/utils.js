// Datos de GPT-4o (modelo más reciente)
export const gpt4oExamples = [
  { texto: "Hola", tokens: 1, ids: "49864" },
  { texto: "¿Cómo estás?", tokens: 3, ids: "99293, 58166, 30" },
  { texto: "S.O.L.I.D.", tokens: 6, ids: "50, 17193, 2024, 9134, 1696, 13" },
  { texto: "Strawberry", tokens: 3, ids: "2645, 675, 15717" },
  { texto: "Me encanta la programación", tokens: 4, ids: "5587, 92845, 557, 129811" },
];

// Datos de GPT-3.5-turbo (modelo anterior)
export const gpt35Examples = [
  { texto: "Hola", tokens: 3, ids: "198, 69112, 198" },
  { texto: "¿Cómo estás?", tokens: 6, ids: "198, 31282, 96997, 1826, 7206, 5380" },
  { texto: "S.O.L.I.D.", tokens: 7, ids: "198, 50, 8548, 1236, 2506, 920, 627" },
  { texto: "Strawberry", tokens: 4, ids: "2645, 675, 15717, 198" },
  { texto: "Me encanta la programación", tokens: 7, ids: "7979, 3289, 8424, 1208, 2068, 5840, 198" },
];

// Cabeceras de tablas
export const gpt4oHeaders = ['Texto', 'Tokens', 'IDs de los tokens'];
export const gpt35Headers = ['Texto', 'Tokens', 'IDs de los tokens'];

// Datos de comparación de eficiencia
export const comparacionEficiencia = {
  gpt4o: {
    nombre: "GPT-4o",
    icono: "🚀",
    badge: "Más eficiente",
    badgeVariant: "success",
    stats: [
      { label: "Hola:", value: "1 token" },
      { label: "¿Cómo estás?:", value: "3 tokens" },
      { label: "Me encanta programar:", value: "4 tokens" },
    ]
  },
  gpt35: {
    nombre: "GPT-3.5-turbo",
    icono: "🐢",
    badge: "Menos eficiente",
    badgeVariant: "warning",
    stats: [
      { label: "Hola:", value: "3 tokens" },
      { label: "¿Cómo estás?:", value: "6 tokens" },
      { label: "Me encanta programar:", value: "7 tokens" },
    ]
  }
};

// Textos explicativos
export const textosExplicativos = {
  heroSubtitle: "La IA NO ve letras. Ve tokens.",
  tokenizacionDef: "Proceso de dividir texto en fragmentos más pequeños llamados tokens que la IA puede procesar.",
  importancia: [
    "💰 Costo: Pagas por cada token. GPT-4o es más eficiente que GPT-3.5.",
    "🧠 Contexto: Si tu prompt excede el límite, la IA olvida el principio.",
    "🐛 Errores: Preguntar '¿cuántas R tiene strawberry?' falla porque la IA no ve letras sueltas."
  ],
  qrUrl: "https://tiktokenizer.vercel.app",
  momentoWow: {
    titulo: "¡El momento WOW!",
    texto: '"Strawberry" tiene 8 letras pero solo 3 tokens en GPT-4o.',
    explicacion: "¿Por qué la IA no puede contar letras? Porque NO ve letras sueltas. Ve 'Straw' como un bloque, 'berry' como otro. ¡Nunca ve la 'r' individual!",
    nota: "En GPT-3.5-turbo, 'Strawberry' son 4 tokens. ¡Los modelos mejoran con cada versión!"
  },
  fraseFinal: "La IA no ve letras. Ve trozos. Por eso se equivoca en cosas que para nosotros son obvias."
};

// Tooltips
export const tooltips = {
  tokenizacion: {
    termino: "Tokenización",
    definicion: "Proceso de dividir texto en fragmentos más pequeños llamados tokens que la IA puede procesar."
  }
};