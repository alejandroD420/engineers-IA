import React, { useState } from 'react';
import { 
  Card, 
  Badge, 
  Grid, 
  HighlightText, 
  Slider
} from '../../components/ui';
import { 
  getRespuestaPorTemperatura,
  escalaConfig,
  ejemplosEscala,
  comparativaRespuestas,
  plataformas,
  textosExplicativos
} from './utils';
import './Temperature.css';

const Temperature = () => {
  const [temperature, setTemperature] = useState(0.5);
  const respuesta = getRespuestaPorTemperatura(temperature);

  return (
    <div className="page-temperature">
      {/* Hero */}
      <div className="hero">
        <h1>
          <HighlightText text="Temperature" highlight="Temperature" color="primary" />
          : <HighlightText text="Frío o Calor" highlight="Frío o Calor" color="warning" />
        </h1>
        <p className="hero-subtitle">{textosExplicativos.heroSubtitle}</p>
        <div className="hero-badges">
          <Badge text="❄️ Frío = Preciso" variant="info" />
          <Badge text="🔥 Calor = Creativo" variant="warning" />
          <Badge text="⚖️ Tú decides" variant="success" />
        </div>
      </div>

      {/* Explicación principal */}
      <Grid columns={2} gap="large">
        <Card title="🌡️ ¿Qué es la temperature?" variant="primary">
          <p className="texto-grande">{textosExplicativos.queEs}</p>
          <div className="temperatura-bajas">
            <p className="subtitulo-grande">{textosExplicativos.temperatureBaja}</p>
            <ul className="lista-grande">
              {textosExplicativos.ventajasBaja.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="temperatura-altas">
            <p className="subtitulo-grande">{textosExplicativos.temperatureAlta}</p>
            <ul className="lista-grande">
              {textosExplicativos.ventajasAlta.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </Card>

        <Card title="🎮 Pruébalo tú mismo" variant="primary">
          <div className="demo-temperature">
            <p className="demo-pregunta">
              <strong>Pregunta:</strong> "{textosExplicativos.demoPregunta}"
            </p>
            
            <div className="slider-container-demo">
              <span className="slider-label-frio">❄️ Frío</span>
              <Slider
                min={0}
                max={1}
                step={0.01}
                value={temperature}
                onChange={setTemperature}
              />
              <span className="slider-label-calor">🔥 Calor</span>
            </div>
            
            <div className="respuesta-container">
              <div className="respuesta-valor">
                <span className="respuesta-label">Temperature:</span>
                <span className="respuesta-numero">{temperature.toFixed(2)}</span>
              </div>
              <div className="respuesta-texto">
                <span className="respuesta-icon">🤖</span>
                <span className="respuesta-palabra">"{respuesta.texto}"</span>
              </div>
              <div className="respuesta-explicacion">
                💡 {respuesta.explicacion}
              </div>
            </div>
          </div>
        </Card>
      </Grid>

      {/* Escala de temperature visual */}
      <Card title="📊 Escala de Temperature" variant="primary">
        <div className="escala-temperature">
          <div className="escala-barra">
            <div className="escala-frio" style={{ width: `${escalaConfig.frio.porcentaje}%` }}>
              <span>{escalaConfig.frio.label}</span>
            </div>
            <div className="escala-equilibrio" style={{ width: `${escalaConfig.equilibrio.porcentaje}%` }}>
              <span>{escalaConfig.equilibrio.label}</span>
            </div>
            <div className="escala-calor" style={{ width: `${escalaConfig.calor.porcentaje}%` }}>
              <span>{escalaConfig.calor.label}</span>
            </div>
          </div>
          <div className="escala-marcador" style={{ left: `${temperature * 100}%` }}>
            <div className="marcador-punto"></div>
            <div className="marcador-valor">{temperature.toFixed(2)}</div>
          </div>
        </div>

        <div className="escala-ejemplos">
          {ejemplosEscala.map((ejemplo, idx) => (
            <div key={idx} className="ejemplo-temp">
              <Badge text={ejemplo.rango} variant={ejemplo.variant} />
              <p>{ejemplo.texto}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Comparativa de respuestas */}
      <h2>🔄 Comparativa de respuestas</h2>
      <Grid columns={3} gap="large">
        {comparativaRespuestas.map((item, idx) => (
          <Card key={idx} title={item.titulo} variant="primary">
            <div className="comparativa-respuesta">
              <p className="comparativa-pregunta">Nombre para mascota:</p>
              <p className={`comparativa-texto ${item.clase}`}>"{item.respuesta}"</p>
              <p className="comparativa-nota">{item.nota}</p>
            </div>
          </Card>
        ))}
      </Grid>

      {/* Dónde ajustar la temperature */}
      <Card title="⚙️ ¿Dónde ajustar la temperature?" variant="primary">
        <div className="plataformas-container">
          {plataformas.map((plataforma, idx) => (
            <div key={idx} className="plataforma">
              <div className="plataforma-icon">{plataforma.icono}</div>
              <div className="plataforma-nombre">{plataforma.nombre}</div>
              <div className="plataforma-detalle">
                {plataforma.detalles.map((detalle, detIdx) => (
                  <p key={detIdx}>
                    <strong>{detalle.split(':')[0]}:</strong> {detalle.split(':')[1]}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="plataformas-nota">{textosExplicativos.plataformasNota}</p>
      </Card>

      {/* Regla práctica */}
      <Card className="regla-card">
        <div className="regla-content">
          <div className="regla-icon">🎯</div>
          <div className="regla-texto">
            <h3>Regla práctica</h3>
            <p>{textosExplicativos.reglaPractica}</p>
            <p>{textosExplicativos.reglaPracticaAlta}</p>
            <p className="regla-ejemplo">💡 {textosExplicativos.reglaEjemplo}</p>
          </div>
        </div>
      </Card>

      {/* Frase para recordar */}
      <Card className="frase-final">
        <div className="frase-centrada">
          <p className="frase-texto-grande">{textosExplicativos.fraseFinal}</p>
        </div>
      </Card>
    </div>
  );
};

export default Temperature;