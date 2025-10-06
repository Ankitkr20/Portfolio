import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Home.jsx"
import About from "./About.jsx"
import Skills from "./Skills.jsx"
import Footer from "./Footer.jsx"
import Projects from "./Projects.jsx"
import Education from './Education.jsx'

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/education" element={<Education/>}></Route>
        <Route path="/footer" element={<Footer/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
