import { Outlet, Link, useLocation } from "react-router";

export default function Layout() {
  const location = useLocation();

  return (
    <div>
      <header>
        <nav>
          <ul className="flex list-none gap-3 p-10">
            <li>
              <Link 
                to="/app" 
                style={{ 
                  textDecoration: location.pathname === "/app" ? 'underline' : 'none',
                  fontWeight: location.pathname === "/app" ? 'bold' : 'normal'
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/app/about"
                style={{ 
                  textDecoration: location.pathname === "/app/about" ? 'underline' : 'none',
                  fontWeight: location.pathname === "/app/about" ? 'bold' : 'normal'
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/app/services"
                style={{ 
                  textDecoration: location.pathname === "/app/services" ? 'underline' : 'none',
                  fontWeight: location.pathname === "/app/services" ? 'bold' : 'normal'
                }}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/app/contact"
                style={{ 
                  textDecoration: location.pathname === "/app/contact" ? 'underline' : 'none',
                  fontWeight: location.pathname === "/app/contact" ? 'bold' : 'normal'
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
      
      <footer style={{ padding: '20px', borderTop: '1px solid #ccc', marginTop: '40px' }}>
        <p>&copy; 2025 Blank Studio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
