import React, { useState } from 'react';
import { 
  Card, 
  Badge, 
  Grid, 
  HighlightText, 
  Tooltip,
  CodeBlock
} from '../../components/ui';
import { VectorVisualization } from '../../components/viz';
import { glossaryTerms } from '../../data/glossary';
import { 
  palabrasVectores, 
  conversionEjemplos, 
  textosExplicativos, 
  tooltips 
} from './utils';
import './Embedding.css';

const Embedding = () => {
  const [selectedWord, setSelectedWord] = useState(null);

  const handleVectorClick = (label) => {
    setSelectedWord(selectedWord === label ? null : label);
  };

  const selectedVectorData = palabrasVectores.find(v => v.label === selectedWord);

  return (
    <div className="page-embedding">
      {/* Hero */}
      <div className="hero">
        <h1>
          <HighlightText text="Embedding" highlight="Embedding" color="primary" />
          : de <HighlightText text="texto" highlight="texto" color="warning" /> a <HighlightText text="números" highlight="números" color="success" />
        </h1>
        <p className="hero-subtitle">
          {textosExplicativos.heroSubtitle} <Tooltip {...glossaryTerms.embedding} />
        </p>
        <div className="hero-badges">
          <Badge text="🧮 De texto a números" variant="info" />
          <Badge text="🗺️ Crea un mapa semántico" variant="success" />
          <Badge text="📐 Operaciones matemáticas" variant="warning" />
        </div>
      </div>

      {/* Explicación principal */}
      <Grid columns={2} gap="large">
        <Card title="🔢 ¿Qué es un embedding?" variant="primary">
          <p>
            Un <Tooltip {...tooltips.embedding} />
            es una <strong>lista de números</strong> (vector) que representa una palabra.
          </p>
          <p style={{ marginTop: '16px' }}>
            Cada número en el vector representa una <strong>dimensión</strong> del significado:
          </p>
          <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
            {textosExplicativos.dimensiones.map((dim, idx) => (
              <li key={idx}>{dim}</li>
            ))}
          </ul>
        </Card>

        <Card title="🗺️ ¿Para qué sirve?" variant="primary">
          {textosExplicativos.paraQueSirve.map((texto, idx) => (
            <p key={idx} style={{ marginTop: idx > 0 ? '12px' : 0 }}>
              <strong>{texto.split(':')[0]}:</strong> {texto.split(':')[1]}
            </p>
          ))}
        </Card>
      </Grid>

      {/* Visualización de vectores */}
      <Card title="📊 Visualización de vectores" variant="primary">
        <p style={{ marginBottom: '16px' }}>
          {textosExplicativos.vectoresIntro}
        </p>
        
        <VectorVisualization
          vectors={palabrasVectores}
          selectedVector={selectedWord}
          onVectorClick={handleVectorClick}
        />

        {selectedVectorData && (
          <div className="vector-detalle">
            <p><strong>Vector completo de "{selectedWord}":</strong></p>
            <CodeBlock 
              code={JSON.stringify(selectedVectorData.values, null, 2)}
              language="json"
            />
          </div>
        )}
      </Card>

      {/* Ejemplo de conversión texto → vector */}
      <Card title="🔄 Ejemplo: De texto a vector" variant="primary">
        <div className="conversion-ejemplo">
          {conversionEjemplos.map((item, idx) => (
            <div key={idx} className="conversion-paso">
              <span className="conversion-icon">📝</span>
              <span className="conversion-texto">"{item.palabra}"</span>
              <span className="conversion-flecha">→</span>
              <span className="conversion-icon">🔢</span>
              <code className="conversion-vector">{item.vector}</code>
            </div>
          ))}
          <p className="conversion-nota">
            💡 {textosExplicativos.conversionNota}
          </p>
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

export default Embedding;