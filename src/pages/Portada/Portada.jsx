import React, { useState, useEffect, useCallback } from "react";
import { Card, Badge } from "../../components/ui";
import "./Portada.css";

const Portada = ({ onStart }) => {
  const [animated, setAnimated] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const [subSlide, setSubSlide] = useState(0);
  const [direction, setDirection] = useState("forward");
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimated(true), 100);
  }, []);

  const getAnimClass = useCallback((slideNum, dir) => {
    if (dir === "forward") {
      if (slideNum === 1) return "anim-slide-reveal";
      if (slideNum === 2) return "anim-scale-rotate";
    } else if (dir === "backward") {
      if (slideNum === 0) return "anim-slide-reveal-reverse";
      if (slideNum === 1) return "anim-scale-rotate-reverse";
    }
    return "";
  }, []);

  const goNext = useCallback(() => {
    if (subSlide === 2) {
      onStart();
      return;
    }
    setDirection("forward");
    setAnimKey((prev) => prev + 1);
    setSubSlide((prev) => prev + 1);
  }, [subSlide, onStart]);

  const goPrev = useCallback(() => {
    if (subSlide === 0) return;
    setDirection("backward");
    setAnimKey((prev) => prev + 1);
    setSubSlide((prev) => prev - 1);
  }, [subSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  const animClass = getAnimClass(subSlide, direction);

  return (
    <div className={`page-portada ${animated ? "animated" : ""}`}>
      {/* Fondo decorativo */}
      <div className="portada-bg">
        <div className="bg-circulo circulo-1"></div>
        <div className="bg-circulo circulo-2"></div>
        <div className="bg-circulo circulo-3"></div>
        <div className="bg-lineas">
          <div className="linea"></div>
          <div className="linea"></div>
          <div className="linea"></div>
          <div className="linea"></div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="portada-content">
        {subSlide === 0 && (
          <div key={`slide-0-${animKey}`} className={`sub-slide ${animClass}`}>
            {/* Logo / Icono */}
            <div className="portada-logo">
              <span className="logo-icon">🧠</span>
              <span className="logo-icon">⚡</span>
              <span className="logo-icon">🤖</span>
            </div>

            {/* Título principal */}
            <h1 className="portada-titulo">
              <span className="titulo-linea">Engineers</span>
              <span className="titulo-linea titulo-destacado">IA</span>
            </h1>

            <p className="portada-subtitulo">
              Taller de Inteligencia Artificial para ingenieros
            </p>

            {/* Badges */}
            <div className="portada-badges">
              <Badge text="🎯 10 conceptos clave" variant="info" />
              <Badge text="⚡ 1 hora intensiva" variant="warning" />
              <Badge text="💻 IA práctica" variant="success" />
              <Badge text="🔧 De token a MCP" variant="primary" />
            </div>

            {/* Fecha y lugar */}
            <div className="portada-fecha">
              <p>
                📅{" "}
                {new Date().toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p>
                📍 Institución Universitaria Antonio José Camacho | Semillero
                ITMedia
              </p>
            </div>
          </div>
        )}

        {subSlide === 1 && (
          <div key={`slide-1-${animKey}`} className={`sub-slide ${animClass}`}>
            <Card className="portada-descripcion" variant="primary">
              <p>
                <strong>¿Qué vas a aprender?</strong>
              </p>
              <ul>
                <li>
                  🧠 Cómo &quot;piensa&quot; realmente la IA (spoiler: no
                  piensa)
                </li>
                <li>🔢 Tokenización: el alfabeto secreto de las IA</li>
                <li>📊 Embeddings y distancia semántica</li>
                <li>📝 La estructura de oro del prompt</li>
                <li>🌡️ Temperature: frío para trabajar, calor para crear</li>
                <li>📄 Skills: cómo la IA se comporta y actúa</li>
                <li>🔌 MCP: el USB-C de la IA</li>
                <li>💻 Modelos pequeños: IA en tu laptop</li>
                <li>🤔 ¿Nos reemplazará? La respuesta final</li>
              </ul>
            </Card>
          </div>
        )}

        {subSlide === 2 && (
          <div key={`slide-2-${animKey}`} className={`sub-slide ${animClass}`}>
            {/* Info del instructor */}
            <Card className="portada-instructor">
              <div className="instructor-info">
                <div className="instructor-avatar">
                  <span>👨🏿‍💻</span>
                </div>
                <div className="instructor-datos">
                  <h3>Tu instructor</h3>
                  <p className="instructor-nombre">
                    Rubén Alejandro Díaz Cárdenas
                  </p>
                  <p className="instructor-desc">
                    Técnico en Desarrollo de Software | Estudiante de Ingeniería
                    de Sistemas septimo semestre | Desarrollador fulstack |
                    Desarrollador frontend cells en Epamneoris para (BBVA)
                  </p>
                  <div className="instructor-contacto">
                    <a href="mailto:ruben.ocampo@unicauca.edu.co">
                      📧 ralejandrodiaz@estudiante.uniajc.edu.co
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ruben-diaz-61786b1b5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🔗 LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Botón comenzar */}
            <button className="portada-btn" onClick={onStart}>
              <span>🚀 Comenzar taller</span>
              <span className="btn-flecha">→</span>
            </button>

            {/* Footer */}
            <div className="portada-footer">
              <p>🧠 Engineers IA · {currentYear}</p>
              <p>10 conceptos · 60 minutos · El futuro en tus manos</p>
            </div>
          </div>
        )}
      </div>

      {/* Navegación inferior */}
      <div className="portada-nav">
        {subSlide > 0 && (
          <button className="nav-arrow" onClick={goPrev} aria-label="Anterior">
            ‹
          </button>
        )}
        {subSlide < 2 && (
          <button className="nav-arrow" onClick={goNext} aria-label="Siguiente">
            ›
          </button>
        )}
      </div>
    </div>
  );
};

export default Portada;
