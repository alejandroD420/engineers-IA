import React, { useState, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './Tooltip.css';

const Tooltip = ({
  termino,
  definicion,
  ingles,
  espanol,
  children,
  position = 'auto'
}) => {
  const [show, setShow] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ left: 0, top: 0 });
  const [arrowPos, setArrowPos] = useState({ left: 0 });
  const triggerRef = useRef(null);

  const config = {
    width: 320,
    offsetX: 20,
    offsetY: -20,
  };

  const calculatePosition = useCallback((mouseX, mouseY) => {
    const ventanaAncho = window.innerWidth;
    const ventanaAlto = window.innerHeight;

    let left = mouseX + config.offsetX;
    let top = mouseY + config.offsetY;

    if (left + config.width > ventanaAncho) {
      left = mouseX - config.width - config.offsetX;
    }

    if (top - 100 < 0) {
      top = mouseY + 30;
    }

    if (top + 200 > ventanaAlto) {
      top = ventanaAlto - 220;
    }

    if (left < 0) {
      left = 10;
    }

    return { left, top };
  }, []);

  const updatePosition = useCallback((x, y) => {
    const { left, top } = calculatePosition(x, y);
    setTooltipPos({ left, top });

    const arrowLeft = x - left;
    setArrowPos({ left: arrowLeft });
  }, [calculatePosition]);

  const handleMouseEnter = useCallback((e) => {
    updatePosition(e.clientX, e.clientY);
    setShow(true);
  }, [updatePosition]);

  const handleMouseMove = useCallback((e) => {
    if (!show) return;
    updatePosition(e.clientX, e.clientY);
  }, [show, updatePosition]);

  const handleMouseLeave = useCallback(() => {
    setShow(false);
  }, []);

  const triggerElement = children ? (
    React.cloneElement(children, {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onMouseMove: handleMouseMove,
      className: `${children.props.className || ''} tooltip-trigger`.trim(),
      ref: triggerRef,
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

      {show && createPortal(
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
        </div>,
        document.body
      )}
    </>
  );
};

export default Tooltip;
