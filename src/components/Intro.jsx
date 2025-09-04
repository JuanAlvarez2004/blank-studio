import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useRef, useState } from "react"
import BallCursor from "./BallCursor"
import InkButton from "./InkButton"

gsap.registerPlugin(SplitText)

function Intro() {
  const ballCursorRef = useRef(null)
  const [positionInitialCursor, setPositionInitialCursor] = useState(null)

  useGSAP(() => {
    const titleBrand = new SplitText("#intro-title", { type: "chars" })
    const chasingCursor = document.querySelector("#chasing-cursor")
    const introText = document.querySelector("#intro-text")
    const inkButton = document.querySelector("#ink-button")

    const underScoreRect = titleBrand.chars[titleBrand.chars.length - 1].getBoundingClientRect()
    const recPoint = chasingCursor.getBoundingClientRect()

    gsap.set(chasingCursor, {
      x: underScoreRect.right - recPoint.right,
      y: underScoreRect.top - recPoint.top,
    })

    const tl = gsap.timeline()

    tl
      .from(titleBrand.chars, {
        alpha: 0,
        scaleX: .1,
        stagger: 0.2,
        ease: "power2.out",
      })
      .from(chasingCursor, {
        alpha: 0,
        scale: 1.2,
        duration: 0.2,
        ease: "power2.out",
        onComplete: () => {
          setPositionInitialCursor(chasingCursor.getBoundingClientRect());
        }
      })
      .from(introText, {
        alpha: 0,
        duration: 0.2,
        ease: "power2.out",
      }, "<")
      .from(inkButton, {
        alpha: 0,
        scale: 0.8,
        duration: 0.2,
        ease: "power2.out",
      }, "<")

  }, [])

  return (
    <section className="grid place-items-center h-screen">
      <div className="relative flex flex-col items-center gap-8 max-w-xl">
        <h1 id="intro-title" className="font-family-oswald text-8xl select-none">blank_</h1>
        <div id="chasing-cursor" className="absolute p-0 m-0 w-4 h-4 bg-transparent border-2 border-black rounded-full flex items-center justify-center select-none">
          <small className="m-0 p-5 leading-none text-[11px] font-bold">R</small>
        </div>
        <small className="text-gray-600 text-center" id="intro-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi adipisci dolore qui maxime, pariatur esse libero, amet doloremque repudiandae sequi architecto corporis neque nobis, odio quos totam? Officia, iste.</small>
        <div id="ink-button">
          <InkButton ballCursorRef={ballCursorRef}>
            <div className="flex items-center gap-1">
              <span className="flex-2 font-family-oswald text-lg bg-transparent p-0 m-0">Enter</span>
            </div>
          </InkButton>
        </div>
      </div>
      <BallCursor ref={ballCursorRef} positionInitialCursor={positionInitialCursor} />
    </section>
  )
}

export default Intro