import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useMediaQuery } from "react-responsive"

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  useGSAP(() => {
    const tl = gsap.timeline({
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#services-section",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      }
    })

    tl
      .from("#services-section h2", {
        y: 200,
        alpha: 0,
        duration: 1.5,
      })
      .from("#services-section p", {
        y: 200,
        alpha: 0,
        duration: 1.5,
      }, "<")

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
    <section id="services-section" className="min-h-96 px-5 md:pl-5 overflow-hidden mb-0 mt-10 md:mt-30 md:mb-10 flex flex-col">
      <div className="relative flex-2 flex flex-col lg:flex-row gap-4">
        <div className="flex-1 font-family-lato flex justify-center flex-col">
          <h2 className="text-8xl font-family-oswald line-through">Services</h2>
          <p className="text-sm mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cumque officia ut sequi. A aspernatur in, nostrum commodi minima laboriosam dolore eos repellendus corporis error possimus perferendis veniam sed exercitationem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione ullam doloremque cupiditate, architecto saepe corporis, perferendis aliquid magni maxime voluptas expedita facilis inventore nesciunt aut. Provident iste obcaecati non illo.
          </p>
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
