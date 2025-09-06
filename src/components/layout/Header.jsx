import { useLocation } from "react-router";
import SlideButton from "../common/SlideButton";
import gsap from "gsap";
import { useState } from "react";
import { useGSAP } from "@gsap/react";

export default function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useGSAP(() => {
    const headerMenu = document.getElementById("header-menu")
    const menuButton = document.getElementById("menu-button")

    if (headerMenu && menuButton) {
      gsap.set(headerMenu, { y: -headerMenu.offsetHeight + menuButton.offsetHeight + 10 })
    }
  }, []) // Solo se ejecuta una vez al montar

  useGSAP(() => {
    const headerMenu = document.getElementById("header-menu")
    const menuButton = document.getElementById("menu-button")

    if (isMenuOpen) {
      gsap.to(headerMenu, { 
        y: 0, 
        duration: 1, 
        ease: "power4.out" 
      })
    } else {
      gsap.to(headerMenu, { 
        y: -headerMenu.offsetHeight + menuButton.offsetHeight + 10,
        // y: -20, 
        duration: 1, 
        ease: "power4.out" 
      })
    }
  }, [isMenuOpen]);

  return (
    <header id="header-menu" className="flex flex-col justify-center">
      <nav>
        <ul className="list-none gap-3 p-10 text-4xl w-full">
          <li>
            <SlideButton toLocation="/app" content="Home"
              style={{
                fontWeight: location.pathname === "/app" ? 'bold' : 'normal',
                fontStyle: location.pathname === "/app" ? 'italic' : 'normal',
              }}
            />
          </li>
          <li>
            <SlideButton toLocation="/app/about" content="About"
              style={{
                fontWeight: location.pathname === "/app/about" ? 'bold' : 'normal',
                fontStyle: location.pathname === "/app/about" ? 'italic' : 'normal'
              }}
            />
          </li>
          <li>
            <SlideButton toLocation="/app/services" content="Services"
              style={{
                fontWeight: location.pathname === "/app/services" ? 'bold' : 'normal',
                fontStyle: location.pathname === "/app/services" ? 'italic' : 'normal'
              }}
            />
          </li>
          <li>
            <SlideButton toLocation="/app/contact" content="Contact"
              style={{
                fontWeight: location.pathname === "/app/contact" ? 'bold' : 'normal',
                fontStyle: location.pathname === "/app/contact" ? 'italic' : 'normal'
              }}
            />
          </li>
        </ul>
      </nav>
      <div className="inset-0 self-center">
        <div id="menu-button" className="cursor-crosshair" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {
            isMenuOpen
              ? <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6" /></svg>
              : <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
          }
        </div>
      </div>
    </header>
  )
}
