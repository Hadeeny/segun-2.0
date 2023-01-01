import About from "./About"
import Hero from "./Hero"
import Projects from "./Projects"
import {motion} from 'framer-motion'
const Screens = () => {
    return (
        <motion.div 
        transition={{delay: 5, duration:2}}
        initial={{x:'-100%'}}
        animate={{x: 0}}
        className='relative bg-[#0A192F] z-[900] top-0 left-0'>
            <Hero/>
            <About/>
            <Projects/>
        </motion.div>
    )
}

export default Screens
