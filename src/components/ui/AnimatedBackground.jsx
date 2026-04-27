import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles = [];
    let connections = [];
    let animationId;
    
    // Configuración
    const PARTICLE_COUNT = 80;
    const PARTICLE_SIZE = 2;
    const CONNECTION_DISTANCE = 150;
    const MOVEMENT_SPEED = 0.5;
    
    // Colores basados en variables CSS
    const getColors = () => {
      const styles = getComputedStyle(document.documentElement);
      return {
        primary: styles.getPropertyValue('--color-primary').trim() || '#3b82f6',
        surface: styles.getPropertyValue('--color-surface').trim() || '#1e293b',
        text: styles.getPropertyValue('--color-text').trim() || '#f8fafc',
      };
    };
    
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * MOVEMENT_SPEED;
        this.vy = (Math.random() - 0.5) * MOVEMENT_SPEED;
        this.size = Math.random() * PARTICLE_SIZE + 1;
        this.originalX = x;
        this.originalY = y;
        this.waveOffset = Math.random() * Math.PI * 2;
      }
      
      update(time) {
        // Movimiento ondulatorio suave
        this.x = this.originalX + Math.sin(time * 0.001 + this.waveOffset) * 20;
        this.y = this.originalY + Math.cos(time * 0.0008 + this.waveOffset) * 20;
        
        // Rebote en bordes (efecto suave)
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }
      
      draw(ctx, colors) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = colors.primary;
        ctx.fill();
        ctx.shadowBlur = 8;
        ctx.shadowColor = colors.primary;
        ctx.shadowBlur = 0;
      }
    }
    
    function initParticles() {
      particles = [];
      const cols = Math.ceil(Math.sqrt(PARTICLE_COUNT));
      const rows = Math.ceil(PARTICLE_COUNT / cols);
      const cellW = width / cols;
      const cellH = height / rows;
      
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = col * cellW + cellW / 2;
        const y = row * cellH + cellH / 2;
        particles.push(new Particle(x, y));
      }
    }
    
    function drawConnections(colors, time) {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < CONNECTION_DISTANCE) {
            const opacity = (1 - distance / CONNECTION_DISTANCE) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = colors.primary;
            ctx.globalAlpha = opacity;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    }
    
    function drawGrid(colors) {
      const gridSize = 50;
      ctx.beginPath();
      ctx.strokeStyle = colors.primary;
      ctx.globalAlpha = 0.05;
      ctx.lineWidth = 0.5;
      
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }
    
    function animate(time) {
      if (!ctx) return;
      
      const colors = getColors();
      ctx.clearRect(0, 0, width, height);
      
      // Fondo semi-transparente para efecto estela
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, width, height);
      
      // Dibujar grid
      drawGrid(colors);
      
      // Actualizar y dibujar partículas
      particles.forEach(particle => {
        particle.update(time);
        particle.draw(ctx, colors);
      });
      
      // Dibujar conexiones
      drawConnections(colors, time);
      
      animationId = requestAnimationFrame(animate);
    }
    
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    }
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const startTime = performance.now();
    animate(startTime);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="animated-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default AnimatedBackground;