import {motion} from 'framer-motion'
import { RiGithubLine } from "react-icons/ri";
import { MdOutlineOpenInNew } from "react-icons/md";
const Socials = () => {
    return (
        <motion.div
        // transition={{delay:3, duration: 1}}
        // initial={{opacity: 0}}
        // opacity={{opacity: 1}}
        className='hidden fixed z-[900] bottom-0 left-2 bg-transparent w-[2rem] md:flex flex-col items-center'>
          <ul className='space-y-4'>
              <li><RiGithubLine size={30} color={"#bae67e"}/></li>
              <li><MdOutlineOpenInNew size={30} color={"#bae67e"}/></li>
              <li><RiGithubLine size={30} color={"#bae67e"}/></li>
              <li><MdOutlineOpenInNew size={30} color={"#bae67e"}/></li>
          </ul>
          <div className='w-1 h-[10rem] mt-5 bg-leMon' />  
        </motion.div>
    )
}

export default Socials
