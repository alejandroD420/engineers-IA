// Los 10 conceptos clave
export const conceptosClave = [
  { num: "01", titulo: "Predice tokens, no piensa", descripcion: "Es autocompletado estadístico, no conciencia" },
  { num: "02", titulo: "Tokenización", descripcion: "No ve letras, ve trozos (tokens)" },
  { num: "03", titulo: "Embedding", descripcion: "Convierte tokens a vectores numéricos" },
  { num: "04", titulo: "Distancia Semántica", descripcion: "Mide cercanía entre significados" },
  { num: "05", titulo: "Prompt estructurado", descripcion: "Contexto + Instrucción + Formato" },
  { num: "06", titulo: "Temperature", descripcion: "Frío = preciso | Calor = creativo" },
  { num: "07", titulo: "Skills (2 tipos)", descripcion: "Prompt Skill + Function Calling" },
  { num: "08", titulo: "MCP", descripcion: "El USB-C de la IA" },
  { num: "09", titulo: "Modelos pequeños", descripcion: "IA local, privada, offline" },
  { num: "10", titulo: "OpenCode", descripcion: "Herramientas open source para IA" },
];

// Tareas para la semana
export const tareas = [
  "📄 **Skill Tipo 1**: Escribir un archivo `.md` para estandarizar prompts en tu equipo",
  "⚡ **Skill Tipo 2**: Identificar UNA tarea repetitiva para delegar con Function Calling",
  "🦙 **Modelo pequeño**: Probar un modelo local con Ollama (`ollama run llama3`)",
  "💰 **Optimización**: Tokenizar tus prompts para reducir costos",
  "🔌 **MCP**: Explorar los servidores MCP disponibles en la documentación",
  "🕶️ **OpenCode**: Instalar LangChain y probar un pipeline básico"
];

// Preguntas frecuentes
export const preguntasFrecuentes = [
  { 
    q: "¿La IA va a reemplazar a los programadores?", 
    a: "No a los que entienden cómo funciona. Como la calculadora no reemplazó a los matemáticos, la IA cambia el trabajo, no lo elimina." 
  },
  { 
    q: "¿Qué trabajos están en mayor riesgo?", 
    a: "Aquellos puramente repetitivos y sin criterio humano. Los que requieren juicio, creatividad y empatía son más seguros." 
  },
  { 
    q: "¿Debo aprender a programar en 2025?", 
    a: "Sí, pero diferente. Ahora programar es más sobre orquestar IA, validar resultados e integrar sistemas." 
  },
  { 
    q: "¿La IA va a gobernarnos?", 
    a: "El peligro no es la IA, sino quienes controlan los modelos gigantes. Por eso los modelos pequeños y open source son clave." 
  }
];

// Puntos sobre el gobierno de la IA
export const gobiernoPuntos = [
  { icono: "⚠️", texto: "Peligro real 1: Quienes controlen los modelos gigantes en la nube tendrán poder." },
  { icono: "⚠️", texto: "Peligro real 2: Dependencia ciega ('la IA lo dijo')." },
  { icono: "✅", texto: "Solución: Modelos pequeños + MCP + OpenCode = IA local, privada, sin depender de nadie." }
];

// Textos explicativos
export const textosExplicativos = {
  heroSubtitle: "La respuesta después de todo lo que vimos hoy",
  respuestaCorta: "No a los ingenieros que entienden estos 10 conceptos.",
  cita: "La calculadora no reemplazó a los matemáticos. La IA no reemplazará a los ingenieros que saben usarla.",
  respuestaLarga: "La IA es una herramienta, como la calculadora o el compilador.",
  masProductivos: "Los que saben usarla serán más productivos.",
  quedarAtras: "Los que no, quedarán atrás.",
  reflexion: "No te reemplaza la IA. Te reemplaza un ingeniero que SABE usarla.",
  gobiernoPregunta: "El miedo real no es Skynet. Es otro.",
  gobiernoCita: "El problema no es la IA gobernando. Son humanos con IA gobernando.",
  tendenciaConclusion: "La tendencia es clara: ambas. Gigantes en la nube para lo general, pequeños locales para lo importante (tus datos, tu privacidad).",
  frasePrincipal: "No van a ser reemplazados por IA. Van a ser reemplazados por ingenieros CON IA.",
  despedida: "10 conceptos • 1 hora • El futuro en tus manos"
};

// Respuestas de la encuesta
export const respuestasEncuesta = {
  no: "✅ ¡Correcto! La IA es una herramienta, no un reemplazo.",
  depende: "🎯 ¡Exacto! No es la IA, es quien sepa usarla.",
  si: "🤔 Reflexiona: ¿La calculadora reemplazó a los matemáticos?"
};