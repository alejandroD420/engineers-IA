// Datos de ejemplos de predicción
export const ejemplos = [
  { inicio: "Hola, ¿cómo", completado: "Hola, ¿cómo estás?", prediccion: "estás" },
  { inicio: "El cielo es de color", completado: "El cielo es de color azul", prediccion: "azul" },
  { inicio: "La IA no", completado: "La IA no piensa", prediccion: "piensa" },
  { inicio: "Para validar un email", completado: "Para validar un email usamos regex", prediccion: "usamos" },
];

// Pasos del ejemplo paso a paso
export const pasosPrediccion = [
  { paso: 1, texto: '"La"', probabilidad: "85%" },
  { paso: 2, texto: '"La capital"', probabilidad: "78%" },
  { paso: 3, texto: '"La capital de"', probabilidad: "92%" },
  { paso: 4, texto: '"La capital de Francia"', probabilidad: "95%" },
  { paso: 5, texto: '"La capital de Francia es"', probabilidad: "88%" },
  { paso: 6, texto: '"La capital de Francia es París"', probabilidad: "99%" },
  { paso: 7, texto: '"La capital de Francia es París."', probabilidad: "100%" },
];

// Datos de probabilidades para visualización
export const probabilidades = [
  { palabra: "azul", porcentaje: 85, color: "#3b82f6" },
  { palabra: "gris", porcentaje: 8, color: "#64748b" },
  { palabra: "rojo", porcentaje: 4, color: "#ef4444" },
  { palabra: "verde", porcentaje: 3, color: "#22c55e" },
];

// Textos explicativos
export const textosExplicativos = {
  heroSubtitle: "Un LLM es una máquina de autocompletado estadístico glorificada",
  significado: "La IA no tiene conciencia, no tiene intenciones, no razona. Solo calcula qué palabra tiene más probabilidad de venir después de la anterior.",
  analogia: "La IA es como un actor que ha leído 10 millones de guiones. Puede improvisar como detective, médico o poeta. Pero no ES detective, no sabe medicina, no siente poesía. Solo imita muy bien lo que ha visto.",
  buclePrediccion: [
    "Lee TODO tu prompt",
    "Predice la PRIMERA palabra de su respuesta",
    "Agrega esa palabra a lo que 've'",
    "Predice la SIGUIENTE palabra (basada en todo + su respuesta parcial)",
    "Repite hasta que predice un token de 'fin'"
  ],
  fraseFinal: "La IA no razona. Punto. Predice qué palabra sigue. Entender esto explica el 80% de sus comportamientos raros."
};

// Tooltips
export const tooltips = {
  noConciencia: {
    termino: "NO tiene conciencia",
    definicion: "Nunca ha tenido pensamientos, sentimientos o intenciones. Solo procesa números."
  }
};