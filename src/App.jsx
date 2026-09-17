import About from "./components/About"
import Header from "./components/Header"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { motion } from "framer-motion"
import { ThemeProvider } from "./context/ThemeContext"
import GalaxyBackground from "./components/GalaxyBackground"


function App() {
 

  return (
  <ThemeProvider>
    <GalaxyBackground/>
    <motion.div initial = {{opacity: 0, y:10}}
                animate = {{opacity:1, y:0}}
                transition = {{duration:0.6, ease:"easeOut"}
                }
                className="relative">
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Services/>
      <Contact/>
      <Footer/>
    </motion.div>
  </ThemeProvider>

  )
}

export default App
