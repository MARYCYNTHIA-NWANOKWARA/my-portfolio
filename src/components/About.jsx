import { FaCode } from "react-icons/fa";
import { FiMessageSquare} from "react-icons/fi";
import { FaMagic } from "react-icons/fa";
import { motion } from "framer-motion" 

const fadeUp = {
  hidden:{opacity: 0, y:40},
  show:{opacity:1, y:0,
    transition:{duration:0.6}
  }
}

export default function About(){
    return(
        <motion.section variants = {fadeUp} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} id="about" className="mt-20 w-[90%] mx-auto py-6 gap-12 grid grid-cols-1 md:grid-cols-2">

           <div className="">
             <h1 className="dark:text-white font-serif text-5xl font-semibold leading-tight mb-16">About <span className="text-[#c81a6e] text-6xl"> Me</span></h1>
             <div className="space-y-4 ">
               <p className="dark:text-gray-400">I'm a passionate <span className=" dark:bg-gradient-to-r dark:from-white dark:to-[#c81a6e] dark:bg-clip-text dark:text-transparent font-bold font-bold">Frontend Developer</span> building beautiful, responsive, and user-friendly web apps and websites. I specialize in creating  performant user interfaces that combines beautiful design with exceptional functionality. </p>
               <p className="dark:text-gray-400">My expertise spans the entire frontend ecosystem. from Javascript and React to modern CSS frameworks. I'm commited to writing <span className="dark:text-white font-bold"> clean, maintainable code</span> and staying current with the latest web technologies. </p>
               <p className="dark:text-gray-400">When i'm not coding, you'll find me contributing to open sources, speaking at events or exploring <span className="dark:text-[#c81a6e] font-bold">new design trends.</span></p>
             </div>
             <div className="mt-10 w-[80%] mx-auto flex justify-between">
                <div className="">
                  <h2 className="text-3xl font-bold text-[#c81a6e]">6+</h2>
                  <p className="dark:text-gray-400">Months of experience</p>
                </div>
                <div className="">
                  <h2 className="text-3xl font-bold text-[#c81a6e]">5+</h2>
                  <p className="dark:text-gray-400">Practical Projects</p>
                </div>
             </div><br/>
             
             <span className="">
               <a href="/MaryCynthia_CV.pdf" download="/MaryCynthia_CV.pdf" className="dark:hover:border-white border-2 text-sm border-[#c81a6e] px-2 py-2 font-semibold rounded-lg bg-[#c81a6e] text-white  hover:bg-white  hover:text-black transiton-all duration-300 cursor-pointer">Download CV</a>
             </span>
             
             
           </div>

           <div className="mt-30">
             <div className="dark:bg-zinc-900 dark:border-zinc-400  flex gap-4 border bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
             
                <h3 className="text-[#c81a6e] font-bold text-2xl"><FaCode/></h3>
                <div className="grid gap-2">
                    <h3 className="dark:text-white text-[#c81a6e] font-bold text-lg">Expertise</h3>
                    <p className="dark:text-gray-400 text-black">Specialized in building scalable web applications with modern technologies and best practices.</p>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-2">
               
                 <div className="dark:bg-zinc-900 dark:border-zinc-400 grid gap-2 border bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
                    <h3 className="text-[#c81a6e] font-bold text-lg"><FaMagic/></h3>
                    <h2 className="dark:text-white text-[#c81a6e] font-bold text-lg">Clean Code</h2>
                    <p className="dark:text-gray-400 text-black">Writing maintainable well-documented code that scales.</p>
                 </div>
               
                 <div className="dark:bg-zinc-900 dark:border-zinc-400 grid gap-2 border bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
                    <h3 className="text-[#c81a6e] font-bold text-lg"><FiMessageSquare/></h3>
                    <h2 className="dark:text-white text-[#c81a6e] font-bold text-lg">Communication</h2>
                    <p className="dark:text-gray-400 text-black">Clear updates, feedback and great teamwork.</p>
                 </div>
            </div>

               <div className="dark:bg-zinc-900 dark:border-zinc-400 flex  justify-between border bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
                     <div className="">
                        <h2 className="text-[#c81a6e] font-bold text-2xl">100%</h2>
                        <p className="dark:text-gray-200 text-black">Client Satisfaction</p>
                     </div>
                     <div className="">
                        <h2 className="text-[#c81a6e] font-bold text-2xl">24/7</h2>
                        <p className="dark:text-gray-200 text-black">Support Available</p>
                     </div>
                     <div className="">
                        <h2 className="text-[#c81a6e] font-bold text-2xl">Fast</h2>
                        <p className="dark:text-gray-200 text-black">Delivery Time</p>
                     </div>
               </div>
             
           </div>
        </motion.section>
    )
}