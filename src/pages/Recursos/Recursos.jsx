import React, { useState } from 'react';
import { 
  Card, 
  Badge, 
  Grid, 
  HighlightText, 
  Button,
  QRCode,
  Divider
} from '../../components/ui';
import { 
  cheatSheet,
  recursos,
  codigoEjemploLocal,
  tallerUrls,
  textosExplicativos
} from './utils';
import './Recursos.css';

const Recursos = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCheatSheet = async () => {
    await navigator.clipboard.writeText(cheatSheet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="page-recursos">
      {/* Hero */}
      <div className="hero">
        <h1>
          <HighlightText text="Recursos" highlight="Recursos" color="primary" />
          y <HighlightText text="Referencias" highlight="Referencias" color="warning" />
        </h1>
        <p className="hero-subtitle">{textosExplicativos.heroSubtitle}</p>
        <div className="hero-badges">
          <Badge text="📚 30+ recursos" variant="info" />
          <Badge text="🔗 Enlaces útiles" variant="success" />
          <Badge text="📄 Cheat Sheet" variant="warning" />
        </div>
      </div>

      {/* Cheat Sheet */}
      <Card title="📄 Cheat Sheet - Los 10 conceptos" variant="primary">
        <div className="cheatsheet-container">
          <div className="cheatsheet-preview">
            <pre className="cheatsheet-texto">{cheatSheet.substring(0, 500)}...</pre>
          </div>
          <div className="cheatsheet-actions">
            <Button onClick={handleCopyCheatSheet} variant="primary" size="large">
              {copied ? '✅ ¡Copiado!' : '📋 Copiar Cheat Sheet completo'}
            </Button>
            <p className="cheatsheet-nota">
              💡 {textosExplicativos.cheatsheetNota}
            </p>
          </div>
        </div>
      </Card>

      <Divider text="🔗 Recursos por categoría" />

      {/* Recursos por categoría */}
      {recursos.map((categoria, idx) => (
        <div key={idx} className="categoria-recursos">
          <h2>{categoria.category}</h2>
          <Grid columns={3} gap="medium">
            {categoria.items.map((item, itemIdx) => (
              <Card key={itemIdx} title={`${item.icon} ${item.name}`} variant="primary">
                <p>{item.description}</p>
                <div className="recurso-link">
                  <QRCode url={item.url} size={100} caption="" />
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="link-directo">
                    🔗 {item.url.replace('https://', '').substring(0, 40)}...
                  </a>
                </div>
              </Card>
            ))}
          </Grid>
          {idx < recursos.length - 1 && <Divider variant="light" spacing="small" />}
        </div>
      ))}

      {/* QR principal del taller */}
      <Card className="qr-principal">
        <div className="qr-principal-content">
          <div className="qr-principal-info">
            <h3>{textosExplicativos.qrPrincipalTitulo}</h3>
            <p>{textosExplicativos.qrPrincipalDescripcion}</p>
            <p className="qr-note">{textosExplicativos.qrPrincipalNota}</p>
          </div>
          <div className="qr-principal-codigo">
            <QRCode 
              url={tallerUrls.github} 
              size={160}
              caption={tallerUrls.github.replace('https://', '')}
            />
          </div>
        </div>
      </Card>

      {/* Código de ejemplo rápido */}
      <Card title={textosExplicativos.codigoEjemploTitulo} variant="primary">
        <div className="codigo-ejemplo">
          <div className="codigo-header">
            <span className="codigo-icon">🦙</span>
            <span>Ollama + Python</span>
          </div>
          <pre className="codigo-block">{codigoEjemploLocal}</pre>
        </div>
      </Card>

      {/* Cierre */}
      <Card className="frase-final">
        <div className="frase-centrada">
          <p className="frase-texto-grande">
            {textosExplicativos.fraseFinal}
          </p>
          <p className="frase-autor">
            {textosExplicativos.fraseAutor}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Recursos;