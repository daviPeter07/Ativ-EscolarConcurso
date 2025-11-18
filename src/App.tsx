import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import("./pages/Home"))
const Concursos = lazy(() => import("./pages/Concursos"))
const About = lazy(() => import("./pages/About"))

function App() {
  return (
    <Suspense fallback={<div>carregando...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/concursos" element={<Concursos />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
