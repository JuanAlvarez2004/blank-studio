import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function Contact() {

  useGSAP(() => {
    const tl = gsap.timeline({ 
      ease: "power2.out", 
      scrollTrigger: {
        trigger: "#contact-section",
        start: "center bottom",
        end: "bottom bottom",
        scrub: true
      }
    })

    tl
    .from("#first-contact-title", {
      x: -200,
      alpha: 0,
      duration: 1
    })
    .from("#second-contact-title", {
      x: 200,
      alpha: 0,
      duration: 1
    }, "<")
    .from("#contact-img", {
      y: 200,
      alpha: 0,
      duration: 1
    }, "<")

  })


  return (
    <section id="contact-section" className="min-h-screen relative px-5 overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-5 z-20">
        <h2 id="first-contact-title" className="font-family-oswald text-[17rem] leading-none line-through">Contact</h2>
        <h2 id="second-contact-title" className="font-family-oswald text-[17rem] leading-none line-through">me</h2>
      </div>
      <div className="absolute inset-0 -bottom-10 flex flex-col items-center justify-center px-5 z-10">
        <img id="contact-img" src="../../images/reaching.jpg" className="scale-50" />
      </div>
      <div className="absolute inset-0 backdrop-blur-md z-20"></div>
      <div className="absolute z-30 p-10 inset-0 flex items-center justify-center">
        <div className="font-family-lato text-9xl text-center">
          *           
        </div>
      </div>
    </section>
  )
}
