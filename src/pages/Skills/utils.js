// Ejemplo de archivo HABILIDAD.md completo
export const habilidadMd = `---
name: mi-habilidad
description: Habilidad para procesar archivos de log
version: 1.0.0
author: Tu Nombre
---

# Procesador de Logs

Eres un experto en análisis de logs y detección de errores.

## Instrucciones
1. Lee el archivo de log proporcionado
2. Identifica errores críticos (nivel ERROR o FATAL)
3. Clasifica cada error por tipo y severidad
4. Genera un resumen ejecutivo

## Formato de respuesta
{
  "total_errores": 0,
  "errores_criticos": [],
  "resumen": ""
}`;

// Ejemplo básico de SKILL.md
export const skillBasicoMd = `# Mi rol
Eres un ingeniero de software senior.

# Reglas
- Responde en español
- Usa ejemplos de código
- Si no sabes, di "no lo sé"`;

// Ejemplo de estructura de carpetas
export const estructuraSkills = `my-skill/
├── SKILL.md           # Instrucciones + metadatos (OBLIGATORIO)
├── scripts/           # Código ejecutable (opcional)
│   ├── procesar_log.py
│   └── utils.js
├── references/        # Documentación (opcional)
│   └── formato_logs.md
├── assets/            # Plantillas, recursos (opcional)
│   └── reporte_base.txt
└── agents/            # Configuración (opcional)
    └── openai.yaml`;

// Ejemplo de openai.yaml
export const openaiYaml = `# Configuración del agente
name: agente-logs
avatar: 🤖
system_prompt: |
  Eres un asistente experto en procesamiento de logs.
  Usa la habilidad "mi-habilidad" para analizar archivos.

tools:
  - name: procesar_log
    description: Procesa un archivo de log
    script: ./scripts/procesar_log.py
    parameters:
      - name: file_path
        type: string
        required: true
      - name: format
        type: string
        default: "json"`;

// Ejemplo de Function Calling
export const ejemploFunctionCalling = `{
  "function": "procesar_log",
  "parameters": {
    "file_path": "/var/log/error.log",
    "format": "json"
  }
}`;

// URLs de recursos
export const recursosUrls = {
  agentSkills: "https://developers.openai.com/codex/skills",
  functionCalling: "https://platform.openai.com/docs/guides/function-calling"
};

// Textos explicativos
export const textosExplicativos = {
  heroSubtitle: "Cómo la IA se comporta y actúa en el mundo real",
  skillTipo1Desc: "Un archivo .md (markdown) con instrucciones fijas que la IA SIEMPRE sigue.",
  skillTipo2Desc: "La IA devuelve un JSON pidiéndote que ejecutes una función real.",
  mantra: "La IA es el cerebro. Los skills son sus manos. Tú decides qué herramientas le das.",
  fraseFinal: "Las skills son el puente entre la IA y el mundo real. Sin skills, solo charla. Con skills, construye."
};

// Ventajas y desventajas
export const skillTipo1Ventajas = [
  "Se versiona en Git",
  "Ahorra tokens",
  "Estandariza comportamiento del equipo"
];

export const skillTipo2Ventajas = [
  "La IA puede HACER cosas",
  "Accede a datos en tiempo real",
  "Ejecuta cálculos, scripts, APIs"
];

export const skillTipo2Desventajas = [
  "La IA NO ejecuta nada. TÚ ejecutas",
  "Necesitas programar el puente"
];

// Tooltips
export const tooltips = {
  skillTipo1: {
    termino: "Prompt Skill",
    definicion: "Archivo .md con instrucciones fijas que la IA siempre sigue, versionable en Git."
  },
  skillTipo2: {
    termino: "Function Calling",
    definicion: "Mecanismo donde la IA devuelve un JSON pidiendo ejecutar una función real."
  }
};