import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

/* Importaciones de páginas y componente Navbar */
import { Navbar, RAMPage, Episodes, Location, NotFound } from "../ram"

/* Importaciones de páginas de autenticación y registro */
import { Login, Registro } from "../auth"

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={ <RAMPage /> } />
        <Route path="/episodios" element={ <Episodes /> } />
        <Route path="/ubicacion" element={ <Location /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signin" element={ <Registro /> } />
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </Router>
  )
}
