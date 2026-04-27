import React, { useState, useEffect } from "react";
import { Card, Badge, Button } from "../../components/ui";
import "./Portada.css";

const Portada = ({ onStart }) => {
  const [animated, setAnimated] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => setAnimated(true), 100);
  }, []);

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

        {/* Descripción */}
        <Card className="portada-descripcion" variant="primary">
          <p>
            <strong>¿Qué vas a aprender?</strong>
          </p>
          <ul>
            <li>🧠 Cómo "piensa" realmente la IA (spoiler: no piensa)</li>
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

        {/* Info del instructor */}
        <Card className="portada-instructor">
          <div className="instructor-info">
            <div className="instructor-avatar">
              <span>👨🏿‍💻</span>
            </div>
            <div className="instructor-datos">
              <h3>Tu instructor</h3>
              <p className="instructor-nombre">Rubén Alejandro Díaz Cárdenas</p>
              <p className="instructor-desc">
                Técnico en Desarrollo de Software | Estudiante de Ingeniería de
                Sistemas | Estudiante de Ingenieria en sistemas | Desarrollador
                fulstack | Desarrollador frontend cells en Epamneoris para
                (BBVA)
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
    </div>
  );
};

export default Portada;
