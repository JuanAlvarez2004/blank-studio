import Header from "./Header";
import BallCursor from "../common/BallCursor";
import { useRef } from "react";
import Home from "../../sections/Home";
import About from "../../sections/About";
import Services from "../../sections/Services";
import Contact from "../../sections/Contact";

export default function Layout() {
  const ballCursorRef = useRef(null)

  return (
    <div className="font-family-lato min-h-dvh flex flex-col">
      <Header />

      <main className="flex-grow">
        <Home />
        <About />
        <Services />
        <Contact />
      </main>

      {/* <footer className="font-family-lato text-end p-4">
        <p>&copy; 2025 Blank Studio. Todos los derechos reservados.</p>
      </footer> */}

      <BallCursor ref={ballCursorRef} />
    </div>
  );
}
