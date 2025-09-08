import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap"

gsap.registerPlugin(ScrollTrigger)

export default function About() {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })

    // Animación de entrada (0% - 50% del scroll)
    tl.from("#about-part-1", {
      y: -400,
      alpha: 0,
      duration: 1.5,
    })
    tl.from("#about-part-2", {
      y: 400,
      alpha: 0,
      duration: 1.5,
    }, "<")
    tl.from("#about-part-3", {
      y: -400,
      alpha: 0,
      duration: 1.5,
    }, "<")
    .from("#about-title", {
      alpha: 0,
      duration: 1.5,
    }, "<")

    // Pausa en el estado visible (50% - 60% del scroll)
    tl.to("#about-part-1", {
      y: 0,
      alpha: 1,
      duration: 0.5,
    })
    .to("#about-part-3", {
      y: 0,
      alpha: 1,
      duration: 0.5,
    })

    // Animación de salida (60% - 100% del scroll)
    tl.to("#about-part-1", {
      y: 400,
      alpha: 0,
      duration: 1.5,
    })
    tl.to("#about-part-2", {
      y: -400,
      alpha: 0,
      duration: 1.5,
    }, "<")
    tl.to("#about-part-3", {
      y: 400,
      alpha: 0,
      duration: 1.5,
    }, "<")
    .to("#about-title", {
      alpha: 0,
      duration: 1.5,
    }, "<")

  })


  return (
    <section id="about-section" className="relative h-screen flex flex-row my-2 px-14 overflow-hidden select-none">
      <div className="absolute inset-0 w-full h-full grid place-content-center">
        <div id="about-title" className="font-family-oswald text-[14rem] line-through z-10">About</div>
      </div>
      <div className="flex-1 px-8 pb-5 overflow-hidden">
        <div id="about-part-1" className="h-full flex flex-col">
          <div className="p-3 text-balance">
            <p className="font-family-lato mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet saepe beatae quasi nemo. Mollitia eum quo temporibus illum, cum laboriosam harum ab quis. Molestias aut deserunt similique ipsa nostrum impedit?</p>
          </div>
          <div className="w-full h-full -z-10 contrast-150">
            <img src="../../images/part-1-about.jpg" className="object-cover w-full h-full grayscale" />
          </div>
        </div>
      </div>
      <div className="flex-1 px-8 overflow-hidden">
        <div id="about-part-2" className="h-full relative">
          <div className="absolute top-0 left-0 w-full h-full -z-10 contrast-150">
            <img src="../../images/part-2-about.jpg" className="object-cover w-full h-full grayscale" />
          </div>
        </div>
      </div>
      <div className="flex-1 px-8 pb-5 overflow-hidden">
        <div id="about-part-3" className="h-full flex flex-col">
          <div className="p-3 text-balance">
            <p className="font-family-lato mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet saepe beatae quasi nemo. Mollitia eum quo temporibus illum, cum laboriosam harum ab quis. Molestias aut deserunt similique ipsa nostrum impedit?</p>
          </div>
          <div className="w-full h-full -z-10 contrast-150">
            <img src="../../images/part-3-about.jpg" className="object-cover w-full h-full grayscale" />
          </div>
        </div>
      </div>
    </section>
  )
}
