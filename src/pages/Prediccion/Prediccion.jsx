import React, { useState } from 'react';
import { 
  Card, 
  Badge, 
  Grid, 
  HighlightText, 
  Button,
  Tooltip
} from '../../components/ui';
import { glossaryTerms } from '../../data/glossary';
import { 
  ejemplos, 
  pasosPrediccion, 
  probabilidades, 
  textosExplicativos, 
  tooltips 
} from './utils';
import './Prediccion.css';

const Prediccion = () => {
  const [selectedExample, setSelectedExample] = useState(null);
  const [showStepByStep, setShowStepByStep] = useState(false);

  return (
    <div className="page-prediccion">
      {/* Hero */}
      <div className="hero">
        <h1>
          La IA <HighlightText text="NO piensa" highlight="NO" color="danger" />,
          <HighlightText text="predice" highlight="predice" color="primary" />
        </h1>
        <p className="hero-subtitle">
          Un <Tooltip {...glossaryTerms.llm} /> {textosExplicativos.heroSubtitle}
        </p>
        <div className="hero-badges">
          <Badge text="🎯 Concepto Fundamental" variant="info" />
          <Badge text="⚡ No es magia" variant="warning" />
          <Badge text="📊 Es estadística" variant="success" />
        </div>
      </div>

      {/* Explicación principal */}
      <Grid columns={2} gap="large">
        <Card title="🧠 ¿Qué significa esto?" variant="primary">
          <p>
            La IA <Tooltip {...tooltips.noConciencia} />, no tiene intenciones, no razona.
          </p>
          <p style={{ marginTop: '16px' }}>
            <strong>{textosExplicativos.significado}</strong>
          </p>
          <p style={{ marginTop: '16px', color: 'var(--color-text-secondary)' }}>
            Es como el autocompletado de tu celular, pero entrenado con <strong>todo internet</strong>.
          </p>
        </Card>

        <Card title="🎭 Analogía del actor">
          <p>{textosExplicativos.analogia}</p>
        </Card>
      </Grid>

      {/* Ejemplo paso a paso */}
      <Card title="🔬 Cómo predice la IA: Ejemplo real" variant="primary">
        <div className="step-by-step">
          <div className="step-prompt">
            <strong>Usuario pregunta:</strong> "¿Cuál es la capital de Francia?"
          </div>
          
          <button 
            className="step-toggle"
            onClick={() => setShowStepByStep(!showStepByStep)}
          >
            {showStepByStep ? '📖 Ocultar proceso' : '🎬 Ver cómo la IA construye la respuesta paso a paso →'}
          </button>
          
          {showStepByStep && (
            <div className="step-list">
              <p className="step-nota">
                La IA NO planea la respuesta completa. Construye palabra por palabra:
              </p>
              {pasosPrediccion.map((paso, idx) => (
                <div key={idx} className="step-item">
                  <div className="step-number">{paso.paso}</div>
                  <div className="step-text">
                    <span className="step-palabra">{paso.texto}</span>
                    <span className="step-probabilidad">({paso.probabilidad} de probabilidad)</span>
                  </div>
                </div>
              ))}
              <div className="step-final">
                <strong>✅ Respuesta final:</strong> "La capital de Francia es París."
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Bucle de predicción */}
      <Card title="🔄 El bucle de predicción">
        <div className="loop-visual">
          {textosExplicativos.buclePrediccion.map((texto, idx) => (
            <React.Fragment key={idx}>
              <div className="loop-item">
                <span className="loop-number">{idx + 1}</span>
                <span className="loop-text">{texto}</span>
              </div>
              {idx < textosExplicativos.buclePrediccion.length - 1 && (
                <div className="loop-arrow">↓</div>
              )}
            </React.Fragment>
          ))}
        </div>
        <p className="loop-nota">
          * Un LLM no "piensa" una respuesta completa y luego la escribe. 
          Es como un pianista que improvisa nota por nota.
        </p>
      </Card>

      {/* Ejemplos interactivos */}
      <h2>📝 Ejemplos de predicción</h2>
      <Grid columns={2} gap="large">
        {ejemplos.map((ejemplo, idx) => (
          <Card 
            key={idx} 
            title={`"${ejemplo.inicio} ..."`}
            onClick={() => setSelectedExample(selectedExample === idx ? null : idx)}
          >
            <div className="prediccion-ejemplo">
              <p className="prediccion-pregunta">{ejemplo.inicio} <span className="cursor">_</span></p>
              
              {selectedExample === idx && (
                <div className="prediccion-respuesta">
                  <p>🤖 La IA predice: <strong>"{ejemplo.prediccion}"</strong></p>
                  <p className="prediccion-completa">📝 Frase completa: "{ejemplo.completado}"</p>
                </div>
              )}
              
              {selectedExample !== idx && (
                <Button variant="secondary" size="small">
                  Ver predicción →
                </Button>
              )}
            </div>
          </Card>
        ))}
      </Grid>

      {/* Visualización de probabilidades */}
      <Card title="📊 Visualizando la predicción" variant="primary">
        <p style={{ marginBottom: '16px' }}>
          Para la frase <strong>"El cielo es de color"</strong>, la IA calcula probabilidades:
        </p>
        <div className="probabilidades">
          {probabilidades.map((item, idx) => (
            <div key={idx} className="prob-item">
              <span className="prob-palabra">{item.palabra}</span>
              <div className="prob-bar-container">
                <div className="prob-bar" style={{ width: `${item.porcentaje}%`, backgroundColor: item.color }}></div>
              </div>
              <span className="prob-valor">{item.porcentaje}%</span>
            </div>
          ))}
        </div>
        <p className="prob-nota">
          * La IA elige la palabra con mayor probabilidad. No "piensa" cuál es correcta.
        </p>
      </Card>

      {/* Frase para recordar */}
      <Card className="frase-final">
        <p className="frase-texto">
          "{textosExplicativos.fraseFinal}"
        </p>
      </Card>
    </div>
  );
};

export default Prediccion;