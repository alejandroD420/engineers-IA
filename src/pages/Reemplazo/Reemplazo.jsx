import React, { useState } from 'react';
import { 
  Card, 
  Badge, 
  Grid, 
  HighlightText, 
  Button,
  ProgressBar
} from '../../components/ui';
import { 
  conceptosClave,
  tareas,
  preguntasFrecuentes,
  gobiernoPuntos,
  textosExplicativos,
  respuestasEncuesta
} from './utils';
import './Reemplazo.css';

const Reemplazo = () => {
  const [votoReemplazo, setVotoReemplazo] = useState(null);
  const [checkedTasks, setCheckedTasks] = useState({});

  const toggleTask = (idx) => {
    setCheckedTasks(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="page-reemplazo">
      {/* Hero */}
      <div className="hero">
        <h1>
          <HighlightText text="¿Nos reemplazará" highlight="¿Nos reemplazará" color="danger" />
          <HighlightText text=" la IA?" highlight=" la IA?" color="primary" />
        </h1>
        <p className="hero-subtitle">{textosExplicativos.heroSubtitle}</p>
        <div className="hero-badges">
          <Badge text="🤖 Spoiler: No" variant="danger" />
          <Badge text="📊 Pero cambia las reglas" variant="warning" />
          <Badge text="🚀 Depende de ti" variant="success" />
        </div>
      </div>

      {/* Encuesta rápida */}
      <Card className="encuesta-card">
        <div className="encuesta-header">
          <span className="encuesta-icon">🗳️</span>
          <h3>¿Qué opinas?</h3>
        </div>
        <div className="encuesta-opciones">
          <button 
            className={`encuesta-btn ${votoReemplazo === 'si' ? 'selected-si' : ''}`}
            onClick={() => setVotoReemplazo('si')}
          >
            🤖 <strong>Sí, nos va a reemplazar</strong>
          </button>
          <button 
            className={`encuesta-btn ${votoReemplazo === 'no' ? 'selected-no' : ''}`}
            onClick={() => setVotoReemplazo('no')}
          >
            💪 <strong>No, solo nos va a aumentar</strong>
          </button>
          <button 
            className={`encuesta-btn ${votoReemplazo === 'depende' ? 'selected-depende' : ''}`}
            onClick={() => setVotoReemplazo('depende')}
          >
            ⚖️ <strong>Depende de quién la use</strong>
          </button>
        </div>
        {votoReemplazo && (
          <div className="encuesta-resultado">
            <p>{respuestasEncuesta[votoReemplazo]}</p>
          </div>
        )}
      </Card>

      {/* Respuesta principal */}
      <Grid columns={2} gap="large">
        <Card title="🚫 Respuesta corta" variant="primary">
          <div className="respuesta-corta">
            <span className="respuesta-grande">NO</span>
            <p>{textosExplicativos.respuestaCorta}</p>
          </div>
          <div className="cita">
            <p>{textosExplicativos.cita}</p>
          </div>
        </Card>

        <Card title="✅ Respuesta larga" variant="primary">
          <p>{textosExplicativos.respuestaLarga}</p>
          <p className="texto-destacado">{textosExplicativos.masProductivos}</p>
          <p>{textosExplicativos.quedarAtras}</p>
          <div className="reflexion">
            💡 <strong>Reflexión final del taller:</strong>
            <p>{textosExplicativos.reflexion}</p>
          </div>
        </Card>
      </Grid>

      {/* Los 10 conceptos */}
      <h2>📋 Los 10 conceptos que te hacen irremplazable</h2>
      <div className="conceptos-grid">
        {conceptosClave.map((concepto, idx) => (
          <div key={idx} className="concepto-card">
            <div className="concepto-numero">{concepto.num}</div>
            <div className="concepto-contenido">
              <div className="concepto-titulo">{concepto.titulo}</div>
              <div className="concepto-descripcion">{concepto.descripcion}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Preguntas frecuentes */}
      <h2>❓ Preguntas frecuentes</h2>
      <Grid columns={2} gap="large">
        {preguntasFrecuentes.map((item, idx) => (
          <Card key={idx} title={item.q} variant="primary">
            <p className="faq-respuesta">{item.a}</p>
          </Card>
        ))}
      </Grid>

      {/* ¿Nos gobernará? */}
      <Card className="gobierno-card">
        <div className="gobierno-header">
          <span className="gobierno-icon">👑</span>
          <h3>¿Nos gobernará la IA?</h3>
        </div>
        <div className="gobierno-content">
          <p className="gobierno-pregunta">{textosExplicativos.gobiernoPregunta}</p>
          <div className="gobierno-puntos">
            {gobiernoPuntos.map((punto, idx) => (
              <div key={idx} className="gobierno-punto">
                <span className="punto-icon">{punto.icono}</span>
                <p><strong>{punto.texto.split(':')[0]}:</strong> {punto.texto.split(':')[1]}</p>
              </div>
            ))}
          </div>
          <div className="gobierno-cita">
            <p>{textosExplicativos.gobiernoCita}</p>
          </div>
        </div>
      </Card>

      {/* ¿Será más grande o más pequeña? */}
      <Card className="tendencia-card">
        <div className="tendencia-header">
          <span className="tendencia-icon">📈</span>
          <h3>¿Será más grande o más pequeña?</h3>
        </div>
        <div className="tendencia-contenido">
          <div className="tendencia-item grande">
            <span className="tendencia-icono">🏢</span>
            <div className="tendencia-info">
              <h4>Más grande</h4>
              <p>Modelos gigantes en la nube (GPT-5, Gemini Ultra)<br />
              Para tareas <strong>generales</strong> que requieren máxima inteligencia</p>
            </div>
          </div>
          <div className="tendencia-divisor">↔️</div>
          <div className="tendencia-item pequeno">
            <span className="tendencia-icono">💻</span>
            <div className="tendencia-info">
              <h4>Más pequeña</h4>
              <p>Modelos locales + MCP (Llama, Mistral, Phi)<br />
              Para <strong>tareas específicas</strong> con tus datos privados</p>
            </div>
          </div>
        </div>
        <p className="tendencia-conclusion">{textosExplicativos.tendenciaConclusion}</p>
      </Card>

      {/* Tu tarea esta semana */}
      <Card className="tarea-card">
        <div className="tarea-header">
          <span className="tarea-icon">🎯</span>
          <h3>Tu tarea esta semana</h3>
        </div>
        <div className="tarea-lista">
          {tareas.map((tarea, idx) => (
            <div key={idx} className="tarea-item">
              <input
                type="checkbox"
                checked={!!checkedTasks[idx]}
                onChange={() => toggleTask(idx)}
                id={`tarea-${idx}`}
              />
              <label htmlFor={`tarea-${idx}`}>
                <span className="tarea-check">{checkedTasks[idx] ? '✅' : '⬜'}</span>
                <span className="tarea-texto" dangerouslySetInnerHTML={{ __html: tarea }} />
              </label>
            </div>
          ))}
        </div>
        <div className="tarea-progreso">
          <ProgressBar 
            current={Object.values(checkedTasks).filter(v => v).length} 
            total={tareas.length} 
            showPercentage={true}
          />
        </div>
      </Card>

      {/* Frase final */}
      <Card className="frase-final">
        <div className="frase-centrada">
          <p className="frase-principal">{textosExplicativos.frasePrincipal}</p>
          <p className="frase-autor">— Este taller</p>
          <div className="frase-despedida">
            <p>🧠 <strong>Engineers IA</strong></p>
            <p>{textosExplicativos.despedida}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Reemplazo;