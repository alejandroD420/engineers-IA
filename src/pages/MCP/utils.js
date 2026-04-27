// Servidores MCP populares
export const servidoresMCP = [
  { name: "Filesystem", icon: "📁", description: "Lee y escribe archivos locales" },
  { name: "PostgreSQL", icon: "🐘", description: "Consulta bases de datos SQL" },
  { name: "Slack", icon: "💬", description: "Envía y lee mensajes de Slack" },
  { name: "GitHub", icon: "🐙", description: "Accede a repositorios y código" },
  { name: "Google Drive", icon: "☁️", description: "Lee documentos en la nube" },
  { name: "Browser", icon: "🌐", description: "Navega y extrae contenido web" },
];

// Beneficios de MCP
export const beneficiosMCP = [
  { icono: "🔌", titulo: "Estandarización", descripcion: "Un solo protocolo para todas las integraciones" },
  { icono: "🔒", titulo: "Seguridad", descripcion: "Control total sobre qué datos expones a la IA" },
  { icono: "📦", titulo: "Reutilizable", descripcion: "Los servidores MCP funcionan con cualquier IA compatible" },
  { icono: "🚀", titulo: "Escalable", descripcion: "Agrega nuevos servidores según necesites" }
];

// Problemas sin MCP
export const problemasSinMCP = [
  { icono: "😫", texto: "Cada integración requiere código personalizado" },
  { icono: "🔀", texto: "Formatos inconsistentes entre servicios" },
  { icono: "🐢", texto: "Desarrollo lento y costoso" },
  { icono: "🔒", texto: "Riesgos de seguridad por implementaciones caseras" }
];

// Soluciones con MCP
export const solucionesConMCP = [
  { icono: "✨", texto: "Un estándar universal para todo" },
  { icono: "📦", texto: "Servidores listos para usar" },
  { icono: "🚀", texto: "Integración en minutos, no días" },
  { icono: "🔒", texto: "Control total sobre permisos y datos" }
];

// Escenario empresarial
export const escenarioEmpresarial = {
  titulo: "📋 Escenario empresarial",
  recursos: [
    "📁 Logs en archivos locales",
    "📄 Documentos en Google Drive",
    "💬 Conversaciones en Slack",
    "🐘 Base de datos de clientes"
  ],
  tarea: "Lee el último error del log, busca solución en los docs internos, consulta el cliente afectado en la DB y postea el resumen en Slack",
  solucionServidores: [
    "📁 Filesystem → leer log",
    "☁️ Google Drive → buscar en docs",
    "🐘 PostgreSQL → consultar cliente",
    "💬 Slack → postear mensaje"
  ]
};

// URLs de recursos
export const recursosUrls = {
  documentacion: "https://modelcontextprotocol.io",
  servidores: "https://github.com/modelcontextprotocol/servers"
};

// Textos explicativos
export const textosExplicativos = {
  heroSubtitle: "Model Context Protocol - Un estándar universal para conectar IA a tus datos",
  queEsMCP: "MCP (Model Context Protocol) es un protocolo estándar que permite a las IA conectarse a cualquier fuente de datos o herramienta.",
  analogia: "USB-C conecta cualquier dispositivo. MCP conecta IA a cualquier dato.",
  antesVsAhora: "Antes: Cada app tenía su propio cargador. Ahora: Un solo protocolo para todo.",
  fraseFinal: "MCP convierte la IA de una caja negra en un sistema que puede leer tus datos y actuar.",
  fraseDestacada: "MCP es el USB-C del ecosistema IA. Un protocolo para conectarlo todo."
};