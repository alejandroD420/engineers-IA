import React, { useState } from 'react';
import { 
  Card, 
  Badge, 
  Grid, 
  HighlightText, 
  Button,
  CodeBlock,
  QRCode
} from '../../components/ui';
import { 
  promptMalo,
  promptBueno,
  codigoRespuesta,
  ejemplosEstructura,
  ejemplosPracticos,
  tipsPrompt,
  recursosUrls,
  textosExplicativos
} from './utils';
import './Prompt.css';

const Prompt = () => {
  const [selectedExample, setSelectedExample] = useState(null);
  const [showResponse, setShowResponse] = useState(false);

  return (
    <div className="page-prompt">
      {/* Hero */}
      <div className="hero">
        <h1>
          <HighlightText text="Prompt" highlight="Prompt" color="primary" />
          : La <HighlightText text="Estructura de Oro" highlight="Estructura de Oro" color="warning" />
        </h1>
        <p className="hero-subtitle">
          {textosExplicativos.heroSubtitle}
        </p>
        <div className="hero-badges">
          <Badge text="🎯 Contexto + Instrucción + Formato" variant="info" />
          <Badge text="⚡ 30 segundos ahorran 10 minutos" variant="warning" />
          <Badge text="📝 El 90% del éxito está aquí" variant="success" />
        </div>
      </div>

      {/* Comparación prompt malo vs bueno */}
      <Card title="📊 El antes y después" variant="primary">
        <div className="comparacion-container">
          {/* Prompt MALO */}
          <div className="comparacion-prompt malo">
            <div className="comparacion-header">
              <span className="comparacion-icon">❌</span>
              <h3>Prompt MALO</h3>
              <Badge text="Resultado vago" variant="danger" />
            </div>
            <div className="comparacion-content">
              <div className="prompt-texto-malo">{promptMalo}</div>
              <div className="comparacion-resultado">
                <p>🔻 {textosExplicativos.comparacionMalo}</p>
              </div>
            </div>
          </div>
          
          <div className="comparacion-divider">VS</div>
          
          {/* Prompt BUENO */}
          <div className="comparacion-prompt bueno">
            <div className="comparacion-header">
              <span className="comparacion-icon">✅</span>
              <h3>Prompt BUENO</h3>
              <Badge text="Resultado preciso" variant="success" />
            </div>
            <div className="comparacion-content">
              <div className="prompt-texto-bueno">{promptBueno}</div>
              <button 
                className="ver-ejemplo-btn"
                onClick={() => setShowResponse(!showResponse)}
              >
                {showResponse ? '📖 Ocultar respuesta' : '🎬 Ver qué responde la IA →'}
              </button>
              {showResponse && (
                <div className="respuesta-ejemplo">
                  <div className="codigo-respuesta">
                    <pre>{codigoRespuesta}</pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* La Estructura de Oro - 2x2 */}
      <h2>🏗️ La Estructura de Oro</h2>
      <Grid columns={2} gap="large">
        {ejemplosEstructura.map((item, idx) => (
          <Card key={idx} title={item.titulo} variant="primary">
            <p className="estructura-descripcion">{item.descripcion}</p>
            <div className="estructura-ejemplo">
              <span className="ejemplo-label">💡 Ejemplo:</span>
              <p className="ejemplo-texto-grande">"{item.ejemplo}"</p>
            </div>
          </Card>
        ))}
      </Grid>

      {/* Ejemplos prácticos */}
      <h2>📝 Ejemplos prácticos</h2>
      <Grid columns={2} gap="large">
        {ejemplosPracticos.map((ejemplo, idx) => (
          <Card 
            key={idx} 
            title={ejemplo.titulo}
            onClick={() => setSelectedExample(selectedExample === idx ? null : idx)}
          >
            <div className="ejemplo-prompt">
              <div className="ejemplo-item">
                <span className="ejemplo-tag">📝 Contexto:</span>
                <p className="ejemplo-texto-grande">{ejemplo.contexto}</p>
              </div>
              <div className="ejemplo-item">
                <span className="ejemplo-tag">🎯 Instrucción:</span>
                <p className="ejemplo-texto-grande">{ejemplo.instruccion}</p>
              </div>
              <div className="ejemplo-item">
                <span className="ejemplo-tag">📐 Formato:</span>
                <p className="ejemplo-texto-grande">{ejemplo.formato}</p>
              </div>
              {selectedExample === idx && (
                <div className="ejemplo-prompt-completo">
                  <Badge text="✨ Prompt completo" variant="info" />
                  <div className="prompt-completo-texto">
                    <pre>{`Contexto: ${ejemplo.contexto}\n\nInstrucción: ${ejemplo.instruccion}\n\nFormato: ${ejemplo.formato}`}</pre>
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </Grid>

      {/* Tips para prompts efectivos */}
      <Card title="⚡ Tips para prompts efectivos" variant="primary">
        <div className="tips-grid">
          {tipsPrompt.map((tip, idx) => (
            <div key={idx} className="tip-item">
              <span className="tip-icon">{tip.numero}</span>
              <div className="tip-content">
                <strong className="tip-titulo">{tip.titulo}</strong>
                <p className="tip-descripcion">{tip.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Recursos */}
      <Card title="📚 Recursos adicionales">
        <div className="recursos-row">
          <div className="recurso">
            <QRCode 
              url={recursosUrls.openaiGuide}
              size={140}
              caption="Guía oficial de OpenAI"
            />
          </div>
          <div className="recurso">
            <QRCode 
              url={recursosUrls.learnPrompting}
              size={140}
              caption="Curso gratuito de prompting"
            />
          </div>
        </div>
      </Card>

      {/* Frase final */}
      <Card className="frase-final">
        <div className="frase-centrada">
          <p className="frase-texto-grande">
            "{textosExplicativos.fraseFinal}"
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Prompt;