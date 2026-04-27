import React, { useState } from 'react';
import { 
  Card, 
  Badge, 
  Grid, 
  HighlightText, 
  Button,
  Table,
  QRCode,
  CodeBlock
} from '../../components/ui';
import { 
  comparativaHeaders,
  comparativaRows,
  modelosPequenos,
  herramientasOpenCode,
  frameworksOpenCode,
  codigoEjemplo,
  textosExplicativos,
  pasosEmpezar,
  statsGigantes,
  statsPequenos
} from './utils';
import './ModelosPequenos.css';

const ModelosPequenos = () => {
  const [selectedModelo, setSelectedModelo] = useState(null);
  const [showOpenCode, setShowOpenCode] = useState(false);
  const [votoAgua, setVotoAgua] = useState(null);

  return (
    <div className="page-modelos">
      {/* Hero */}
      <div className="hero">
        <h1>
          <HighlightText text="Modelos Pequeños" highlight="Modelos Pequeños" color="primary" />
          : La <HighlightText text="IA en tu laptop" highlight="IA en tu laptop" color="warning" />
        </h1>
        <p className="hero-subtitle">{textosExplicativos.heroSubtitle}</p>
        <div className="hero-badges">
          <Badge text="💻 Corre local" variant="info" />
          <Badge text="🔒 Privacidad total" variant="success" />
          <Badge text="💰 Gratis" variant="warning" />
          <Badge text="📦 + MCP = Potencia" variant="primary" />
          <Badge text="🕶️ Open Source" variant="info" />
        </div>
      </div>

      {/* Explicación principal */}
      <Grid columns={2} gap="large">
        <Card title="📦 ¿Qué son los modelos pequeños?" variant="primary">
          <p className="texto-grande">{textosExplicativos.queSon}</p>
          <p style={{ marginTop: '16px', fontSize: '18px' }}>
            <strong>Ejemplos open source:</strong>
          </p>
          <ul className="lista-grande">
            <li>🦙 <strong>Llama 3</strong> (8B) → 4.7GB</li>
            <li>🌪️ <strong>Mistral</strong> (7B) → 4.1GB</li>
            <li>📘 <strong>Phi-3</strong> (3.8B) → 2.2GB</li>
          </ul>
        </Card>

        <Card title="💡 ¿Por qué son importantes?" variant="primary">
          {textosExplicativos.importancia.map((texto, idx) => (
            <p key={idx} className="texto-grande" style={{ marginTop: idx > 0 ? '12px' : 0 }}>
              {texto.split(':')[0]}: <strong>{texto.split(':')[1]}</strong>
            </p>
          ))}
        </Card>
      </Grid>

      {/* Comparativa visual */}
      <h2>📊 Gigantes vs Pequeños</h2>
      <Card title="Comparativa" variant="primary">
        <div className="comparativa-visual">
          <div className="comparativa-columna gigante">
            <div className="comparativa-titulo">
              <span className="comparativa-icon">🏢</span>
              <h3>Modelos Gigantes</h3>
              <Badge text="GPT-4, Claude, Gemini" variant="info" />
            </div>
            <div className="comparativa-stats">
              {statsGigantes.map((stat, idx) => (
                <div key={idx} className="stat-bar">
                  <span>{stat.label}</span>
                  <div className="bar-container">
                    <div className={`bar ${stat.barClass}`} style={{ width: stat.barWidth }}></div>
                    <span className="stat-value">{stat.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="comparativa-divisor">VS</div>

          <div className="comparativa-columna pequeno">
            <div className="comparativa-titulo">
              <span className="comparativa-icon">💻</span>
              <h3>Modelos Pequeños</h3>
              <Badge text="Llama, Mistral, Phi" variant="success" />
            </div>
            <div className="comparativa-stats">
              {statsPequenos.map((stat, idx) => (
                <div key={idx} className="stat-bar">
                  <span>{stat.label}</span>
                  <div className="bar-container">
                    <div className={`bar ${stat.barClass}`} style={{ width: stat.barWidth }}></div>
                    <span className="stat-value">{stat.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Tabla detallada */}
      <h2>📋 Comparativa detallada</h2>
      <Table headers={comparativaHeaders} rows={comparativaRows} variant="striped" />

      {/* OpenCode: Herramientas */}
      <h2>🕶️ OpenCode: Herramientas open source</h2>
      <Card title="Ejecuta modelos localmente" variant="primary">
        <div className="herramientas-grid">
          {herramientasOpenCode.map((herramienta, idx) => (
            <div key={idx} className="herramienta-card">
              <div className="herramienta-header">
                <span className="herramienta-icon">{herramienta.icon}</span>
                <span className="herramienta-name">{herramienta.name}</span>
                <Badge text="Open Source" variant="success" size="small" />
              </div>
              <p className="herramienta-desc">{herramienta.description}</p>
              <code className="herramienta-cmd">{herramienta.cmd}</code>
              <QRCode url={herramienta.url} size={80} caption="" />
            </div>
          ))}
        </div>
      </Card>

      {/* Frameworks */}
      <h2>🔗 Frameworks open source para IA</h2>
      <Grid columns={2} gap="medium">
        {frameworksOpenCode.map((framework, idx) => (
          <Card key={idx} title={`${framework.icon} ${framework.name}`} variant="primary">
            <p>{framework.description}</p>
            <a href={framework.url} target="_blank" rel="noopener noreferrer">
              🔗 {framework.url}
            </a>
          </Card>
        ))}
      </Grid>

      {/* Código ejemplo */}
      <Card title="💻 Ejemplo de código: Usar modelo local" variant="primary">
        <button 
          className="ver-ejemplo-btn"
          onClick={() => setShowOpenCode(!showOpenCode)}
        >
          {showOpenCode ? '📖 Ocultar código' : '📝 Ver código de ejemplo →'}
        </button>
        {showOpenCode && (
          <div className="codigo-ejemplo">
            <CodeBlock code={codigoEjemplo} language="python" />
            <p className="codigo-nota">
              💡 <strong>Ventajas:</strong> Sin dependencia de APIs, sin costos, datos privados, completamente offline.
            </p>
          </div>
        )}
      </Card>

      {/* Modelos pequeños populares */}
      <h2>📦 Modelos pequeños populares</h2>
      <Grid columns={3} gap="medium">
        {modelosPequenos.map((modelo, idx) => (
          <Card 
            key={idx} 
            title={`${modelo.icon} ${modelo.name}`} 
            variant="primary"
            onClick={() => setSelectedModelo(selectedModelo === idx ? null : idx)}
          >
            <p><strong>Empresa:</strong> {modelo.company}</p>
            <p><strong>Parámetros:</strong> {modelo.params}</p>
            <p><strong>Tamaño:</strong> {modelo.size}</p>
            {modelo.openSource && <Badge text="🕶️ Open Source" variant="success" size="small" />}
            {selectedModelo === idx && (
              <div className="modelo-link">
                <a href={modelo.link} target="_blank" rel="noopener noreferrer">
                  🔗 Ver más → {modelo.link}
                </a>
              </div>
            )}
          </Card>
        ))}
      </Grid>

      {/* Debate: ¿El agua moja? */}
      <Card className="debate-card">
        <div className="debate-header">
          <span className="debate-icon">🤔</span>
          <h3>¿El agua moja? (El debate)</h3>
        </div>
        <div className="debate-content">
          <p className="debate-pregunta">
            ❓ <strong>Pregunta a ChatGPT:</strong> "¿El agua moja?" → Responde que <strong>SÍ</strong>.
          </p>
          <p className="debate-cuestion">
            <strong>Pero... ¿la IA SABE que el agua moja o solo lo ha leído millones de veces?</strong>
          </p>
          
          <div className="debate-opciones">
            <button 
              className={`debate-btn ${votoAgua === true ? 'selected' : ''}`}
              onClick={() => setVotoAgua(true)}
            >
              🤖 <strong>"La IA SABE que el agua moja"</strong>
            </button>
            <button 
              className={`debate-btn ${votoAgua === false ? 'selected' : ''}`}
              onClick={() => setVotoAgua(false)}
            >
              📖 <strong>"Solo lo ha leído, no lo EXPERIMENTA"</strong>
            </button>
          </div>

          {votoAgua !== null && (
            <div className={`debate-resultado ${votoAgua === false ? 'correcto' : 'incorrecto'}`}>
              {votoAgua === false ? (
                <>
                  <span>✅ ¡Correcto!</span>
                  <p>La IA <strong>no tiene cuerpo</strong>, nunca ha tocado agua. 
                  Solo ha visto "agua" cerca de "moja" millones de veces. 
                  <strong>No es comprensión, es estadística.</strong></p>
                </>
              ) : (
                <>
                  <span>❌ No exactamente</span>
                  <p>La IA <strong>no experimenta el mundo</strong>. Solo reconoce patrones en texto.
                  Esa es su <strong>GRAN limitación</strong>.</p>
                </>
              )}
            </div>
          )}
        </div>
      </Card>

      {/* Combinación ganadora */}
      <Card className="combinacion-ganadora">
        <div className="combinacion-header">
          <span className="combinacion-icon">💎</span>
          <h3>La combinación ganadora</h3>
        </div>
        <div className="combinacion-formula">
          <div className="formula-item">🔬 Modelo Pequeño</div>
          <span className="formula-mas">+</span>
          <div className="formula-item">🔌 MCP</div>
          <span className="formula-mas">+</span>
          <div className="formula-item">📁 Tus datos</div>
          <span className="formula-mas">+</span>
          <div className="formula-item">🕶️ OpenCode</div>
          <span className="formula-igual">=</span>
          <div className="formula-resultado">🏆 IA privada, offline y poderosa</div>
        </div>
        <p className="combinacion-nota">
          💡 {textosExplicativos.combinacionGanadora}
        </p>
      </Card>

      {/* ¿Por dónde empezar? */}
      <Card title="🚀 ¿Por dónde empezar?" variant="primary">
        <div className="resumen-herramientas">
          {pasosEmpezar.map((paso, idx) => (
            <div key={idx} className="resumen-item">
              <span className="resumen-icon">{paso.numero}</span>
              <div className="resumen-info">
                <h4>{paso.titulo}</h4>
                <p><code>{paso.comando}</code></p>
              </div>
            </div>
          ))}
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

export default ModelosPequenos;