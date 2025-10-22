import Header from "./Header";
import BallCursor from "../common/BallCursor";
import { useRef } from "react";
import Home from "../../sections/Home";
import About from "../../sections/About";
import Services from "../../sections/Services";
import Contact from "../../sections/Contact";
import { ReactLenis } from 'lenis/react'
import { useEffect } from "react";
import gsap from "gsap";
import Portfolio from "../../sections/Portfolio";

export default function Layout() {
  const ballCursorRef = useRef(null)
  const lenisRef = useRef()

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <div className="font-family-lato min-h-dvh min-w-dvw flex flex-col overflow-x-hidden">
        <Header />

        <main className="flex-grow">
          <Home />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </main>

        <footer className="text-center p-4 text-sm bg-black text-white">
          &copy; 2025 Blank Studio Co. Todos los derechos reservados.
        </footer>

        <BallCursor ref={ballCursorRef} />
      </div>
    </>
  );
}
