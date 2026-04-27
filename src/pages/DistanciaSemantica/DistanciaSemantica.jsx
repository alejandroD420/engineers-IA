import React, { useState } from 'react';
import { 
  Card, 
  Badge, 
  Grid, 
  HighlightText, 
  Tooltip,
  Button
} from '../../components/ui';
import { CartesianPlane } from '../../components/viz';
import { glossaryTerms } from '../../data/glossary';
import { 
  puntosMapa, 
  mapaConfig, 
  analogias, 
  textosExplicativos, 
  tooltips 
} from './utils';
import './DistanciaSemantica.css';

const DistanciaSemantica = () => {
  const [showAnswer, setShowAnswer] = useState({});
  const [selectedPoint, setSelectedPoint] = useState(null);

  const toggleAnswer = (idx) => {
    setShowAnswer(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="page-distancia">
      {/* Hero */}
      <div className="hero">
        <h1>
          <HighlightText text="Distancia Semántica" highlight="Distancia Semántica" color="primary" />
          : el <HighlightText text="mapa invisible" highlight="invisible" color="warning" />
        </h1>
        <p className="hero-subtitle">
          <Tooltip {...tooltips.distanciaSemantica} />
          : {textosExplicativos.heroSubtitle}
        </p>
        <div className="hero-badges">
          <Badge text="🗺️ Geometría, no magia" variant="info" />
          <Badge text="📐 Álgebra lineal" variant="success" />
          <Badge text="🧠 Analogías" variant="warning" />
        </div>
      </div>

      {/* Explicación principal */}
      <Grid columns={2} gap="large">
        <Card title="🗺️ ¿Qué es la distancia semántica?" variant="primary">
          <p>{textosExplicativos.queEs}</p>
          <p style={{ marginTop: '16px' }}>
            <strong>{textosExplicativos.similares}</strong><br />
            <strong>{textosExplicativos.diferentes}</strong>
          </p>
          <p style={{ marginTop: '16px', color: 'var(--color-text-secondary)' }}>
            La IA puede medir qué tan cerca están dos palabras calculando la 
            <strong> distancia entre sus vectores</strong>.
          </p>
        </Card>

        <Card title="🧠 ¿Cómo lo hace?" variant="primary">
          <p>
            {textosExplicativos.comoLoHace}
          </p>
          <div className="operacion-analogia">
            <span className="operacion-palabra">Rey</span>
            <span className="operacion-signo">−</span>
            <span className="operacion-palabra">Hombre</span>
            <span className="operacion-signo">+</span>
            <span className="operacion-palabra">Mujer</span>
            <span className="operacion-signo">=</span>
            <span className="operacion-palabra resultado">Reina</span>
          </div>
          <p className="operacion-nota">
            ✨ {textosExplicativos.operacionNota}
          </p>
        </Card>
      </Grid>

      {/* Mapa semántico */}
      <Card title="🗺️ Mapa semántico: palabras en el espacio vectorial" variant="primary">
        <div className="mapa-wrapper">
          <CartesianPlane
            points={puntosMapa}
            xLabel={mapaConfig.xLabel}
            yLabel={mapaConfig.yLabel}
            onPointClick={(point) => setSelectedPoint(point.label)}
          />
        </div>
        {selectedPoint && (
          <div className="selected-info">
            <p>
              📌 <strong>{selectedPoint}</strong> es un punto en el espacio vectorial.
              Su posición relativa a otras palabras determina su <strong>significado</strong>.
            </p>
          </div>
        )}
        <p className="mapa-nota">
          💡 {textosExplicativos.mapaNota}
        </p>
      </Card>

      {/* Ejercicio de analogías - 2x2 simétrico */}
      <h2>📝 Ejercicio: Completa las analogías</h2>
      <Grid columns={2} gap="large">
        {analogias.map((analogia, idx) => (
          <Card key={idx} title={`Analogía ${idx + 1}`}>
            <p className="analogia-pregunta">{analogia.pregunta}</p>
            {!showAnswer[idx] ? (
              <Button 
                variant="secondary" 
                size="small"
                onClick={() => toggleAnswer(idx)}
              >
                🤔 Mostrar respuesta →
              </Button>
            ) : (
              <div className="analogia-respuesta">
                <p><strong>✅ Respuesta:</strong> {analogia.respuesta}</p>
                <p className="analogia-explicacion">
                  <strong>📐 Explicación:</strong> {analogia.explicacion}
                </p>
              </div>
            )}
          </Card>
        ))}
      </Grid>

      {/* La gran verdad */}
      <Card className="verdad-card">
        <div className="verdad-content">
          <span className="verdad-icon">💡</span>
          <div className="verdad-text">
            <h3>La gran verdad</h3>
            <p>{textosExplicativos.granVerdad}</p>
            <p style={{ marginTop: '12px' }}>
              <strong>{textosExplicativos.granVerdadConclusion}</strong>
            </p>
          </div>
        </div>
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

export default DistanciaSemantica;