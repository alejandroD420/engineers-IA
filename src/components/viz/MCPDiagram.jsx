import React, { useState } from 'react';
import './MCPDiagram.css';

const MCPDiagram = ({ activeServers = [], onServerClick = null }) => {
  const [hoveredServer, setHoveredServer] = useState(null);

  const servidores = [
    { id: 'filesystem', name: 'Filesystem', icon: '📁', description: 'Lee/escribe archivos locales' },
    { id: 'database', name: 'PostgreSQL', icon: '🐘', description: 'Consulta bases de datos SQL' },
    { id: 'slack', name: 'Slack', icon: '💬', description: 'Envía/lee mensajes' },
    { id: 'github', name: 'GitHub', icon: '🐙', description: 'Accede a repositorios' },
    { id: 'drive', name: 'Google Drive', icon: '☁️', description: 'Lee documentos en la nube' },
    { id: 'browser', name: 'Browser', icon: '🌐', description: 'Navega y extrae contenido' },
  ];

  const isActive = (serverId) => activeServers.includes(serverId);

  return (
    <div className="mcp-diagram">
      <div className="diagram-title">
        <span>🔌 Arquitectura MCP</span>
      </div>

      {/* Capa 1: IA / LLM */}
      <div className="diagram-layer layer-ia">
        <div className="diagram-node ia-node">
          <div className="node-icon">🤖</div>
          <div className="node-title">IA / LLM</div>
          <div className="node-subtitle">Claude, GPT, Gemini...</div>
        </div>
      </div>

      <div className="diagram-arrow down">↓</div>

      {/* Capa 2: Cliente MCP */}
      <div className="diagram-layer layer-client">
        <div className="diagram-node client-node">
          <div className="node-icon">🔌</div>
          <div className="node-title">Cliente MCP</div>
          <div className="node-subtitle">Protocolo estándar</div>
        </div>
      </div>

      <div className="diagram-arrow down">↓</div>

      {/* Capa 3: Servidores MCP */}
      <div className="diagram-layer layer-servers">
        <div className="servers-grid">
          {servidores.map((server) => (
            <div
              key={server.id}
              className={`server-card ${isActive(server.id) ? 'active' : ''} ${hoveredServer === server.id ? 'hovered' : ''}`}
              onClick={() => onServerClick && onServerClick(server)}
              onMouseEnter={() => setHoveredServer(server.id)}
              onMouseLeave={() => setHoveredServer(null)}
            >
              <div className="server-icon">{server.icon}</div>
              <div className="server-name">{server.name}</div>
              <div className="server-description">{server.description}</div>
              {isActive(server.id) && (
                <div className="active-badge">✅ Activo</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Leyenda */}
      <div className="diagram-legend">
        <div className="legend-item">
          <div className="legend-color active-color"></div>
          <span>Servidor activo</span>
        </div>
        <div className="legend-item">
          <div className="legend-color inactive-color"></div>
          <span>Servidor disponible</span>
        </div>
        <div className="legend-item">
          <div className="legend-color hover-color"></div>
          <span>Seleccionado</span>
        </div>
      </div>

      {/* Nota explicativa */}
      <div className="diagram-note">
        <p>💡 <strong>¿Cómo funciona?</strong> La IA se comunica con el Cliente MCP, que redirige la solicitud al servidor correspondiente (archivos, base de datos, Slack, etc.).</p>
      </div>
    </div>
  );
};

export default MCPDiagram;