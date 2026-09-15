import { FaStar } from "react-icons/fa";
import heroPic from "../assets/hero-pic.jpeg"
import { motion } from "framer-motion" 

const fadeUp = {
  hidden:{opacity: 0, y:40},
  show:{opacity:1, y:0,
    transition:{duration:0.6}
  }
}


export default function Home(){
        const navbarScroll = (e,id) =>{
          e.preventDefault()

          const section = document.getElementById(id)

          section ?.scrollIntoView({behavior: "smooth"})
    }
    return(
        <>
        <motion.section variants = {fadeUp} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} id="home" className="grid grid-cols-1 md:grid-cols-2 mt-10 w-[90%] mx-auto py-6 gap-12">

          

          <div className="space-y-6 mt-10">

            <p className="dark:bg-zinc-900 dark:text-white dark:border-zinc-700 flex items-center gap-2  border bg-pink-50 text-pink-600 border-pink-600 text-center p-2 rounded-xl text-sm "><FaStar/> Frontend Developer & Fullstack Enthusiast | Based in Anambra, Nigeria.</p>
            <motion.h1 className="dark:text-white text-5xl font-semibold leading-tight font-serif">Building Modern Web Interfaces</motion.h1>
            <p className="text-base dark:text-gray-400 ">I'm <span className="dark:bg-gradient-to-r dark:from-white dark:to-[#c81a6e] dark:bg-clip-text dark:text-transparent font-bold">Nwanokwara Marycynthia</span> , a Frontend Developer focused on building fast, scalable and high performance <span className="dark:text-white font-bold">web applications</span> using <span className="dark:text-[#c81a6e] font-bold"> modern Frontend technologies.</span></p>
            <div className="flex gap-2">
            <a href="#projects" onClick={(e) => navbarScroll(e ,"projects")} className="dark:border-white dark:bg-white dark:text-black dark:hover:bg-[#c81a6e] dark:hover:border-[#c81a6e] dark:hover:text-white border-2 text-sm border-[#c81a6e] px-2 py-2 font-semibold rounded-lg bg-[#c81a6e] text-white  hover:bg-white  hover:text-black transiton-all duration-300 cursor-pointer">View My Work</a>
            <a href="#contact" onClick={(e) => navbarScroll(e ,"contact")} className="dark:bg-[#c81a6e] dark:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black border-2 text-sm border-[#c81a6e] px-4 py-1.5 font-semibold rounded-lg hover:bg-[#c81a6e] transiton-all duration-300 cursor-pointer  hover:text-white">Contact Me</a>
            </div>

          </div>

          <div className="">
            <img className="dark:border-zinc-700 h-130 w-130 rounded-2xl shadow-xl border border-pink-600 object-cover" alt="Mary-Cynthia" src={heroPic}/>
          </div>

        </motion.section>
        </>
    )
}