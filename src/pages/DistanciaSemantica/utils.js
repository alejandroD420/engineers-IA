// Puntos para el mapa semántico - coordenadas normalizadas (-1 a 1)
export const puntosMapa = [
  // Zona masculina (superior izquierda)
  { x: -0.5, y: 0.5, label: "Rey", color: "#ef4444", group: "Realeza" },
  { x: -0.4, y: 0.55, label: "Hombre", color: "#f97316", group: "Género" },
  
  // Zona femenina (superior derecha)
  { x: 0.4, y: 0.5, label: "Reina", color: "#ec4899", group: "Realeza" },
  { x: 0.5, y: 0.55, label: "Mujer", color: "#d946ef", group: "Género" },
  
  // Animales (inferior izquierda)
  { x: -0.6, y: -0.3, label: "gato", color: "#3b82f6", group: "Felinos" },
  { x: -0.55, y: -0.25, label: "felino", color: "#3b82f6", group: "Felinos" },
  { x: -0.4, y: -0.2, label: "perro", color: "#22c55e", group: "Caninos" },
  { x: -0.35, y: -0.15, label: "canino", color: "#22c55e", group: "Caninos" },
  
  // Objetos (inferior derecha)
  { x: 0.5, y: -0.4, label: "mesa", color: "#eab308", group: "Muebles" },
  { x: 0.55, y: -0.35, label: "silla", color: "#eab308", group: "Muebles" },
];

// Configuración del mapa
export const mapaConfig = {
  xLabel: "Abstracto ← → Concreto",
  yLabel: "Femenino ← → Masculino"
};

// 4 ejercicios de analogías
export const analogias = [
  { 
    pregunta: "🔄 Rey está a hombre como Reina está a ___", 
    respuesta: "mujer",
    explicacion: "Rey - Hombre + Mujer = Reina"
  },
  { 
    pregunta: "🗼 París está a Francia como Tokio está a ___", 
    respuesta: "Japón",
    explicacion: "Capital ↔ País"
  },
  { 
    pregunta: "🌡️ Caliente está a frío como alto está a ___", 
    respuesta: "bajo",
    explicacion: "Relación de opuestos"
  },
  { 
    pregunta: "🏥 Médico está a hospital como profesor está a ___", 
    respuesta: "escuela / universidad",
    explicacion: "Profesión ↔ Lugar de trabajo"
  },
];

// Textos explicativos
export const textosExplicativos = {
  heroSubtitle: "Palabras con significado parecido tienen vectores cerca.",
  queEs: "En el espacio vectorial de la IA, cada palabra tiene coordenadas.",
  similares: "Palabras similares → vectores cercanos",
  diferentes: "Palabras diferentes → vectores lejanos",
  comoLoHace: "La IA no razona. Solo hace álgebra lineal.",
  operacionNota: "La resta elimina 'masculinidad', la suma agrega 'feminidad'. ¡Geometría pura!",
  mapaNota: "Observa cómo 'Rey' y 'Hombre' están cerca (zona masculina), mientras que 'Reina' y 'Mujer' están cerca (zona femenina). ¡Los animales y objetos están en otras regiones del mapa!",
  granVerdad: "La IA no entiende que 'Rey' es el gobernante de un reino. Solo sabe que en el espacio vectorial, 'Rey' está cerca de 'Hombre' y 'Reina' está cerca de 'Mujer'.",
  granVerdadConclusion: "No es comprensión. ¡Es geometría!",
  fraseFinal: "La IA no razona. Mide distancias entre vectores. Palabras parecidas = vectores cerca. Eso es todo."
};

// Tooltips
export const tooltips = {
  distanciaSemantica: {
    termino: "Distancia Semántica",
    definicion: "Medida de qué tan cerca están dos palabras en significado según sus vectores numéricos."
  }
};