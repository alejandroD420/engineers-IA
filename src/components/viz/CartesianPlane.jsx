import React from 'react';
import './CartesianPlane.css';

const CartesianPlane = ({ 
  points = [],
  width = 500,
  height = 500,
  xLabel = "X",
  yLabel = "Y",
  showGrid = true,
  onPointClick = null
}) => {
  // Normalizar coordenadas (x,y de -1..1 a porcentaje 0..100%)
  const normalizeX = (x) => ((x + 1) / 2) * 100;
  const normalizeY = (y) => ((1 - y) / 2) * 100;

  // Agrupar puntos por grupo
  const groupedPoints = points.reduce((acc, point) => {
    if (point.group) {
      if (!acc[point.group]) acc[point.group] = [];
      acc[point.group].push(point);
    }
    return acc;
  }, {});

  return (
    <div className="cartesian-plane" style={{ maxWidth: width }}>
      <div className="plane-container" style={{ aspectRatio: '1/1' }}>
        {/* Fondo con grid */}
        <div className="plane-bg">
          {showGrid && (
            <div className="plane-grid">
              <div className="grid-line horizontal" style={{ top: '25%' }} />
              <div className="grid-line horizontal" style={{ top: '50%' }} />
              <div className="grid-line horizontal" style={{ top: '75%' }} />
              <div className="grid-line vertical" style={{ left: '25%' }} />
              <div className="grid-line vertical" style={{ left: '50%' }} />
              <div className="grid-line vertical" style={{ left: '75%' }} />
            </div>
          )}
        </div>

        {/* Ejes centrados */}
        <div className="plane-axes">
          <div className="axis axis-x" />
          <div className="axis axis-y" />
          <div className="axis-label-x">{xLabel}</div>
          <div className="axis-label-y">{yLabel}</div>
        </div>

        {/* Conexiones entre puntos del mismo grupo */}
        <svg className="plane-connections" viewBox="0 0 100 100" preserveAspectRatio="none">
          {Object.values(groupedPoints).map((group, idx) => (
            group.length > 1 && (
              <line
                key={idx}
                x1={normalizeX(group[0].x)}
                y1={normalizeY(group[0].y)}
                x2={normalizeX(group[1].x)}
                y2={normalizeY(group[1].y)}
                stroke={group[0].color || '#3b82f6'}
                strokeWidth="0.8"
                strokeDasharray="3"
              />
            )
          ))}
        </svg>

        {/* Puntos */}
        <div className="plane-points">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="plane-point"
              style={{
                left: `${normalizeX(point.x)}%`,
                top: `${normalizeY(point.y)}%`,
              }}
              onClick={() => onPointClick && onPointClick(point)}
            >
              <div 
                className="point-dot" 
                style={{ backgroundColor: point.color || '#3b82f6' }}
              />
              <span className="point-label">{point.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Leyenda compacta */}
      {Object.keys(groupedPoints).length > 0 && (
        <div className="plane-legend">
          {Object.entries(groupedPoints).map(([groupName, groupPoints]) => (
            <div key={groupName} className="legend-item">
              <div 
                className="legend-color" 
                style={{ backgroundColor: groupPoints[0].color }} 
              />
              <span className="legend-text">{groupName}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartesianPlane;