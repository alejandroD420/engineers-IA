// Tabla comparativa
export const comparativaHeaders = ['Característica', 'Modelos Gigantes', 'Modelos Pequeños'];
export const comparativaRows = [
  ['Tamaño', '100B+ parámetros', '7B - 13B parámetros'],
  ['Corre en', 'Nube (servidores)', 'Tu laptop / local'],
  ['Costo', 'Por token ($$$)', 'Gratis (una vez descargado)'],
  ['Privacidad', 'Tus datos van a terceros', 'Todo queda en tu máquina'],
  ['Internet', 'Necesaria', 'Opcional (offline)'],
  ['Latencia', 'Depende de la red', 'Inmediata (local)'],
  ['Código abierto', '❌ Cerrado', '✅ Open Source'],
];

// Modelos pequeños populares
export const modelosPequenos = [
  { name: 'Llama 3', company: 'Meta', params: '8B', size: '4.7GB', icon: '🦙', link: 'https://llama.meta.com', openSource: true },
  { name: 'Mistral', company: 'Mistral AI', params: '7B', size: '4.1GB', icon: '🌪️', link: 'https://mistral.ai', openSource: true },
  { name: 'Phi-3', company: 'Microsoft', params: '3.8B', size: '2.2GB', icon: '📘', link: 'https://azure.microsoft.com/phi', openSource: true },
  { name: 'Gemma', company: 'Google', params: '7B', size: '4.5GB', icon: '💎', link: 'https://ai.google.dev/gemma', openSource: true },
  { name: 'Qwen', company: 'Alibaba', params: '7B', size: '4.3GB', icon: '🐉', link: 'https://qwenlm.github.io', openSource: true },
  { name: 'DeepSeek', company: 'DeepSeek', params: '7B', size: '4.2GB', icon: '🔍', link: 'https://deepseek.com', openSource: true },
];

// Herramientas OpenCode
export const herramientasOpenCode = [
  { name: 'Ollama', icon: '🦙', description: 'La forma más fácil de ejecutar modelos localmente', cmd: 'ollama run llama3', url: 'https://ollama.com' },
  { name: 'LM Studio', icon: '🎮', description: 'Interfaz gráfica para modelos locales', cmd: 'Descarga y ejecuta', url: 'https://lmstudio.ai' },
  { name: 'LocalAI', icon: '🤖', description: 'API local compatible con OpenAI', cmd: 'docker run localai', url: 'https://localai.io' },
  { name: 'GPT4All', icon: '🖥️', description: 'Desktop app para modelos locales', cmd: 'Descarga gratuita', url: 'https://gpt4all.io' },
  { name: 'Text generation webui', icon: '🌐', description: 'Interfaz web para LLMs (oobabooga)', cmd: 'python server.py', url: 'https://github.com/oobabooga/text-generation-webui' },
  { name: 'Llama.cpp', icon: '⚡', description: 'Inferencia eficiente en CPU', cmd: './main -m model.gguf', url: 'https://github.com/ggerganov/llama.cpp' },
];

// Frameworks open source
export const frameworksOpenCode = [
  { name: 'LangChain', icon: '🔗', description: 'Framework para apps con IA', url: 'https://python.langchain.com' },
  { name: 'LlamaIndex', icon: '📚', description: 'Framework RAG', url: 'https://www.llamaindex.ai' },
  { name: 'Haystack', icon: '🌾', description: 'Pipeline NLP open source', url: 'https://haystack.deepset.ai' },
  { name: 'vLLM', icon: '⚡', description: 'Inferencia rápida', url: 'https://vllm.readthedocs.io' },
];

// Código ejemplo
export const codigoEjemplo = `# Usando Ollama con Python
import requests
import json

# Llamar a Ollama localmente
response = requests.post(
    'http://localhost:11434/api/generate',
    json={
        'model': 'llama3',
        'prompt': '¿Cuál es la capital de Francia?',
        'stream': False
    }
)

resultado = response.json()
print(resultado['response'])
# => "La capital de Francia es París."

# Usando LangChain con modelo local
from langchain_community.llms import Ollama

llm = Ollama(model="llama3")
respuesta = llm.invoke("Explícame qué es un embedding")
print(respuesta)`;

// Textos explicativos
export const textosExplicativos = {
  heroSubtitle: "No necesitas gigantes en la nube. Los modelos pequeños + OpenCode son el futuro.",
  queSon: "Modelos de lenguaje con menos de 13 mil millones de parámetros que pueden correr en una laptop normal.",
  ejemplosOpenSource: "🦙 Llama 3 (8B) → 4.7GB\n🌪️ Mistral (7B) → 4.1GB\n📘 Phi-3 (3.8B) → 2.2GB",
  importancia: [
    "🔒 Privacidad: Tus datos nunca salen de tu máquina",
    "💰 Costo cero: Descartas el pago por token",
    "📡 Offline: Funcionan sin internet",
    "🕶️ Open Source: Puedes inspeccionar, modificar y auditar"
  ],
  combinacionGanadora: "Un modelo pequeño (7B) corriendo local + MCP conectado a tus documentos es más útil que GPT-4 sin acceso a tus datos. ¡Y todo open source!",
  fraseFinal: "Los modelos pequeños son el motor. MCP es el combustible (tus datos). OpenCode es el taller donde construyes. Juntos, hacen IA privada, ética y poderosa."
};

// Pasos para empezar
export const pasosEmpezar = [
  { numero: "1️⃣", titulo: "Instala Ollama", comando: "curl -fsSL https://ollama.com/install.sh | sh" },
  { numero: "2️⃣", titulo: "Descarga un modelo", comando: "ollama pull llama3 o ollama pull mistral" },
  { numero: "3️⃣", titulo: "Ejecuta el modelo", comando: "ollama run llama3 \"¿Qué es la IA?\"" },
  { numero: "4️⃣", titulo: "Integra con tu código", comando: "Usa LangChain, LlamaIndex o la API local de Ollama" }
];

// Stats para comparativa visual
export const statsGigantes = [
  { label: "Tamaño:", value: "100B+ parámetros", barWidth: "100%", barClass: "gigante-bar" },
  { label: "Costo:", value: "💰💰💰 Alto", barWidth: "100%", barClass: "costo-bar" },
  { label: "Privacidad:", value: "🔓 Tus datos a terceros", barWidth: "30%", barClass: "privacidad-bar baja" },
  { label: "Open Source:", value: "🔒 Cerrado", barWidth: "0%", barClass: "open-bar" }
];

export const statsPequenos = [
  { label: "Tamaño:", value: "7B-13B parámetros", barWidth: "15%", barClass: "pequeno-bar" },
  { label: "Costo:", value: "💰 Gratis", barWidth: "0%", barClass: "costo-bar" },
  { label: "Privacidad:", value: "🔒 Todo queda local", barWidth: "100%", barClass: "privacidad-bar alta" },
  { label: "Open Source:", value: "🕶️ Abierto", barWidth: "100%", barClass: "open-bar" }
];