import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } })

    tl.from('#first-title', {
      x: -50,
      alpha: 0,
      duration: 1,
    })
    .from('#second-title', {
      x: 50,
      alpha: 0,
      duration: 1,
    }, "<")
    .from('#body-text', {
      x: -50,
      alpha: 0,
      duration: 1,
    }, "<")
    .from('#top-bar', {
      scaleX: 0,
      transformOrigin: "left",
      duration: 1,
    }, "<")
    .from('#bottom-bar', {
      scaleX: 0,
      transformOrigin: "right",
      duration: 1,
    }, "<")

  })

  return (
    <section id="home-section" className="px-5 min-h-dvh grid grid-cols-2 grid-rows-2">
      <div className="font-family-oswald col-start-1 row-start-1 flex items-end select-none">
        <span id="first-title" className="text-[14rem] whitespace-nowrap line-through tracking-wide leading-none">Lorem</span>
      </div>
      <div className="font-family-lato col-start-2 row-start-1 flex justify-center items-end">
        <div className="flex flex-col justify-center w-md">
          <div id="top-bar" className=" bg-black h-4 mb-5"></div>
          <span id="body-text" className="font-family-lato text-center text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit labore harum reprehenderit deserunt sequi ipsum! Perferendis illum dicta nostrum quod debitis, repudiandae quae corrupti atque similique eum labore accusamus asperiores!</span>
          <div id="bottom-bar" className=" bg-black h-4 mt-5"></div>
        </div>
      </div>
      <div className="font-family-oswald col-span-2 col-start-1 row-start-2 flex items-start select-none">
        <span id="second-title" className="text-[14rem] whitespace-nowrap line-through tracking-wide leading-none">ipsum dolor</span>
      </div>
    </section>
  )
}
