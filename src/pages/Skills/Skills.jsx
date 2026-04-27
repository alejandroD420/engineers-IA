import React, { useState } from 'react';
import { 
  Card, 
  Badge, 
  Grid, 
  HighlightText, 
  Button,
  CodeBlock,
  QRCode
} from '../../components/ui';
import { 
  habilidadMd,
  skillBasicoMd,
  estructuraSkills,
  openaiYaml,
  ejemploFunctionCalling,
  recursosUrls,
  textosExplicativos,
  skillTipo1Ventajas,
  skillTipo2Ventajas,
  skillTipo2Desventajas
} from './utils';
import './Skills.css';

const Skills = () => {
  const [showSkill1Detail, setShowSkill1Detail] = useState(false);
  const [showSkill2Detail, setShowSkill2Detail] = useState(false);
  const [showSkillStructure, setShowSkillStructure] = useState(false);

  return (
    <div className="page-skills">
      {/* Hero */}
      <div className="hero">
        <h1>
          <HighlightText text="Skills" highlight="Skills" color="primary" />
          : Los <HighlightText text="dos tipos" highlight="dos tipos" color="warning" />
        </h1>
        <p className="hero-subtitle">
          {textosExplicativos.heroSubtitle}
        </p>
        <div className="hero-badges">
          <Badge text="📄 Skill de Instrucción" variant="info" />
          <Badge text="⚡ Function Calling" variant="warning" />
          <Badge text="🏗️ Skill estructurada" variant="success" />
        </div>
      </div>

      {/* Comparación de los dos tipos */}
      <Grid columns={2} gap="large">
        {/* Skill Tipo 1 */}
        <Card title="📄 Skill Tipo 1: Prompt Skill (Básico)" variant="primary">
          <div className="skill-header">
            <span className="skill-icon">📄</span>
            <Badge text="Estandariza comportamiento" variant="info" />
          </div>
          <p className="skill-descripcion">{textosExplicativos.skillTipo1Desc}</p>
          <div className="skill-ventajas">
            <p><strong>✅ Ventajas:</strong></p>
            <ul>
              {skillTipo1Ventajas.map((ventaja, idx) => (
                <li key={idx}>{ventaja}</li>
              ))}
            </ul>
          </div>
          <Button 
            variant="secondary" 
            size="small"
            onClick={() => setShowSkill1Detail(!showSkill1Detail)}
          >
            {showSkill1Detail ? '📖 Ocultar ejemplo' : '📝 Ver ejemplo →'}
          </Button>
          {showSkill1Detail && (
            <div className="skill-ejemplo">
              <p className="ejemplo-titulo">📄 Ejemplo de `SKILL.md` básico:</p>
              <CodeBlock code={skillBasicoMd} language="markdown" />
            </div>
          )}
        </Card>

        {/* Skill Tipo 2 */}
        <Card title="⚡ Skill Tipo 2: Function Calling" variant="primary">
          <div className="skill-header">
            <span className="skill-icon">⚡</span>
            <Badge text="Hace cosas reales" variant="warning" />
          </div>
          <p className="skill-descripcion">{textosExplicativos.skillTipo2Desc}</p>
          <div className="skill-ventajas">
            <p><strong>✅ Ventajas:</strong></p>
            <ul>
              {skillTipo2Ventajas.map((ventaja, idx) => (
                <li key={idx}>{ventaja}</li>
              ))}
            </ul>
          </div>
          <div className="skill-desventajas">
            <p><strong>⚠️ Importante:</strong></p>
            <ul>
              {skillTipo2Desventajas.map((desventaja, idx) => (
                <li key={idx}>{desventaja}</li>
              ))}
            </ul>
          </div>
          <Button 
            variant="secondary" 
            size="small"
            onClick={() => setShowSkill2Detail(!showSkill2Detail)}
          >
            {showSkill2Detail ? '📖 Ocultar ejemplo' : '⚡ Ver ejemplo →'}
          </Button>
          {showSkill2Detail && (
            <div className="skill-ejemplo">
              <p className="ejemplo-titulo">🤖 Pregunta: "Procesa el archivo error.log"</p>
              <p className="ejemplo-subtitulo">La IA devuelve este JSON:</p>
              <CodeBlock code={ejemploFunctionCalling} language="json" />
              <p className="ejemplo-nota">
                💡 <strong>TÚ</strong> ejecutas la función `procesar_log` y le devuelves el resultado.
              </p>
            </div>
          )}
        </Card>
      </Grid>

      {/* Estructura avanzada de skills */}
      <Card title="🏗️ Skill Avanzada: Estructura skills.sh" variant="primary">
        <div className="skill-advanced">
          <p className="skill-advanced-desc">
            Según la <strong>documentación de skills.sh</strong> (OpenAI/Agent Skills), 
            una skill profesional tiene esta estructura:
          </p>
          
          <div className="estructura-card">
            <div className="estructura-header">
              <span className="estructura-icon">📁</span>
              <span className="estructura-nombre">my-skill/</span>
              <Badge text="Carpeta raíz" variant="info" size="small" />
            </div>
            <div className="estructura-arbol">
              <div className="estructura-item principal">
                <span className="estructura-archivo">📄 SKILL.md</span>
                <span className="estructura-obligatorio">📌 OBLIGATORIO</span>
                <p className="estructura-desc">Instrucciones + metadatos (nombre, descripción, versión)</p>
              </div>
              <div className="estructura-item opcional">
                <span className="estructura-archivo">📁 scripts/</span>
                <span className="estructura-opcional">Opcional</span>
                <p className="estructura-desc">Código ejecutable (Python, JS, bash)</p>
              </div>
              <div className="estructura-item opcional">
                <span className="estructura-archivo">📁 references/</span>
                <span className="estructura-opcional">Opcional</span>
                <p className="estructura-desc">Documentación de referencia</p>
              </div>
              <div className="estructura-item opcional">
                <span className="estructura-archivo">📁 assets/</span>
                <span className="estructura-opcional">Opcional</span>
                <p className="estructura-desc">Plantillas, recursos, assets</p>
              </div>
              <div className="estructura-item opcional">
                <span className="estructura-archivo">📁 agents/</span>
                <span className="estructura-opcional">Opcional</span>
                <p className="estructura-desc">Configuración del agente (openai.yaml)</p>
              </div>
            </div>
          </div>

          <button 
            className="ver-ejemplo-btn"
            onClick={() => setShowSkillStructure(!showSkillStructure)}
          >
            {showSkillStructure ? '📖 Ocultar ejemplos' : '📝 Ver ejemplos de archivos →'}
          </button>

          {showSkillStructure && (
            <div className="estructura-ejemplos">
              <div className="ejemplo-archivo">
                <p className="ejemplo-titulo">📄 SKILL.md (con metadatos)</p>
                <CodeBlock code={habilidadMd} language="markdown" />
              </div>
              <div className="ejemplo-archivo">
                <p className="ejemplo-titulo">📁 agents/openai.yaml</p>
                <CodeBlock code={openaiYaml} language="yaml" />
              </div>
              <div className="ejemplo-nota">
                <p>💡 <strong>¿Cómo instalar una skill?</strong></p>
                <code className="comando-instalacion">npx skills add vercel-labs/agent-skills</code>
                <p className="ejemplo-nota-texto">
                  El leaderboard de skills está en <strong>skills.sh</strong> - ¡puedes publicar tus propias skills!
                </p>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* El mantra clave */}
      <Card className="mantra-card">
        <div className="mantra-content">
          <span className="mantra-icon">🔑</span>
          <div className="mantra-texto">
            <h3>El mantra de Skills</h3>
            <p className="mantra-frase">{textosExplicativos.mantra}</p>
          </div>
        </div>
      </Card>

      {/* Flujo de ejecución */}
      <h2>🔄 Flujo de ejecución</h2>
      <Grid columns={2} gap="large">
        <Card title="📄 Skill de Instrucción" variant="primary">
          <div className="flujo-skill">
            <div className="flujo-paso">
              <span className="flujo-numero">1</span>
              <span>Escribes SKILL.md</span>
            </div>
            <div className="flujo-flecha">↓</div>
            <div className="flujo-paso">
              <span className="flujo-numero">2</span>
              <span>La IA lee las instrucciones</span>
            </div>
            <div className="flujo-flecha">↓</div>
            <div className="flujo-paso resultado">
              <span>✅ IA cambia su comportamiento</span>
            </div>
          </div>
        </Card>

        <Card title="⚡ Function Calling" variant="primary">
          <div className="flujo-skill">
            <div className="flujo-paso">
              <span className="flujo-numero">1</span>
              <span>Usuario hace una pregunta</span>
            </div>
            <div className="flujo-flecha">↓</div>
            <div className="flujo-paso">
              <span className="flujo-numero">2</span>
              <span>IA devuelve JSON con función</span>
            </div>
            <div className="flujo-flecha">↓</div>
            <div className="flujo-paso">
              <span className="flujo-numero">3</span>
              <span><strong>TÚ</strong> ejecutas la función</span>
            </div>
            <div className="flujo-flecha">↓</div>
            <div className="flujo-paso resultado">
              <span>✅ IA responde con datos reales</span>
            </div>
          </div>
        </Card>
      </Grid>

      {/* Recursos */}
      <Card title="📚 Recursos" variant="primary">
        <div className="recursos-skills">
          <div className="recurso-skill">
            <QRCode 
              url={recursosUrls.agentSkills}
              size={130}
              caption="Agent Skills - OpenAI Developers"
            />
          </div>
          <div className="recurso-texto-skill">
            <h4>🎯 Frase para recordar</h4>
            <p className="frase-destacada-skill">
              "Skills = <strong>Reutilizables</strong><br />
              Skills = <strong>Versionables</strong><br />
              Skills = <strong>El superpoder de la IA</strong>"
            </p>
          </div>
          <div className="recurso-skill">
            <QRCode 
              url={recursosUrls.functionCalling}
              size={130}
              caption="OpenAI Function Calling"
            />
          </div>
        </div>
      </Card>

      {/* Frase final */}
      <Card className="frase-final">
        <div className="frase-centrada">
          <p className="frase-texto-grande">
            {textosExplicativos.fraseFinal}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Skills;