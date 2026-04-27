// Palabras y sus vectores simulados
export const palabrasVectores = [
  { label: "gato", values: [0.23, -0.45, 0.67, 0.12, -0.34, 0.45, -0.22, 0.33], color: "#3b82f6" },
  { label: "felino", values: [0.24, -0.44, 0.68, 0.11, -0.33, 0.46, -0.21, 0.34], color: "#3b82f6" },
  { label: "perro", values: [0.18, -0.32, 0.55, -0.08, -0.22, 0.35, -0.18, 0.28], color: "#22c55e" },
  { label: "canino", values: [0.19, -0.31, 0.56, -0.07, -0.21, 0.36, -0.17, 0.29], color: "#22c55e" },
  { label: "mesa", values: [-0.45, 0.23, -0.12, 0.78, 0.56, -0.34, 0.67, -0.12], color: "#eab308" },
  { label: "silla", values: [-0.43, 0.25, -0.10, 0.76, 0.54, -0.32, 0.65, -0.10], color: "#eab308" },
  { label: "rey", values: [0.85, -0.12, 0.34, -0.22, 0.45, 0.23, -0.56, 0.78], color: "#ef4444" },
  { label: "reina", values: [0.28, 0.45, -0.15, 0.72, -0.33, 0.56, -0.23, 0.34], color: "#ec4899" },
];

// Ejemplo de conversión texto → vector
export const conversionEjemplos = [
  { palabra: "gato", vector: "[0.23, -0.45, 0.67, 0.12, -0.34, 0.45, -0.22, 0.33]" },
  { palabra: "felino", vector: "[0.24, -0.44, 0.68, 0.11, -0.33, 0.46, -0.21, 0.34]" },
];

// Textos explicativos
export const textosExplicativos = {
  heroSubtitle: "Cada palabra se convierte en un embedding: un vector de números.",
  queEsEmbedding: "Un embedding es una lista de números (vector) que representa una palabra. Palabras similares tienen vectores similares.",
  dimensiones: [
    "¿Es un animal? (dimensión 1)",
    "¿Es un objeto? (dimensión 2)",
    "¿Es un concepto abstracto? (dimensión 3)",
    "... cientos de dimensiones más"
  ],
  paraQueSirve: [
    "🔍 Búsqueda semántica: Encontrar documentos por significado, no por palabras exactas.",
    "📊 Clasificación: Agrupar textos similares (spam vs no spam).",
    "➕ Operaciones matemáticas: 'Rey' - 'Hombre' + 'Mujer' = 'Reina'",
    "🎯 Sistemas RAG: Encontrar información relevante en documentos."
  ],
  vectoresIntro: "Cada palabra se convierte en un vector. Palabras similares tienen vectores parecidos.",
  conversionNota: "¿Ves? ¡Los vectores son casi idénticos porque 'gato' y 'felino' tienen el mismo significado!",
  fraseFinal: "Texto entra, números salen. Palabras parecidas = números parecidos. Eso es la magia de los embeddings."
};

// Tooltips
export const tooltips = {
  embedding: {
    termino: "Embedding",
    definicion: "Representación numérica de una palabra en forma de vector. Palabras similares tienen vectores similares."
  }
};