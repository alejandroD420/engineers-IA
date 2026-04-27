// Cheat Sheet completo
export const cheatSheet = `═══════════════════════════════════════════════════════════
                 CHEAT SHEET - 10 CONCEPTOS CLAVE
═══════════════════════════════════════════════════════════

1. PREDICE TOKENS, NO PIENSA
   → Es autocompletado estadístico, no conciencia

2. TOKENIZACIÓN
   → No ve letras, ve trozos (tokens)

3. EMBEDDING
   → Convierte tokens a vectores numéricos

4. DISTANCIA SEMÁNTICA
   → Palabras parecidas = números parecidos

5. PROMPT ESTRUCTURADO
   → Contexto + Instrucción + Formato

6. TEMPERATURE
   → ❄️ Frío = preciso | 🔥 Calor = creativo

7. SKILLS (2 TIPOS)
   → 📄 Prompt Skill (.md) + ⚡ Function Calling

8. MCP (MODEL CONTEXT PROTOCOL)
   → El USB-C de la IA

9. MODELOS PEQUEÑOS
   → IA local, privada, offline (Llama, Mistral, Phi)

10. OPENCODE + MCP
    → Herramientas open source + tus datos = IA poderosa

═══════════════════════════════════════════════════════════
            FRASES PARA RECORDAR
═══════════════════════════════════════════════════════════

"La IA no piensa. Predice qué palabra sigue."

"La IA no ve letras. Ve trozos (tokens)."

"La IA no ejecuta código. PIDE ejecutar código. TÚ ejecutas."

"MCP es el USB-C de la IA."

"Frío para trabajar, calor para crear."

"No te reemplaza la IA. Te reemplaza un ingeniero que SABE usarla."

═══════════════════════════════════════════════════════════`;

// Recursos por categoría
export const recursos = [
  {
    category: "🔤 Tokenización",
    items: [
      { name: "Tiktokenizer", url: "https://tiktokenizer.vercel.app", description: "Visualiza tokens en vivo", icon: "🔢" },
      { name: "OpenAI Tokenizer", url: "https://platform.openai.com/tokenizer", description: "Tokenizador oficial", icon: "🤖" },
    ]
  },
  {
    category: "📝 Prompts",
    items: [
      { name: "OpenAI Prompt Guide", url: "https://platform.openai.com/docs/guides/prompt-engineering", description: "Guía oficial de prompts", icon: "📘" },
      { name: "Learn Prompting", url: "https://learnprompting.org/es/", description: "Curso gratuito (español)", icon: "🎓" },
      { name: "Anthropic Prompt Library", url: "https://docs.anthropic.com/claude/prompt-library", description: "Ejemplos de prompts", icon: "📚" },
    ]
  },
  {
    category: "⚡ Skills & Function Calling",
    items: [
      { name: "OpenAI Function Calling", url: "https://platform.openai.com/docs/guides/function-calling", description: "Documentación oficial", icon: "🔌" },
      { name: "Skills Directory", url: "https://skills.sh", description: "Directorio de skills", icon: "📁" },
      { name: "Claude Skills", url: "https://docs.anthropic.com/claude/docs/skills", description: "Skills en Claude", icon: "🧠" },
    ]
  },
  {
    category: "🔌 MCP (Model Context Protocol)",
    items: [
      { name: "MCP Official", url: "https://modelcontextprotocol.io", description: "Documentación oficial", icon: "🌐" },
      { name: "MCP Servers", url: "https://github.com/modelcontextprotocol/servers", description: "Servidores oficiales", icon: "📦" },
      { name: "MCP Quickstart", url: "https://modelcontextprotocol.io/quickstart", description: "Guía rápida", icon: "🚀" },
    ]
  },
  {
    category: "🦙 Modelos Pequeños",
    items: [
      { name: "Ollama", url: "https://ollama.com", description: "Ejecuta modelos localmente", icon: "🦙" },
      { name: "LM Studio", url: "https://lmstudio.ai", description: "Interfaz gráfica", icon: "🎮" },
      { name: "Hugging Face", url: "https://huggingface.co/models", description: "Miles de modelos", icon: "🤗" },
      { name: "Llama 3", url: "https://llama.meta.com", description: "Modelo de Meta", icon: "🦙" },
      { name: "Mistral", url: "https://mistral.ai", description: "Modelo francés", icon: "🌪️" },
      { name: "Phi-3", url: "https://azure.microsoft.com/phi", description: "Modelo de Microsoft", icon: "📘" },
    ]
  },
  {
    category: "🕶️ OpenCode & Frameworks",
    items: [
      { name: "LangChain", url: "https://python.langchain.com", description: "Framework para apps con IA", icon: "🔗" },
      { name: "LlamaIndex", url: "https://www.llamaindex.ai", description: "Framework RAG", icon: "📚" },
      { name: "LocalAI", url: "https://localai.io", description: "API local compatible con OpenAI", icon: "🤖" },
      { name: "Llama.cpp", url: "https://github.com/ggerganov/llama.cpp", description: "Inferencia eficiente en CPU", icon: "⚡" },
    ]
  },
  {
    category: "📊 Comunidad y Cursos",
    items: [
      { name: "DeepLearning.AI", url: "https://www.deeplearning.ai", description: "Cursos de Andrew Ng", icon: "🎓" },
      { name: "Fast.ai", url: "https://www.fast.ai", description: "Cursos prácticos gratuitos", icon: "⚡" },
      { name: "r/LocalLLaMA", url: "https://www.reddit.com/r/LocalLLaMA", description: "Comunidad de modelos locales", icon: "💬" },
    ]
  },
];

// Código de ejemplo para IA local
export const codigoEjemploLocal = `# 1. Instalar Ollama (una vez)
curl -fsSL https://ollama.com/install.sh | sh

# 2. Descargar un modelo
ollama pull llama3

# 3. Usar desde Python
import requests

response = requests.post('http://localhost:11434/api/generate', 
    json={'model': 'llama3', 'prompt': '¿Qué es la IA?', 'stream': False})
print(response.json()['response'])

# 4. Integrar con LangChain
from langchain_community.llms import Ollama
llm = Ollama(model="llama3")
respuesta = llm.invoke("Explica qué es un embedding")`;

// URLs del taller
export const tallerUrls = {
  github: "https://github.com/tuusuario/engineers-ia"
};

// Textos explicativos
export const textosExplicativos = {
  heroSubtitle: "Todo lo que necesitas para seguir aprendiendo",
  cheatsheetNota: "Pega esto en tu chat favorito o guárdalo como referencia rápida",
  qrPrincipalTitulo: "🎯 Recursos centralizados",
  qrPrincipalDescripcion: "Escanea este código QR para acceder a TODOS los recursos del taller desde tu celular",
  qrPrincipalNota: "Incluye: Cheat Sheet, enlaces, documentación y ejemplos de código",
  codigoEjemploTitulo: "💻 Ejemplo rápido: Usar IA local",
  fraseFinal: "El aprendizaje no termina aquí. Estos recursos son tu hoja de ruta para dominar la IA.",
  fraseAutor: "— Engineers IA Taller"
};