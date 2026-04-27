export const promptExamples = {
    bad: "Haceme algo para validar emails",
    good: `Contexto: Eres un experto en Python con 10 años de experiencia.
Instrucción: Genera una función que valide direcciones de email.
Formato: Solo código Python, sin explicaciones. Incluye ejemplos de uso.`
};

export const functionCallingExample = {
    pregunta: "¿Cómo está el clima en Lima?",
    respuestaJSON: `{
  "function": "get_weather",
  "parameters": {
    "city": "Lima",
    "units": "celsius"
  }
}`
};

export const mcpServersExample = [
    { name: "Filesystem", description: "Lee y escribe archivos locales" },
    { name: "Slack", description: "Envía y lee mensajes de Slack" },
    { name: "PostgreSQL", description: "Consulta bases de datos SQL" },
    { name: "GitHub", description: "Accede a repositorios y código" }
];