import React, { useState } from 'react';
import './VectorVisualization.css';

const VectorVisualization = ({ 
  vectors = [],        // Array de { label, values, color }
  selectedVector = null,
  onVectorClick = null
}) => {
  const [hoveredVector, setHoveredVector] = useState(null);

  const maxValue = Math.max(...vectors.flatMap(v => v.values.map(Math.abs)));
  
  const getBarHeight = (value) => (Math.abs(value) / maxValue) * 60;

  return (
    <div className="vector-visualization">
      <div className="vectors-container">
        {vectors.map((vector, idx) => (
          <div 
            key={idx}
            className={`vector-item ${selectedVector === vector.label ? 'selected' : ''} ${hoveredVector === vector.label ? 'hovered' : ''}`}
            onClick={() => onVectorClick && onVectorClick(vector.label)}
            onMouseEnter={() => setHoveredVector(vector.label)}
            onMouseLeave={() => setHoveredVector(null)}
          >
            <div className="vector-label" style={{ color: vector.color }}>
              {vector.label}
            </div>
            <div className="vector-bars">
              {vector.values.map((val, i) => (
                <div 
                  key={i}
                  className="vector-bar"
                  style={{ 
                    height: `${getBarHeight(val)}px`,
                    backgroundColor: val > 0 ? vector.color : '#64748b',
                    opacity: hoveredVector === vector.label ? 1 : 0.8
                  }}
                />
              ))}
            </div>
            {selectedVector === vector.label && (
              <div className="vector-values">
                {vector.values.map((val, i) => (
                  <span key={i} className="vector-value">{val.toFixed(2)}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="vector-nota">
        Cada barra representa una <strong>dimensión</strong> del vector. 
        Palabras similares tienen <strong>barras similares</strong>.
      </p>
    </div>
  );
};

export default VectorVisualization;