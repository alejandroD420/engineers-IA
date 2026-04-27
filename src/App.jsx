import React, { useState } from 'react';
import { Sidebar, Header } from './components/layout';
import { ProgressBar, AnimatedBackground } from './components/ui';
import './App.css';

// Import all pages
import {
  Prediccion,
  Tokenizacion,
  Embedding,
  DistanciaSemantica,
  Prompt,
  Temperature,
  Skills,
  MCP,
  ModelosPequenos,
  Reemplazo,
  Recursos
} from './pages';

const pages = [
  { id: 0, name: 'Predicción', component: Prediccion },
  { id: 1, name: 'Tokenización', component: Tokenizacion },
  { id: 2, name: 'Embedding', component: Embedding },
  { id: 3, name: 'Distancia Semántica', component: DistanciaSemantica },
  { id: 4, name: 'Prompt', component: Prompt },
  { id: 5, name: 'Temperature', component: Temperature },
  { id: 6, name: 'Skills', component: Skills },
  { id: 7, name: 'MCP', component: MCP },
  { id: 8, name: 'Modelos Pequeños', component: ModelosPequenos },
  { id: 9, name: '¿Nos reemplazará?', component: Reemplazo },
  { id: 10, name: 'Recursos', component: Recursos },
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const CurrentComponent = pages[currentPage].component;

  return (
    <div className="app">
      <AnimatedBackground />
      
      <Sidebar 
        pages={pages} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        onCollapse={setIsSidebarCollapsed}  // ← AGREGAR ESTA LÍNEA
      />
      
      <main className={`main-content ${isSidebarCollapsed ? 'collapsed' : 'expanded'}`}>
        <Header 
          title={pages[currentPage].name} 
          currentPage={currentPage}
          totalPages={pages.length}
        />
        <ProgressBar current={currentPage + 1} total={pages.length} showPercentage={true} />
        <div className="page-container">
          <CurrentComponent />
        </div>
      </main>
    </div>
  );
}

export default App;