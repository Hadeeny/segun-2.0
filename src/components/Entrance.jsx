import Screens from './Screens'
import {motion} from 'framer-motion'
const Entrance = () => {
    return (
        <motion.section>
            <motion.div
            initial={{x:'-100%'}}
            animate={{x:0}}
            transition = {{duration:2, delay:1, ease:'easeIn'}}
            className='w-full h-screen fixed top-0 left-0 bg-white'/>
            <motion.div 
            initial={{x:'-100%'}}
            animate={{x:0}}
            transition = {{duration:2, delay:2, ease:'easeIn'}}
            className='w-full h-screen fixed top-0 left-0 bg-gray-500'/>
            <motion.div
            initial={{x:'-100%'}}
            animate={{x:0}}
            transition = {{duration:2, delay:3, ease:'easeIn'}} 
            className='w-full h-screen fixed top-0 left-0 bg-red-400'/>
            <Screens />
        </motion.section>
    )
}

export default Entrance
