import { Outlet } from "react-router";
import Header from "./Header";
import BallCursor from "../common/BallCursor";
import { useRef } from "react";

export default function Layout() {
  const ballCursorRef = useRef(null)

  return (
    <div className="font-family-lato min-h-dvh flex flex-col">
      <Header />

      <main className="p-5 flex-grow">
        <Outlet />
      </main>

      <footer className="border-t">
        <p>&copy; 2025 Blank Studio. Todos los derechos reservados.</p>
      </footer>
      <BallCursor ref={ballCursorRef} />
    </div>
  );
}
