import { BrowserRouter, Route, Routes } from "react-router"
import Intro from "./pages/Intro"
import Index from "./pages/Index"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/index" element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
