import artsy from "../image/artsy3.jpg";
import crappo from "../image/crappo.jpg";
import proshop from "../image/proshop1.jpg";
import musica from "../image/Home.jpg";
import webisoft from "../image/webisoft.jpg";
import home from "../image/home rental.jpg";
import movie from "../image/moviemania.jpg";
import resumeA from "../image/resumeA.jpg";
import me from "../image/me.jpg";
export const myProjects = [
  {
    title: "Resume builder/generator",
    link: "https://resume-builder-dusky.vercel.app/",
    info: `
        ResumeA is a CV/Resume builder with a handful of templates to build and 
        customize CVs, it is mobile and desktop friendly as opposed to other platforms 
        that are usually desktop-centric`,
    image: resumeA,
    skill: ["nextjs", "tailwindcss", "redux-toolkit", "typescript"],
  },
  {
    title: "Music web app",
    link: "https://musica-sandy.vercel.app/",
    info: `
        Musica is a webapp that consumes a simple music api and is packed with 
        functionalities such as music search, adding music to favourite, music like,
        and so on`,
    image: musica,
    skill: ["reactjs", "tailwindcss", "redux", "api"],
  },
  {
    title: "Artsy store",
    link: "https://artsy-ashy.vercel.app/",
    info: `
        Artsy is an art store that showcases, auctions and sells beatiful art 
        collections from around the world, the website is user authenticated, and intergrated
        with a payment system as well as other features`,
    image: artsy,
    skill: ["reactjs", "tailwindcss", "redux", "firebase", "flutterwave"],
  },
  {
    title: "Proshop e-commerce",
    link: "https://shopfestapp.herokuapp.com/",
    info: `
        Proshop is a fullstack and fully functional e-commerce store, 
        with abilities to add product reviews, product rating, payment options etc`,
    image: proshop,
    skill: ["reactjs", "bootstrap", "redux", "nodejs", "mongodb", "paypal"],
  },
  {
    title: "Crappo cryto",
    link: "https://crappo-woad.vercel.app/",
    info: `
       This is a landing page with crypto-currency services such as mining assets like bitcoin, etherium, litecoin etc.
       It is the fastest and secure platform to invest in crypto`,
    image: crappo,
    skill: ["reactjs", "tailwindcss"],
  },
  {
    title: "Webisoft clone",
    link: "https://webisoft-clone.vercel.app/",
    info: `
        Webisoft is a consulting firm in marketing, design sales and
         software engineering. It automates its client's bussiness, connects their systems and assembles
         tools for its clients`,
    image: webisoft,
    skill: ["reactjs", "tailwindcss"],
  },
  {
    title: "Moviemania",
    link: "https://moviemania-theta.vercel.app/",
    info: `
        A simple movie app that consumes themoviedb.org api to get 
        basic information about new movies`,
    image: movie,
    skill: ["nextjs", "tailwindcss", "api"],
  },
  {
    title: "Home rental",
    link: "https://webisoft-clone.vercel.app/",
    info: `
        A home rental service landing page`,
    image: home,
    skill: ["html", "tailwindcss", "javascript"],
  },
];
