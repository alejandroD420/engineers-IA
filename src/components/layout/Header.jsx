import React, { useState, useEffect } from 'react';
import { FiClock, FiBookOpen, FiTrendingUp, FiZap } from 'react-icons/fi';
import './Header.css';

const Header = ({ title, currentPage, totalPages }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    return currentTime.toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  // Frases más cortas y legibles para cada página
  const getQuote = () => {
    const quotes = [
      "La IA NO piensa. PREDICE la siguiente palabra",
      "La IA NO ve letras. Ve TROZOS llamados tokens",
      "Texto entra → Números salen. Todo es álgebra",
      "Palabras parecidas = números parecidos",
      "Contexto + Instrucción + Formato = Prompt que funciona",
      "Frío para código → Calor para ideas",
      "La IA NO ejecuta. La IA PIDE ejecutar",
      "MCP = El USB-C de la IA",
      "Modelo pequeño + MCP = IA privada",
      "NO te reemplaza la IA. Te reemplaza quien SABE usarla",
      "Estos 10 conceptos son tu hoja de ruta"
    ];
    return quotes[currentPage] || quotes[0];
  };

  return (
    <header className="header">
      {/* Top row - visible pero pequeño */}
      <div className="header-top">
        <div className="header-info">
          <div className="info-badge">
            <FiZap className="badge-icon" />
            <span>Modo ingeniero</span>
          </div>
          <div className="info-badge">
            <FiBookOpen className="badge-icon" />
            <span>10 conceptos clave</span>
          </div>
        </div>
        <div className="header-time">
          <FiClock className="time-icon" />
          <span>{formatTime()}</span>
        </div>
      </div>
      
      {/* Main row - TÍTULO GRANDE */}
      <div className="header-main">
        <h1 className="header-title">{title}</h1>
        <div className="header-progress-tag">
          <span className="progress-current">{currentPage + 1}</span>
          <span className="progress-sep">/</span>
          <span className="progress-total">{totalPages}</span>
        </div>
      </div>
      
      {/* Bottom row - FRASE GRANDE Y LEGIBLE */}
      <div className="header-bottom">
        <div className="header-quote">
          <span className="quote-mark">“</span>
          <span className="quote-text">{getQuote()}</span>
          <span className="quote-mark">”</span>
        </div>
        <div className="header-timer">
          <FiTrendingUp className="trend-icon" />
          <span>1 hora • 60 minutos</span>
        </div>
      </div>
    </header>
  );
};

export default Header;