// Respuestas según el valor de temperature
export const getRespuestaPorTemperatura = (temperature) => {
  if (temperature < 0.2) {
    return {
      texto: "Fido",
      explicacion: "Respuesta muy predecible y segura"
    };
  } else if (temperature < 0.4) {
    return {
      texto: "Max",
      explicacion: "Respuesta común, poco creativa"
    };
  } else if (temperature < 0.6) {
    return {
      texto: "Luna",
      explicacion: "Respuesta equilibrada, ligeramente creativa"
    };
  } else if (temperature < 0.8) {
    return {
      texto: "Thor",
      explicacion: "Respuesta más creativa e inesperada"
    };
  } else {
    return {
      texto: "Lord Pancrasio Destructor de Galaxias",
      explicacion: "Respuesta altamente creativa, impredecible y divertida"
    };
  }
};

// Configuración de la escala
export const escalaConfig = {
  frio: { porcentaje: 30, label: "❄️ Frío", rango: "0.0 - 0.3" },
  equilibrio: { porcentaje: 40, label: "⚖️ Equilibrio", rango: "0.4 - 0.6" },
  calor: { porcentaje: 30, label: "🔥 Calor", rango: "0.7 - 1.0" }
};

// Ejemplos de escala
export const ejemplosEscala = [
  { rango: "0.0 - 0.3", texto: "Código, matemáticas, hechos verificables", variant: "info" },
  { rango: "0.4 - 0.6", texto: "Respuestas equilibradas, conversación general", variant: "secondary" },
  { rango: "0.7 - 1.0", texto: "Creatividad, brainstorming, historias, poesía", variant: "warning" }
];

// Comparativa de respuestas
export const comparativaRespuestas = [
  { 
    temperature: 0.1, 
    titulo: "❄️ Temperature 0.1", 
    respuesta: "Fido", 
    nota: "Siempre la misma respuesta, predecible",
    clase: "frio"
  },
  { 
    temperature: 0.5, 
    titulo: "⚖️ Temperature 0.5", 
    respuesta: "Luna", 
    nota: "Respuestas comunes, algo de variedad",
    clase: "equilibrio"
  },
  { 
    temperature: 0.9, 
    titulo: "🔥 Temperature 0.9", 
    respuesta: "Lord Pancrasio", 
    nota: "Creativa, divertida, impredecible",
    clase: "calor"
  }
];

// Plataformas y dónde ajustar temperature
export const plataformas = [
  {
    icono: "🤖",
    nombre: "ChatGPT (OpenAI)",
    detalles: [
      "API: Parámetro temperature (0-2)",
      "Web: Solo en Playground",
      "Recomendado: 0.2 para datos, 0.8 para creatividad"
    ]
  },
  {
    icono: "🔍",
    nombre: "DeepSeek",
    detalles: [
      "Modo DeepThink (R1): Temperature baja automática",
      "Modo Normal: Temperature equilibrada",
      "Recomendado: Usar DeepThink para lógica"
    ]
  },
  {
    icono: "💻",
    nombre: "GitHub Copilot",
    detalles: [
      "Autocompletado: Temperature fija baja (~0.2)",
      "Chat: Temperature más flexible",
      "Recomendado: Configurar en settings.json"
    ]
  }
];

// Textos explicativos
export const textosExplicativos = {
  heroSubtitle: "Controla qué tan creativa o precisa es la IA.",
  queEs: "La temperature es un parámetro que controla la aleatoriedad en las respuestas de la IA.",
  temperatureBaja: "❄️ Temperature baja (0.1 - 0.3):",
  temperatureAlta: "🔥 Temperature alta (0.7 - 0.9):",
  ventajasBaja: [
    "Respuestas predecibles",
    "Siempre elige la palabra más probable",
    "Ideal para código, datos, hechos"
  ],
  ventajasAlta: [
    "Respuestas creativas e inesperadas",
    "Puede elegir palabras menos probables",
    "Ideal para ideas, brainstorming, poesía"
  ],
  demoPregunta: "Inventa un nombre para una mascota",
  reglaPractica: "❄️ Temperature baja (0.1 - 0.3): Para tareas que requieren precisión",
  reglaPracticaAlta: "🔥 Temperature alta (0.7 - 0.9): Para tareas que requieren creatividad",
  reglaEjemplo: "Si pides código, usa temperature baja. Si pides ideas creativas, usa temperature alta.",
  plataformasNota: "La temperature existe en TODOS los LLMs, solo cambia el nombre o la interfaz",
  fraseFinal: "❄️ Frío para trabajar, 🔥 calor para crear. La temperature es tu control de creatividad."
};