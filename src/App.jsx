// import About from "./components/About"
import Entrance from "./components/Entrance"
import Menu from "./components/Menu"
import Screens from "./components/Screens"
import Socials from "./components/Socials"
import Footer from './components/Footer'
import {AnimatePresence} from 'framer-motion'
// import Hero from "./components/Hero"
// import Projects from "./components/Projects"

function App() {
  return (
    <AnimatePresence>
      <Menu/>
      <Entrance/>
      <Screens/>
      <Socials/>
      <Footer/>
    </AnimatePresence>
  )
}

export default App
