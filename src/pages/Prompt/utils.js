// Prompts de ejemplo
export const promptMalo = "Haceme algo para validar emails";

export const promptBueno = `Contexto: Eres un experto en Python con 10 años de experiencia en desarrollo backend.

Instrucción: Genera una función que valide direcciones de email. Debe verificar:
- Formato válido (usuario@dominio.extension)
- Que no haya espacios
- Que el dominio tenga una extensión válida

Formato: SOLO código Python, sin explicaciones. Incluye ejemplos de uso.`;

// Código de respuesta esperada para el prompt bueno
export const codigoRespuesta = `def validar_email(email):
    import re
    patron = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
    return bool(re.match(patron, email))

# Ejemplos de uso
print(validar_email("test@example.com"))   # True
print(validar_email("test@example"))       # False`;

// Estructura de Oro - 4 elementos
export const ejemplosEstructura = [
  {
    titulo: "📝 Contexto",
    descripcion: "Define quién es la IA y qué conocimiento tiene",
    ejemplo: "Eres un experto en React con 5 años de experiencia",
  },
  {
    titulo: "🎯 Instrucción",
    descripcion: "Exactamente qué quieres que haga, paso a paso",
    ejemplo: "Crea un componente que muestre un contador con botones + y -",
  },
  {
    titulo: "📐 Formato",
    descripcion: "Cómo quieres que sea la respuesta",
    ejemplo: "Solo código JSX, sin comentarios",
  },
  {
    titulo: "🔍 Ejemplos (Few-shot)",
    descripcion: "Muestra ejemplos del formato esperado",
    ejemplo: 'Ejemplo: {"nombre": "Juan", "email": "juan@test.com"}',
  }
];

// Ejemplos prácticos
export const ejemplosPracticos = [
  {
    titulo: "💻 Generar código",
    contexto: "Eres un experto en Python con 10 años de experiencia",
    instruccion: "Genera una función que calcule el factorial de un número de forma recursiva",
    formato: "Solo código Python, sin explicaciones, incluye ejemplos de uso",
  },
  {
    titulo: "😊 Analizar sentimiento",
    contexto: "Eres un analista de sentimientos con experiencia en NLP",
    instruccion: "Analiza el siguiente texto y devuelve el sentimiento predominante",
    formato: 'JSON: {"sentimiento": "positivo/negativo/neutro", "confianza": 0.95}',
  },
  {
    titulo: "📋 Extraer datos",
    contexto: "Eres un extractor de datos experto en procesamiento de texto",
    instruccion: "Extrae nombre, email y teléfono del siguiente texto",
    formato: "Devuelve SOLO un objeto JSON válido con esos campos",
  },
  {
    titulo: "🌐 Traducir",
    contexto: "Eres un traductor profesional especializado en español-inglés técnico",
    instruccion: "Traduce el siguiente texto manteniendo el tono formal y la terminología técnica",
    formato: "Devuelve SOLO la traducción, sin explicaciones adicionales",
  }
];

// Tips para prompts efectivos
export const tipsPrompt = [
  { 
    numero: "1️⃣", 
    titulo: "Sé específico", 
    descripcion: "❌ 'tradúceme esto' → ✅ 'traduce al español manteniendo el tono formal'" 
  },
  { 
    numero: "2️⃣", 
    titulo: "Usa ejemplos (few-shot)", 
    descripcion: "La IA aprende mejor con 2-3 ejemplos del formato que esperas" 
  },
  { 
    numero: "3️⃣", 
    titulo: "Solicita formato específico", 
    descripcion: "JSON, tablas, markdown: facilita el procesamiento automático" 
  },
  { 
    numero: "4️⃣", 
    titulo: "Itera y refina", 
    descripcion: "Los mejores prompts se construyen probando y ajustando" 
  }
];

// URLs de recursos
export const recursosUrls = {
  openaiGuide: "https://platform.openai.com/docs/guides/prompt-engineering",
  learnPrompting: "https://learnprompting.org/es/"
};

// Textos explicativos
export const textosExplicativos = {
  heroSubtitle: "La diferencia entre un resultado mediocre y uno excepcional está en el prompt.",
  comparacionMalo: "La IA responde con algo genérico, incompleto y sin formato específico.",
  fraseFinal: "30 segundos estructurando el prompt ahorran 10 minutos de correcciones"
};