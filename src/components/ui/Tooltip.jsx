import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Tooltip.css';

const Tooltip = ({ 
  termino,           // Término principal
  definicion,        // Definición larga
  ingles,            // Término en inglés
  espanol,           // Término en español
  children,          // Contenido interno (texto o componente)
  position = 'auto'  // auto, top, bottom, left, right
}) => {
  const [show, setShow] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tooltipPos, setTooltipPos] = useState({ left: 0, top: 0 });
  const [arrowPos, setArrowPos] = useState({ left: 0 });
  const tooltipRef = useRef(null);
  const triggerRef = useRef(null);
  
  // Configuración
  const config = {
    width: 320,
    offsetX: 20,
    offsetY: -20,
  };

  // Calcular posición inteligente
  const calculatePosition = useCallback((mouseX, mouseY) => {
    const ventanaAncho = window.innerWidth;
    const ventanaAlto = window.innerHeight;
    
    let left = mouseX + config.offsetX;
    let top = mouseY + config.offsetY;
    
    // Ajustar si se sale por la derecha
    if (left + config.width > ventanaAncho) {
      left = mouseX - config.width - config.offsetX;
    }
    
    // Ajustar si se sale por arriba
    if (top - 100 < 0) {
      top = mouseY + 30;
    }
    
    // Ajustar si se sale por abajo
    if (top + 200 > ventanaAlto) {
      top = ventanaAlto - 220;
    }
    
    // Ajustar si se sale por la izquierda
    if (left < 0) {
      left = 10;
    }
    
    return { left, top };
  }, []);

  // Calcular posición de la flecha
  const calculateArrowPosition = useCallback((mouseX, tooltipLeft) => {
    return { left: mouseX - tooltipLeft };
  }, []);

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  const handleMouseMove = useCallback((event) => {
    const x = event.clientX;
    const y = event.clientY;
    setMousePos({ x, y });
    
    if (show) {
      const { left, top } = calculatePosition(x, y);
      setTooltipPos({ left, top });
      
      const { left: arrowLeft } = calculateArrowPosition(x, left);
      setArrowPos({ left: arrowLeft });
    }
  }, [show, calculatePosition, calculateArrowPosition]);

  // Actualizar posición cuando cambia el mouse
  useEffect(() => {
    if (show) {
      const { left, top } = calculatePosition(mousePos.x, mousePos.y);
      setTooltipPos({ left, top });
      
      const { left: arrowLeft } = calculateArrowPosition(mousePos.x, left);
      setArrowPos({ left: arrowLeft });
    }
  }, [mousePos, show, calculatePosition, calculateArrowPosition]);

  // Clonar children para agregar event handlers
  const triggerElement = children ? (
    React.cloneElement(children, {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onMouseMove: handleMouseMove,
      className: `${children.props.className || ''} tooltip-trigger`.trim(),
      ref: triggerRef
    })
  ) : (
    <span
      className="tooltip-trigger"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={triggerRef}
    >
      {termino}
    </span>
  );

  return (
    <>
      {triggerElement}
      
      {show && (
        <div 
          className="tooltip-modal"
          style={{
            left: `${tooltipPos.left}px`,
            top: `${tooltipPos.top}px`,
          }}
        >
          <strong>{termino}</strong>
          
          {definicion && (
            <p className="tooltip-definicion">{definicion}</p>
          )}
          
          {ingles && (
            <p className="tooltip-ingles">
              <span className="tooltip-flag">🇬🇧</span> {ingles}
            </p>
          )}
          
          {espanol && (
            <p className="tooltip-espanol">
              <span className="tooltip-flag">🇪🇸</span> {espanol}
            </p>
          )}
          
          <div 
            className="tooltip-arrow"
            style={{ left: `${arrowPos.left}px` }}
          />
        </div>
      )}
    </>
  );
};

export default Tooltip;