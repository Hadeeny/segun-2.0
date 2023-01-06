import About from "./About"
import Hero from "./Hero"
import Projects from "./Projects"
import {motion} from 'framer-motion'
import Contact from "./Contact"
import Socials from "./Socials"
import Menu from "./Menu"
const Screens = () => {
    return (
        <motion.div 
        transition={{delay: 4, duration:1}}
        initial={{x:'100%'}}
        animate={{x: 0}}
        className='relative z-[900] bg-[#202838] top-0 left-0'>
            
            <Hero/>
            <About/>
            {/* <Projects/> */}
            <Contact/>
            
        </motion.div>
    )
}

export default Screens
