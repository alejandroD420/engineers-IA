import React, { useState, useEffect } from 'react';
import { 
  FiMenu, 
  FiX, 
  FiChevronRight,
  FiChevronLeft,
  FiCpu,
  FiHash,
  FiGrid,
  FiMap,
  FiEdit3,
  FiThermometer,
  FiTool,
  FiLink,
  FiBox,
  FiUsers,
  FiBookmark
} from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = ({ pages, currentPage, setCurrentPage, onCollapse }) => {
  // Estado para sidebar colapsada
  const [isCollapsed, setIsCollapsed] = useState(false);
  // Estado para móvil (sidebar flotante)
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // NOTIFICAR AL PADRE CUANDO CAMBIA isCollapsed
  useEffect(() => {
    if (onCollapse) {
      onCollapse(isCollapsed);
    }
  }, [isCollapsed, onCollapse]);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Iconos para cada página
  const pageIcons = [
    <FiCpu size={20} />,
    <FiHash size={20} />,
    <FiGrid size={20} />,
    <FiMap size={20} />,
    <FiEdit3 size={20} />,
    <FiThermometer size={20} />,
    <FiTool size={20} />,
    <FiLink size={20} />,
    <FiBox size={20} />,
    <FiUsers size={20} />,
    <FiBookmark size={20} />,
  ];

  const toggleSidebar = () => {
    if (isMobile) {
      setIsMobileOpen(!isMobileOpen);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  const closeMobile = () => setIsMobileOpen(false);

  const handlePageChange = (idx) => {
    setCurrentPage(idx);
    if (isMobile) closeMobile();
  };

  return (
    <>
      <button 
        className={`sidebar-toggle ${isCollapsed && !isMobile ? 'collapsed' : ''}`} 
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {isMobile ? (
          isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />
        ) : (
          isCollapsed ? <FiMenu size={24} /> : <FiChevronLeft size={24} />
        )}
      </button>
      
      <aside 
        className={`
          sidebar 
          ${isCollapsed && !isMobile ? 'collapsed' : ''} 
          ${isMobileOpen && isMobile ? 'mobile-open' : ''}
        `}
      >
        <div className="sidebar-header">
          <div className="sidebar-logo">
            {isCollapsed && !isMobile ? (
              <span className="logo-mini">🧠</span>
            ) : (
              <>
                <span className="logo-icon">🧠</span>
                <div className="logo-text">
                  <h2>Engineers IA</h2>
                  <p>Taller para ingenieros</p>
                </div>
              </>
            )}
          </div>
          
          {!isMobile && (
            <button 
              className="collapse-btn"
              onClick={() => setIsCollapsed(!isCollapsed)}
              aria-label="Collapse sidebar"
            >
              {isCollapsed ? <FiChevronRight size={18} /> : <FiChevronLeft size={18} />}
            </button>
          )}
        </div>
        
        <nav className="sidebar-nav">
          {pages.map((page, idx) => (
            <button
              key={page.id}
              className={`nav-item ${currentPage === idx ? 'active' : ''}`}
              onClick={() => handlePageChange(idx)}
              title={isCollapsed && !isMobile ? page.name : ''}
            >
              <span className="nav-icon">{pageIcons[idx]}</span>
              {(!isCollapsed || isMobile) && (
                <>
                  <span className="nav-number">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="nav-name">{page.name}</span>
                </>
              )}
              {currentPage === idx && (!isCollapsed || isMobile) && (
                <FiChevronRight className="nav-active-icon" />
              )}
            </button>
          ))}
        </nav>
        
        <div className="sidebar-footer">
          {(!isCollapsed || isMobile) ? (
            <>
              <div className="footer-progress">
                <div className="progress-dots">
                  {pages.map((_, idx) => (
                    <span 
                      key={idx} 
                      className={`dot ${currentPage === idx ? 'active' : ''}`}
                    />
                  ))}
                </div>
                <span>{currentPage + 1} / {pages.length}</span>
              </div>
              <p className="footer-text">10 conceptos • 1 hora</p>
            </>
          ) : (
            <div className="footer-mini">
              <span>{currentPage + 1}/{pages.length}</span>
            </div>
          )}
        </div>
      </aside>

      {isMobile && isMobileOpen && (
        <div className="sidebar-overlay" onClick={closeMobile} />
      )}
    </>
  );
};

export default Sidebar;