import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Physics2DPlugin } from 'gsap/Physics2DPlugin';

// Registrar el plugin
gsap.registerPlugin(Physics2DPlugin);

const InkButton = ({ 
  children = "Click Me!", 
  className = "",
  ballCursorRef = null,
  // Configuración de colores (invertidos por defecto)
  initialBgColor = "white",
  initialTextColor = "black", 
  hoverBgColor = "black",
  hoverTextColor = "white",
  particleColor = "black"
}) => {
  const buttonRef = useRef(null);
  const buttonHoverRef = useRef(null);
  const buttonTextRef = useRef(null);
  const buttonContainerRef = useRef(null);
  
  const [_inkParticles, setInkParticles] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const currentTimelineRef = useRef(null);
  const particleCleanupTimeoutRef = useRef(null);

  // Función para crear partículas de tinta con Physics2D
  const createInkParticles = (startX, startY, count = 15) => {
    const particles = [];

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'ink-particle';

      // Tamaño aleatorio para las partículas
      const size = Math.random() * 8 + 4;
      
      // Configurar estilos directamente como en el HTML que funciona
      particle.style.position = 'absolute';
      particle.style.backgroundColor = particleColor;
      particle.style.borderRadius = '50%';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '6';
      particle.style.opacity = '0.8';
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = startX + 'px';
      particle.style.top = startY + 'px';

      buttonContainerRef.current.appendChild(particle);
      particles.push(particle);

      // Physics2D con parámetros aleatorios para simular gravedad 
      const angle = Math.random() * 360;
      const velocity = Math.random() * 150 + 50;
      const gravity = Math.random() * 200 + 100;
      const friction = Math.random() * 0.05 + 0.02;

      gsap.to(particle, {
        duration: 1.5,
        physics2D: {
          velocity: velocity,
          angle: angle,
          gravity: gravity,
          friction: friction
        },
        scale: Math.random() * 2 + 1,
        opacity: 0,
        ease: "none"
      });
    }

    return particles;
  };

  // Función para limpiar partículas
  const cleanupParticles = () => {
    // Limpiar partículas del estado
    setInkParticles(prevParticles => {
      prevParticles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
      return [];
    });

    // Limpiar timeout si existe
    if (particleCleanupTimeoutRef.current) {
      clearTimeout(particleCleanupTimeoutRef.current);
      particleCleanupTimeoutRef.current = null;
    }
  };

  // Función para resetear el estado del botón
  const resetButtonState = () => {
    // Cancelar timeline actual si existe
    if (currentTimelineRef.current) {
      currentTimelineRef.current.kill();
      currentTimelineRef.current = null;
    }

    // Limpiar partículas
    cleanupParticles();

    // Resetear propiedades inmediatamente
    gsap.set(buttonHoverRef.current, {
      left: '50%',
      top: '50%',
      scale: 1,
      backgroundColor: 'transparent'
    });

    gsap.set(buttonTextRef.current, {
      color: initialTextColor
    });

    if (ballCursorRef && ballCursorRef.current) {
      gsap.set(ballCursorRef.current, {
        alpha: 1
      });
    }
  };

  const handleMouseEnter = (e) => {
    // Prevenir múltiples ejecuciones rápidas
    if (isHovering) return;
    setIsHovering(true);

    // Cancelar cualquier animación anterior
    if (currentTimelineRef.current) {
      currentTimelineRef.current.kill();
    }

    // Limpiar partículas anteriores
    cleanupParticles();

    // Obtener las dimensiones y posición del botón
    const rect = buttonRef.current.getBoundingClientRect();
    const containerRect = buttonContainerRef.current.getBoundingClientRect();

    // Calcular la posición relativa del mouse dentro del botón
    const relativeX = ((e.clientX - rect.left) / rect.width) * 100;
    const relativeY = ((e.clientY - rect.top) / rect.height) * 100;

    // Posición absoluta para las partículas dentro del container
    const particleStartX = e.clientX - containerRect.left;
    const particleStartY = e.clientY - containerRect.top;

    // Crear partículas de tinta con Physics2D
    const particles = createInkParticles(particleStartX, particleStartY, 12);
    setInkParticles(prevParticles => [...prevParticles, ...particles]);

    // Posicionar el button-hover en el punto de entrada
    gsap.set(buttonHoverRef.current, {
      left: relativeX + '%',
      top: relativeY + '%',
      scale: 0.1
    });

    // Crear nueva timeline
    currentTimelineRef.current = gsap.timeline();

    // Efecto de impacto inicial con las partículas
    currentTimelineRef.current.to(buttonHoverRef.current, {
      scale: 3,
      duration: 0.1,
      backgroundColor: hoverBgColor,
      ease: "power3.out"
    })
      // Expansión principal más fluida
      .to(buttonHoverRef.current, {
        scale: 20,
        duration: 0.6,
        ease: "power2.out"
      });

    if (ballCursorRef && ballCursorRef.current) {
      currentTimelineRef.current.to(ballCursorRef.current, {
        alpha: 0,
        duration: 0.1
      }, "0");
    }

    currentTimelineRef.current.to(buttonTextRef.current, {
        color: hoverTextColor,
        fontStyle: 'italic',
        duration: 0.4,
      }, "0.2");

    // Limpiar partículas después de la animación (solo si sigue hovering)
    particleCleanupTimeoutRef.current = setTimeout(() => {
      if (isHovering) {
        cleanupParticles();
      }
    }, 2000);
  };

  const handleMouseLeave = (e) => {
    // Marcar que ya no está hovering
    setIsHovering(false);

    // Cancelar timeline anterior si existe
    if (currentTimelineRef.current) {
      currentTimelineRef.current.kill();
    }

    // Obtener las dimensiones y posición del botón para el punto de salida
    const rect = buttonRef.current.getBoundingClientRect();
    const containerRect = buttonContainerRef.current.getBoundingClientRect();
    const relativeX = ((e.clientX - rect.left) / rect.width) * 100;
    const relativeY = ((e.clientY - rect.top) / rect.height) * 100;

    // Crear partículas de "absorción" con Physics2D inverso
    const particleStartX = e.clientX - containerRect.left;
    const particleStartY = e.clientY - containerRect.top;

    // Limpiar partículas existentes primero
    cleanupParticles();

    // Crear menos partículas para el efecto de salida
    const exitParticles = createInkParticles(particleStartX, particleStartY, 8);

    // Modificar las partículas de salida para que tengan un comportamiento diferente
    exitParticles.forEach(particle => {
      gsap.set(particle, {
        backgroundColor: '#333',
        opacity: 0.4
      });
    });

    // Crear nueva timeline para salida
    currentTimelineRef.current = gsap.timeline();

    // Contraer hacia el punto de salida con efecto de absorción
    currentTimelineRef.current.to(buttonHoverRef.current, {
      left: relativeX + '%',
      top: relativeY + '%',
      scale: 0.1,
      duration: 0.4,
      backgroundColor: 'transparent',
      ease: "power2.in"
    });

    if (ballCursorRef && ballCursorRef.current) {
      currentTimelineRef.current.to(ballCursorRef.current, {
        alpha: 1,
        duration: 0.1
      }, "0");
    }

    currentTimelineRef.current.to(buttonTextRef.current, {
        color: initialTextColor,
        duration: 0.3,
        fontStyle: 'normal'
      }, "0");

    // Resetear la posición al centro después de la animación
    currentTimelineRef.current.set(buttonHoverRef.current, {
      left: '50%',
      top: '50%',
      scale: 1
    });

    // Limpiar partículas de salida
    particleCleanupTimeoutRef.current = setTimeout(() => {
      exitParticles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    }, 1500);
  };

  const handleMouseOver = () => {
    // Verificar si el estado está inconsistente y corregirlo
    const currentColor = getComputedStyle(buttonTextRef.current).color;
    const expectedInitialColor = initialTextColor === 'white' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)';
    
    if (!isHovering && buttonTextRef.current && currentColor !== expectedInitialColor) {
      resetButtonState();
    }
  };

  // Cleanup al desmontar el componente
  useEffect(() => {
    return () => {
      if (currentTimelineRef.current) {
        currentTimelineRef.current.kill();
      }
      if (particleCleanupTimeoutRef.current) {
        clearTimeout(particleCleanupTimeoutRef.current);
      }
      cleanupParticles();
    };
  }, []);

  return (
    <div 
      ref={buttonContainerRef}
      className={`relative rounded-xl flex justify-center items-center overflow-hidden bg-transparent ${className}`}
    >
      <button
        ref={buttonRef}
        className="px-6 py-1 rounded-xl border-none relative flex items-center justify-center z-10 hover:cursor-crosshair whitespace-nowrap"
        style={{ backgroundColor: initialBgColor }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
      >
        <div
          ref={buttonHoverRef}
          className="absolute bg-transparent pointer-events-none rounded-full z-[5] p-1 top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-[10px] h-[10px]"
        />
        <span
          ref={buttonTextRef}
          className="relative z-20"
          style={{ color: initialTextColor }}
        >
          {children}
        </span>
      </button>
    </div>
  );
};

export default InkButton;
