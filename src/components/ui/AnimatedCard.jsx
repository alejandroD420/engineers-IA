import React, { useState, useEffect } from 'react';
import './AnimatedCard.css';

const AnimatedCard = ({ title, children, icon, variant = 'default', animation = 'float' }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`animated-card card-${variant} animate-${animation} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="animated-card-glow" />
      <div className="animated-card-content">
        {title && (
          <div className="animated-card-header">
            {icon && <span className="animated-card-icon">{icon}</span>}
            <h3>{title}</h3>
          </div>
        )}
        <div className="animated-card-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;