import artsy from "../image/artsy3.jpg";
import crappo from "../image/crappo.jpg";
import proshop from "../image/proshop1.jpg";
import musica from "../image/Home.jpg";
import webisoft from "../image/webisoft.jpg";
import home from "../image/home rental.jpg";
import movie from "../image/moviemania.jpg";
import resumeA from "../image/resumeA.jpg";
import html from "../image/html-svgrepo-com.svg";
import css from "../image/css.svg";
import javascript from "../image/javascript.svg";
import api from "../image/api.svg";
import flutterwave from "../image/flutterwave.svg";
import redux from "../image/redux.svg";
import tailwindcss from "../image/tailwindcss.svg";
import reactjs from "../image/reactjs.svg";
import paypal from "../image/paypal.svg";
import firebase from "../image/firebase.svg";
import nextjs from "../image/nextjs.svg";
import mongodb from "../image/mongodb.svg";
import typescript from "../image/typescript.svg";
import bootstrap from "../image/bootstrap.svg";
import nodejs from "../image/nodejs.svg";

export const myProjects = [
  {
    title: "Resume builder/generator",
    link: "https://resume-builder-dusky.vercel.app/",
    info: `
        ResumeA is a CV/Resume builder with a handful of templates to build and 
        customize CVs, it is mobile and desktop friendly as opposed to other platforms 
        that are usually desktop-centric`,
    image: resumeA,
    skill: [
      { name: "nextjs", icon: nextjs },
      { name: "tailwindcss", icon: tailwindcss },
      { name: "redux toolkit", icon: redux },
      { name: "typescript", icon: typescript },
    ],
  },
  {
    title: "Music web app",
    link: "https://musica-sandy.vercel.app/",
    info: `
        Musica is a webapp that consumes a simple music api and is packed with 
        functionalities such as music search, adding music to favourite, music like,
        and so on`,
    image: musica,
    skill: [
      { name: "reactjs", icon: reactjs },
      { name: "tailwindcss", icon: tailwindcss },
      { name: "redux toolkit", icon: redux },
      { name: "api", icon: api },
    ],
  },
  {
    title: "Artsy store",
    link: "https://artsy-ashy.vercel.app/",
    info: `
        Artsy is an art store that showcases, auctions and sells beatiful art 
        collections from around the world, the website is user authenticated, and intergrated
        with a payment system as well as other features`,
    image: artsy,
    skill: [
      { name: "reactjs", icon: reactjs },
      { name: "tailwindcss", icon: tailwindcss },
      { name: "redux toolkit", icon: redux },
      { name: "firebase", icon: firebase },
      { name: "flutterwave", icon: flutterwave },
    ],
  },
  {
    title: "Proshop e-commerce",
    link: "https://shopfestapp.herokuapp.com/",
    info: `
        Proshop is a fullstack and fully functional e-commerce store, 
        with abilities to add product reviews, product rating, payment options etc`,
    image: proshop,
    skill: [
      { name: "reactjs", icon: reactjs },
      { name: "bootstrap", icon: bootstrap },
      { name: "redux toolkit", icon: redux },
      { name: "nodejs", icon: nodejs },
      { name: "mongodb", icon: mongodb },
      { name: "paypal", icon: paypal },
    ],
  },
  {
    title: "Crappo cryto",
    link: "https://crappo-woad.vercel.app/",
    info: `
       This is a landing page with crypto-currency services such as mining assets like bitcoin, etherium, litecoin etc.
       It is the fastest and secure platform to invest in crypto`,
    image: crappo,
    skill: [
      { name: "reactjs", icon: reactjs },
      { name: "tailwindcss", icon: tailwindcss },
    ],
  },
  {
    title: "Webisoft clone",
    link: "https://webisoft-clone.vercel.app/",
    info: `
        Webisoft is a consulting firm in marketing, design sales and
         software engineering. It automates its client's bussiness, connects their systems and assembles
         tools for its clients`,
    image: webisoft,
    skill: [
      { name: "reactjs", icon: reactjs },
      { name: "tailwindcss", icon: tailwindcss },
    ],
  },
  {
    title: "Moviemania",
    link: "https://moviemania-theta.vercel.app/",
    info: `
        A simple movie app that consumes themoviedb.org api to get 
        basic information about new movies`,
    image: movie,
    skill: [
      { name: "nextjs", icon: nextjs },
      { name: "tailwindcss", icon: tailwindcss },
      { name: "api", icon: api },
    ],
  },
  {
    title: "Home rental",
    link: "https://webisoft-clone.vercel.app/",
    info: `
        A home rental service landing page`,
    image: home,
    skill: [
      { name: "html", icon: html },
      { name: "tailwindcss", icon: tailwindcss },
      { name: "javascript", icon: javascript },
    ],
  },
];

// import { useState, useEffect } from "react";
// import Screens from "./Screens";
// import lottie from "../image/coder.json";
// import { useLottie } from "lottie-react";
// import segun from "../image/segun.jpg";
// import { motion, AnimatePresence, spring } from "framer-motion";
// const Entrance = () => {
//   const options = {
//     animationData: lottie,
//     loop: true,
//   };

