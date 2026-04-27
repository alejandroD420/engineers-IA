import React, { useState } from "react";
import { Sidebar, Header } from "./components/layout";
import { ProgressBar, AnimatedBackground } from "./components/ui";
import Portada from "./pages/Portada";
import "./App.css";

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
  Recursos,
} from "./pages";

const workshopPages = [
  { id: 0, name: "Predicción", component: Prediccion },
  { id: 1, name: "Tokenización", component: Tokenizacion },
  { id: 2, name: "Embedding", component: Embedding },
  { id: 3, name: "Distancia Semántica", component: DistanciaSemantica },
  { id: 4, name: "Prompt", component: Prompt },
  { id: 5, name: "Temperature", component: Temperature },
  { id: 6, name: "Skills", component: Skills },
  { id: 7, name: "MCP", component: MCP },
  { id: 8, name: "Modelos Pequeños", component: ModelosPequenos },
  { id: 9, name: "¿Nos reemplazará?", component: Reemplazo },
  { id: 10, name: "Recursos", component: Recursos },
];

function App() {
  const [showWorkshop, setShowWorkshop] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleStart = () => {
    setShowWorkshop(true);
  };

  // Si no ha comenzado, mostrar portada
  if (!showWorkshop) {
    return (
      <div className="app-portada">
        <AnimatedBackground />
        <Portada onStart={handleStart} />
      </div>
    );
  }

  const CurrentComponent = workshopPages[currentPage].component;
  const mainContentClass = `main-content ${isSidebarCollapsed ? "sidebar-collapsed" : "sidebar-expanded"}`;

  return (
    <div className="app">
      <AnimatedBackground />

      <Sidebar
        pages={workshopPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onCollapse={setIsSidebarCollapsed}
      />

      <div className={mainContentClass}>
        <Header
          title={workshopPages[currentPage].name}
          currentPage={currentPage}
          totalPages={workshopPages.length}
        />
        <ProgressBar
          current={currentPage + 1}
          total={workshopPages.length}
          showPercentage={true}
        />
        <div className="page-container">
          <CurrentComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
