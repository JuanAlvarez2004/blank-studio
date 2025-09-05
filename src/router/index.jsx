import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Intro from "../pages/Intro";
import Layout from "../components/layout/Layout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
    errorElement: <NotFound />,
  },
  {
    path: "/app",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, // Ruta índice para "/app"
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);