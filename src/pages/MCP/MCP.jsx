import React, { useState } from 'react';
import { 
  Card, 
  Badge, 
  Grid, 
  HighlightText, 
  Button,
  QRCode
} from '../../components/ui';
import { MCPDiagram } from '../../components/viz';
import { 
  servidoresMCP,
  beneficiosMCP,
  problemasSinMCP,
  solucionesConMCP,
  escenarioEmpresarial,
  recursosUrls,
  textosExplicativos
} from './utils';
import './MCP.css';

const MCP = () => {
  const [showArchitecture, setShowArchitecture] = useState(false);
  const [showExample, setShowExample] = useState(false);

  return (
    <div className="page-mcp">
      {/* Hero */}
      <div className="hero">
        <h1>
          <HighlightText text="MCP" highlight="MCP" color="primary" />
          : El <HighlightText text="USB-C" highlight="USB-C" color="warning" /> de la IA
        </h1>
        <p className="hero-subtitle">{textosExplicativos.heroSubtitle}</p>
        <div className="hero-badges">
          <Badge text="🔌 Estándar universal" variant="info" />
          <Badge text="📁 Conecta a cualquier fuente" variant="success" />
          <Badge text="🏗️ Creado por Anthropic" variant="warning" />
        </div>
      </div>

      {/* Explicación principal */}
      <Grid columns={2} gap="large">
        <Card title="🔌 ¿Qué es MCP?" variant="primary">
          <p className="texto-grande">{textosExplicativos.queEsMCP}</p>
          <p style={{ marginTop: '16px', fontSize: '18px' }}>
            <strong>Analogía:</strong>
          </p>
          <ul className="lista-grande">
            <li>📱 <strong>USB-C</strong> → Conecta cualquier dispositivo</li>
            <li>🔌 <strong>MCP</strong> → Conecta IA a cualquier dato</li>
          </ul>
          <div className="analogia-box">
            <p>💡 <strong>{textosExplicativos.antesVsAhora}</strong></p>
          </div>
        </Card>

        <Card title="🏗️ ¿Cómo funciona?" variant="primary">
          <div className="arquitectura-simple">
            <div className="arquitectura-nodo ia">
              <span>🤖</span>
              <span>IA / LLM</span>
            </div>
            <div className="arquitectura-flecha">↔️</div>
            <div className="arquitectura-nodo cliente">
              <span>🔌</span>
              <span>Cliente MCP</span>
            </div>
            <div className="arquitectura-flecha">↔️</div>
            <div className="arquitectura-servidores">
              <div className="servidor">📁 Archivos</div>
              <div className="servidor">🐘 SQL</div>
              <div className="servidor">💬 Slack</div>
              <div className="servidor">🐙 GitHub</div>
            </div>
          </div>
          <button 
            className="ver-mas-btn"
            onClick={() => setShowArchitecture(!showArchitecture)}
          >
            {showArchitecture ? '📖 Ocultar detalles' : '🔍 Ver arquitectura detallada →'}
          </button>
          {showArchitecture && (
            <div className="arquitectura-detalle">
              <MCPDiagram />
            </div>
          )}
        </Card>
      </Grid>

      {/* Servidores MCP disponibles */}
      <h2>📦 Servidores MCP populares</h2>
      <Grid columns={3} gap="medium">
        {servidoresMCP.map((servidor, idx) => (
          <Card key={idx} title={`${servidor.icon} ${servidor.name}`} variant="primary">
            <p>{servidor.description}</p>
          </Card>
        ))}
      </Grid>

      {/* Caso práctico */}
      <Card title="🎯 Caso práctico" variant="primary">
        <div className="caso-container">
          <div className="caso-escenario">
            <h3>{escenarioEmpresarial.titulo}</h3>
            <p>Tu empresa tiene:</p>
            <ul>
              {escenarioEmpresarial.recursos.map((recurso, idx) => (
                <li key={idx}>{recurso}</li>
              ))}
            </ul>
          </div>
          <div className="caso-tarea">
            <h3>🎯 Tarea</h3>
            <p className="tarea-texto">"{escenarioEmpresarial.tarea}"</p>
          </div>
          <button 
            className="ver-solucion-btn"
            onClick={() => setShowExample(!showExample)}
          >
            {showExample ? '📖 Ocultar solución' : '🔧 Ver qué servidores MCP necesitas →'}
          </button>
          {showExample && (
            <div className="caso-solucion">
              <h4>✅ Servidores MCP necesarios:</h4>
              <div className="solucion-servidores">
                {escenarioEmpresarial.solucionServidores.map((solucion, idx) => (
                  <div key={idx} className="solucion-item">{solucion}</div>
                ))}
              </div>
              <p className="solucion-nota">
                💡 ¡Con MCP, la IA puede acceder a <strong>TODO</strong> con un solo protocolo!
              </p>
            </div>
          )}
        </div>
      </Card>

      {/* Beneficios de MCP */}
      <Card title="✨ Beneficios de MCP" variant="primary">
        <div className="beneficios-grid">
          {beneficiosMCP.map((beneficio, idx) => (
            <div key={idx} className="beneficio">
              <span className="beneficio-icon">{beneficio.icono}</span>
              <div className="beneficio-texto">
                <strong>{beneficio.titulo}</strong>
                <p>{beneficio.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Comparación antes/después */}
      <h2>🔄 Antes y después de MCP</h2>
      <Grid columns={2} gap="large">
        <Card title="❌ Antes (Sin MCP)" variant="primary">
          <div className="comparacion-mcp">
            {problemasSinMCP.map((problema, idx) => (
              <div key={idx} className="problema-item">
                <span className="problema-icon">{problema.icono}</span>
                <p>{problema.texto}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card title="✅ Con MCP" variant="primary">
          <div className="solucion-mcp">
            {solucionesConMCP.map((solucion, idx) => (
              <div key={idx} className="solucion-item">
                <span className="solucion-icon">{solucion.icono}</span>
                <p>{solucion.texto}</p>
              </div>
            ))}
          </div>
        </Card>
      </Grid>

      {/* Recursos */}
      <Card title="📚 Recursos MCP" variant="primary">
        <div className="recursos-mcp">
          <div className="recurso-mcp">
            <QRCode 
              url={recursosUrls.documentacion}
              size={140}
              caption="Documentación oficial MCP"
            />
          </div>
          <div className="recurso-texto-mcp">
            <h4>🎯 Frase para recordar</h4>
            <p className="frase-destacada-mcp">
              {textosExplicativos.fraseDestacada}
            </p>
          </div>
          <div className="recurso-mcp">
            <QRCode 
              url={recursosUrls.servidores}
              size={140}
              caption="Servidores MCP oficiales"
            />
          </div>
        </div>
      </Card>

      {/* Frase final */}
      <Card className="frase-final">
        <div className="frase-centrada">
          <p className="frase-texto-grande">
            {textosExplicativos.fraseFinal}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default MCP;