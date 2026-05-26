import React, { useState, useEffect, useCallback } from 'react';
import './SlideDeck.css';

const DEFAULT_EFFECTS = ['slide-reveal', 'scale-rotate', 'matrix-rain', 'scanline'];

const SlideDeck = ({ children, effects }) => {
  const effectsList = effects ?? DEFAULT_EFFECTS;
  const [subSlide, setSubSlide] = useState(0);
  const [direction, setDirection] = useState('forward');
  const [animKey, setAnimKey] = useState(0);

  const slides = React.Children.toArray(children);
  const totalSlides = slides.length;

  const getAnimClass = useCallback((slideNum, dir) => {
    if (dir === 'forward') {
      if (slideNum === 0) return '';
      return `anim-${effectsList[(slideNum - 1) % effectsList.length]}`;
    }
    return `anim-${effectsList[slideNum % effectsList.length]}-reverse`;
  }, [effectsList]);

  const goNext = useCallback(() => {
    if (subSlide >= totalSlides - 1) return;
    setDirection('forward');
    setAnimKey((prev) => prev + 1);
    setSubSlide((prev) => prev + 1);
  }, [subSlide, totalSlides]);

  const goPrev = useCallback(() => {
    if (subSlide <= 0) return;
    setDirection('backward');
    setAnimKey((prev) => prev + 1);
    setSubSlide((prev) => prev - 1);
  }, [subSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        goNext();
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  const animClass = getAnimClass(subSlide, direction);

  return (
    <div className="slide-deck">
      <div className="slide-deck-content">
        {slides.map((child, idx) =>
          idx === subSlide ? (
            <div
              key={`slide-${idx}-${animKey}`}
              className={`slide-section ${animClass}`}
            >
              {child}
            </div>
          ) : null
        )}
      </div>

      <div className="deck-nav">
        {subSlide > 0 && (
          <button className="deck-arrow deck-arrow-prev" onClick={goPrev} aria-label="Anterior">
            ‹
          </button>
        )}
        {subSlide < totalSlides - 1 && (
          <button className="deck-arrow deck-arrow-next" onClick={goNext} aria-label="Siguiente">
            ›
          </button>
        )}
      </div>
    </div>
  );
};

export default SlideDeck;
