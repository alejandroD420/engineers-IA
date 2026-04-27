import React from 'react';
import { 
  Card, 
  Badge, 
  Grid, 
  HighlightText, 
  Tooltip,
  QRCode,
  Table
} from '../../components/ui';
import { glossaryTerms } from '../../data/glossary';
import { 
  gpt4oExamples,
  gpt35Examples,
  gpt4oHeaders,
  gpt35Headers,
  comparacionEficiencia,
  textosExplicativos,
  tooltips
} from './utils';
import './Tokenizacion.css';

const Tokenizacion = () => {
  const gpt4oRows = gpt4oExamples.map(t => [t.texto, t.tokens, t.ids]);
  const gpt35Rows = gpt35Examples.map(t => [t.texto, t.tokens, t.ids]);

  return (
    <div className="page-tokenizacion">
      {/* Hero */}
      <div className="hero">
        <h1>
          <HighlightText text="Tokenización" highlight="Tokenización" color="primary" />
          : el <HighlightText text="alfabeto secreto" highlight="secreto" color="warning" />
        </h1>
        <p className="hero-subtitle">
          {textosExplicativos.heroSubtitle} <Tooltip {...glossaryTerms.token} />.
        </p>
        <div className="hero-badges">
          <Badge text="🔑 Concepto Clave" variant="info" />
          <Badge text="💰 Impacta costo" variant="warning" />
          <Badge text="🧠 Explica errores tontos" variant="success" />
        </div>
      </div>

      {/* Explicación principal */}
      <Grid columns={2} gap="large">
        <Card title="🔍 ¿Qué es la tokenización?" variant="primary">
          <p>
            <Tooltip {...tooltips.tokenizacion} />
            es el proceso de dividir texto en <strong>fragmentos pequeños</strong>.
          </p>
          <p style={{ marginTop: '16px' }}>
            Un token puede ser:
          </p>
          <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
            <li>Una <strong>palabra completa</strong> ("Hola" → 1 token en GPT-4o)</li>
            <li>Una <strong>parte de palabra</strong> ("strawberry" → "Straw" + "berry")</li>
            <li>Un <strong>carácter individual</strong> ("." → 1 token)</li>
          </ul>
        </Card>

        <Card title="🎯 ¿Por qué es importante?" variant="primary">
          {textosExplicativos.importancia.map((texto, idx) => (
            <p key={idx} style={{ marginTop: idx > 0 ? '12px' : 0 }}>
              <strong>{texto.split(':')[0]}:</strong> {texto.split(':')[1]}
            </p>
          ))}
        </Card>
      </Grid>

      {/* Prueba tu mismo con QR */}
      <Card title="📱 Pruébalo tú mismo" variant="primary">
        <div className="qr-section">
          <div className="qr-info">
            <p>
              Escanea este código QR o haz clic para ir a 
              <strong> tiktokenizer.vercel.app</strong>
            </p>
            <p className="qr-ejemplo">
              Prueba con diferentes modelos: <strong>gpt-4o</strong> vs <strong>gpt-3.5-turbo</strong>.
              ¡Verás la diferencia en eficiencia!
            </p>
          </div>
          <div className="qr-code-container">
            <QRCode 
              url={textosExplicativos.qrUrl}
              size={160}
              caption="Tokenizador interactivo"
            />
          </div>
        </div>
      </Card>

      {/* Tabla GPT-4o */}
      <h2>📊 GPT-4o (más eficiente)</h2>
      <Table headers={gpt4oHeaders} rows={gpt4oRows} variant="striped" />

      {/* Tabla GPT-3.5-turbo */}
      <h2>📊 GPT-3.5-turbo (modelo anterior)</h2>
      <Table headers={gpt35Headers} rows={gpt35Rows} variant="striped" />

      {/* Comparación de eficiencia */}
      <Card title="⚡ Comparación de eficiencia" variant="primary">
        <div className="comparacion-modelos">
          <div className="modelo-card">
            <div className="modelo-header gpt4">
              <span className="modelo-icon">{comparacionEficiencia.gpt4o.icono}</span>
              <span className="modelo-nombre">{comparacionEficiencia.gpt4o.nombre}</span>
              <Badge text={comparacionEficiencia.gpt4o.badge} variant={comparacionEficiencia.gpt4o.badgeVariant} />
            </div>
            <div className="modelo-stats">
              {comparacionEficiencia.gpt4o.stats.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-value">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="modelo-card">
            <div className="modelo-header gpt35">
              <span className="modelo-icon">{comparacionEficiencia.gpt35.icono}</span>
              <span className="modelo-nombre">{comparacionEficiencia.gpt35.nombre}</span>
              <Badge text={comparacionEficiencia.gpt35.badge} variant={comparacionEficiencia.gpt35.badgeVariant} />
            </div>
            <div className="modelo-stats">
              {comparacionEficiencia.gpt35.stats.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-value">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="comparacion-nota">
          💡 GPT-4o es hasta <strong>66% más eficiente</strong> que GPT-3.5-turbo. 
          ¡Menos tokens = menos costo y más contexto disponible!
        </p>
      </Card>

      {/* El momento WOW */}
      <Card className="momento-wow">
        <div className="wow-content">
          <span className="wow-icon">💥</span>
          <div className="wow-text">
            <h3>{textosExplicativos.momentoWow.titulo}</h3>
            <p>
              <strong>{textosExplicativos.momentoWow.texto}</strong>
            </p>
            <p>{textosExplicativos.momentoWow.explicacion}</p>
            <p style={{ marginTop: '12px', fontSize: '14px', color: 'var(--color-text-secondary)' }}>
              💡 {textosExplicativos.momentoWow.nota}
            </p>
          </div>
        </div>
      </Card>

      {/* Frase para recordar */}
      <Card className="frase-final">
        <p className="frase-texto">
          "{textosExplicativos.fraseFinal}"
        </p>
      </Card>
    </div>
  );
};

export default Tokenizacion;