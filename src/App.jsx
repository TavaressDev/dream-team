
import { Home } from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './global.css'
import { Game } from "./pages/Game"


export function App() {

  return (
    <BrowserRouter>
      <Routes>
         <Route index element={<Home />} />
         <Route path="game" element={<Game />} /> </Routes>
    </BrowserRouter>
    
  )
}

