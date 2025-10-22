import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useMediaQuery } from "react-responsive"

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  useGSAP(() => {
    let endTrigger = isMobile ? "center bottom" : "bottom bottom"

    const tl = gsap.timeline({
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#services-section",
        start: "top bottom",
        end: endTrigger,
        scrub: true,
      }
    })

    tl
      .from("#services-text", {
        y: 200,
        alpha: 0,
        duration: 1.5,
      })

    if (!isMobile) {
      tl.from("#container-bars span", {
        x: 250,
        alpha: 0,
        stagger: 0.2,
        duration: 1.5,
      }, "<")
        .from("#container-bars img", {
          alpha: 0,
          duration: 1.5,
        }, "<")
    } else {
      tl.from("#container-bars img", {
        y: 200,
        alpha: 0,
        duration: 1.5,
      }, "<")
    }
  }, [])

  return (
    <section id="services-section" className="min-h-96 px-5 md:px-0 md:pl-5 overflow-hidden mb-0 mt-10 flex flex-col font-family-lato">
      <div className="relative flex-2 flex flex-col lg:flex-row gap-8">
        <div id="services-text" className="md:ml-10 flex-2 font-family-lato flex justify-center flex-col">
          <h2 className="text-7xl md:text-9xl font-family-oswald line-through">Servicios</h2>
          <div className="max-w-4xl md:mt-10">
            <div className="flex flex-col md:flex-row gap-4 items-center mt-3">
              <div className="flex-1 border-t-8 md:border-t-8 md:border-r-8 p-3 h-50 w-full">
                <svg className="size-9 mb-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 10.5 8 13l2 2.5" /><path d="m14 10.5 2 2.5-2 2.5" /><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" /></svg>
                <div>
                  <p className="font-extrabold pb-3">Desarrollo Web Frontend</p>
                  <p className="text-sm">Experiencias web modernas, rápidas y animadas con tecnologías actuales y GSAP.</p>
                </div>
              </div>
              <div className="flex-1 border-t-8 md:border-r-8 md:border-l-8 p-3 h-50 w-full">
                <svg className="size-9 mb-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 21h1"/><path d="M21 14v1"/><path d="M21 19a2 2 0 0 1-2 2"/><path d="M21 9v1"/><path d="M3 14v1"/><path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"/><path d="M3 9v1"/><path d="M5 21a2 2 0 0 1-2-2"/><path d="M9 21h1"/></svg>
                <div>
                  <p className="font-extrabold pb-3">Diseño UX/UI & Branding</p>
                  <p className="text-sm">Interfaces intuitivas y coherentes que reflejan tu identidad digital.</p>
                </div>
              </div>
              <div className="flex-1 border-t-8 md:border-l-8 p-3 h-50 w-full">
                <svg className="size-9 mb-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z"/><path d="M7 21h10"/><rect width="20" height="14" x="2" y="3" rx="2"/></svg>
                <div>
                  <p className="font-extrabold pb-3">Estrategia Digital</p>
                  <p className="text-sm">Consultoría para optimizar, posicionar y potenciar tu presencia online.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div id="container-bars" className="relative flex justify-center -z-10 flex-1 pointer-events-none overflow-hidden">
          <span className="hidden lg:block absolute bottom-0 right-0 top-0 h-10 bg-black w-lg"></span>
          <span className="hidden lg:block absolute transform top-4/11 right-0 h-27 bg-black w-md"></span>
          <span className="hidden lg:block absolute bottom-0 right-0 h-6 bg-black w-lg"></span>
          <div className="relative lg:absolute bottom-0 right-0 object-cover">
            <img src="../../images/face-services.png" className="grayscale mask-b-from-60%" />
          </div>
        </div>
      </div>
    </section >
  )
}