//   const { View } = useLottie(options);
//   const title = "EXCELLENCE!";
//   const banner = {
//     animate: {
//       transition: {
//         delayChildren: 2.3,
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       setShowEntranceAnimation(false);
//     }, 10000);
//     setTimeout(() => {
//       setShowLoading(false);
//     }, 4000);
//     setTimeout(() => {
//       setIsGreeting(false);
//     }, 4750);
//   }, []);
//   const [showEntranceAnimation, setShowEntranceAnimation] = useState(true);
//   const [isGreeting, setIsGreeting] = useState(true);
//   const [showLoading, setShowLoading] = useState(true);
//   return (
//     <motion.section className="text-white">
//       <motion.div
//         initial={{ y: 0 }}
//         animate={{ y: "-100%" }}
//         transition={{
//           delay: 4.5,
//           duration: 1.1,
//         }}
//         className={`w-screen h-screen ${
//           !showEntranceAnimation && "hidden"
//         } fixed z-[200] top-0 bottom-0 left-0 bg-[#13111d]`}
//       >
//         <div className="outer">
//           <div className="flex middle">
//             <motion.div
//               variants={banner}
//               initial="initial"
//               whileInView="animate"
//               className={`fixed
//             top-0 bottom-0 h-screen w-screen z-[500] bg-transparent flex justify-center items-center left-0 right-0`}
//             >
//               <div className="w-11/12 md:w-1/2">{View}</div>
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>
//       {/* decoy */}
//     </motion.section>
//   );
// };

// export default Entrance;

// import { motion } from "framer-motion";
// import { useLottie } from "lottie-react";
// import lottie from "../image/coder.json";
// const Hero = () => {
//   const options = {
//     animationData: lottie,
//     loop: true,
//   };

//   const { View } = useLottie(options);
//   const name = "Oluwasegun";
//   const banner = {
//     animate: {
//       transition: {
//         delayChildren: 4.4,
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const letterAni = {
//     initial: { opacity: 0, x: 500 },
//     animate: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         // ease: [0.6, 0.01, -0.05, 0.95, 0.3],
//         duration: 1,
//       },
//     },
//   };
//   return (
//     <motion.section
//       id="home"
//       className="w-10/12 text-white h-screen snap-center flex justify-center md:flex-row flex-col
//       mx-auto"
//     >
//       <div className="w-full  flex flex-col justify-center items-start gap-y-2 md:gap-y-6 md:w-1/2">
//         <motion.h2
//           transition={{ delay: 5, duration: 1 }}
//           // initial={{ y: 80, opacity: 0 }}
//           // animate={{ y: 0, opacity: 1 }}
//           initial={{
//             y: 50,
//             clipPath: "polygon(0 0, 0% 0, 0% 0%, 0% 0%)",
//           }}
//           animate={{
//             y: 0,
//             clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
//           }}
//           className="text-gray-400 font-oxanium text-xl mb-4 md:mb-1 md:text-3xl"
//         >
//           Hi, my name is
//         </motion.h2>
//         <motion.div
//           variants={banner}
//           initial="initial"
//           animate="animate"
//           className="flex"
//         >
//           <motion.div
//             transition={{ delay: 5.1, duration: 1 }}
//             initial={{
//               y: 200,
//               clipPath: "polygon(0 0, 0% 0, 0% 0%, 0% 0%)",
//             }}
//             animate={{
//               y: 0,
//               clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
//             }}
//             className="text-white -mt-5 text-[2rem] tracking-[0.3rem] md:text-[5rem] font-oxanium font-semibold"
//           >
//             Oluwasegun
//           </motion.div>
//         </motion.div>
//         <motion.p
//           transition={{ delay: 5.1, duration: 1 }}
//           initial={{
//             y: 200,
//             clipPath: "polygon(0 0, 0% 0, 0% 0%, 0% 0%)",
//           }}
//           animate={{
//             y: 0,
//             clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
//           }}
//           className="max-w-max font-oxanium text-gray-200 md:max-w-xl text-lg md:text-xl"
//         >
//           I’m a{" "}
//           <span className="text-cyan-500 font-medium">software engineer</span>{" "}
//           specialized in building fast, responsive & exceptional digital
//           experiences
//         </motion.p>

//         <a
//           href="#projects"
//           className="leading-[7rem] z-10 rounded md:text-xl text-lg mt-[2rem]
//         tracking-[0.4rem] duration-500 bg-gradient-to-l
//         md:rounded-lg from-rouge to-cyan-500 text-white
//         hover:tracking-[0.6rem] w-[12rem] shadow-md flex justify-center
//         h-[2.8rem] items-center relative md:w-[18rem] md:h-[4rem]"
//         >
//           Projects
//         </a>
//       </div>
//       <div className="w-full hidden md:flex justify-center items-center md:w-1/2">
//         {View}
//       </div>
//     </motion.section>
//   );
// };

// export default Hero;
