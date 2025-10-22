import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export default function Portfolio() {
  const projectRefs = useRef([])

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#portfolio-section",
        start: "top bottom",
        end: "center bottom",
        scrub: true,
      },
      ease: "power4.out",
    })

    tl
      .from('#portfolio-title', {
        y: 200,
        alpha: 0,
        duration: 1.5,
      })
      .from('.project-card', {
        y: 200,
        alpha: 0,
        duration: 1.5,
      }, "<")

    // Configurar animaciones de hover para cada proyecto
    projectRefs.current.forEach((projectRef) => {
      if (!projectRef) return

      const content = projectRef.querySelector('#project-description')

      // Estado inicial más suave
      gsap.set(content, { filter: "blur(8px)", alpha: 0.7 })

      // Eventos de hover
      const handleMouseEnter = () => {
        gsap.to(content, {
          filter: "blur(0px)",
          alpha: 1,
          duration: 0.6,
          ease: "power4.out"
        })
      }

      const handleMouseLeave = () => {
        gsap.to(content, {
          filter: "blur(8px)",
          alpha: 0.7,
          duration: 0.5,
          ease: "power4.out"
        })
      }

      projectRef.addEventListener('mouseenter', handleMouseEnter)
      projectRef.addEventListener('mouseleave', handleMouseLeave)

      // Cleanup
      return () => {
        projectRef.removeEventListener('mouseenter', handleMouseEnter)
        projectRef.removeEventListener('mouseleave', handleMouseLeave)
      }
    })
  }, [])

  const addToRefs = (el, index) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current[index] = el
    }
  }

  const projects = [
    {
      title: "Milén Arquitectura",
      description: "Proyecto en desarrollo para un estudio de arquitectura que combina un diseño minimalista con animaciones de scroll de estilo urbano. Su objetivo es transmitir la esencia moderna y profesional del estudio, generando una experiencia fluida que refleja su enfoque en la forma y el espacio. El valor agregado está en la integración entre estética arquitectónica y movimiento sutil, logrando una presencia digital elegante y distintiva.",
      url: "https://milen-arquitectura-web.vercel.app/",
      status: "En construcción"
    },
    {
      title: "Skyline Landing Page",
      description: "Demo interactiva que presenta una landing page con animación de scroll sobre un modelo 3D del Nissan GTR Skyline. Su objetivo es mostrar el potencial de las animaciones web aplicadas a experiencias visuales inmersivas. El proyecto destaca por su impacto visual y por la integración fluida entre diseño, animación y rendimiento, demostrando innovación y dominio técnico en experiencias digitales.",
      url: "https://skyline-landing-page-kappa.vercel.app/",
      status: "En construcción"
    }
  ]

  return (
    <section id="portfolio-section" className="min-h-screen px-5 pt-8 md:px-17 md:pt-20 flex flex-col">
      <h2 id="portfolio-title" className="text-7xl md:text-9xl font-family-oswald line-through mb-10 lg:mb-16">
        Portafolio
      </h2>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => addToRefs(el, index)}
            className="project-card border-8 border-black overflow-hidden bg-white"
          >
            <div className="block h-full font-family-lato">
              <div className="project-content p-6 lg:p-8 h-full flex flex-col">
                <div className="flex flex-col md:flex-row items-start justify-between mb-4">
                  <h3 id="project-title" className="text-2xl lg:text-3xl font-bold tracking-wide">
                    {project.title}
                  </h3>
                  <span className="text-xs lg:text-sm px-3 py-1 bg-black text-white whitespace-nowrap mt-4 md:mt-0 md:ml-4">
                    {project.status}
                  </span>
                </div>

                <p id="project-description" className="text-sm lg:text-base leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <a href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs lg:text-sm hover:underline">
                    Ver proyecto →
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}