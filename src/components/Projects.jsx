import projects from "../data/Projects";
import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion" 

const fadeUp = {
  hidden:{opacity: 0, y:40},
  show:{opacity:1, y:0,
    transition:{duration:0.6}
  }
}

const container = {
    hidden:{},
    show:{transition:{
        staggerChildre:0.15
    }}
}

const item = {
    hidden:{opacity:0, y:20},
    show:{opacity:1, y:0}
}


export default function Projects(){
   
    return(
        <motion.section variants = {fadeUp} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} id="projects" className="mt-22 w-[90%] mx-auto py-6">
          <h1 className="dark:text-white font-serif text-5xl font-semibold leading-tight mb-16">My <span className="text-[#c81a6e] text-6xl">Projects</span></h1>
          <p className=""></p>
          <motion.div variants={container} initial="hidden" whileInView = "show" viewport={{once:true}} className=" grid p-4 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" id="projectsCard">
             {projects.map((project) =>(
                
                    <motion.div variants={item} className="dark:bg-zinc-900 dark:border-zinc-900 dark:hover:shadow-xs dark:hover:shadow-pink-600 dark:transition-shadow dark:duration-300 dark:translate-none rounded-2xl shadow-lg overflow-hidden hover:translate-y-1 h-full flex-col  border bg-white text-pink-600 border-pink-100 transition-transform duration-300" key={project.id} >
                        <img src={project.image} className="dark:rounded-xl rounded-lg p-2 w-full h-48 border-b border-gray-900"/>
                        <h1 className="dark:text-white text-xl font-bold text-[#c81a6e] p-4">{project.title}</h1>
                        <h1 className="dark:text-gray-400 px-4 text-black mb-5 flex-1 h-18 font-medium text-sm">{project.description}</h1>
                        <div className="flex flex-wrap mb-4 gap-2 px-4">
                            {project.tech.map((tech) =>(
                                <span key={`${project.github}- ${tech}`} className="dark:bg-zinc-800 dark:text-gray-300 bg-gray-100 px-4 font-bold py-2 rounded-md text-sm  text-black">{tech}</span>
                            ))}
                        </div>
                        <div className="flex gap-3 px-4 mt-auto py-2">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="dark:border-white dark:bg-white dark:text-black dark:hover:bg-[#c81a6e] dark:hover:border-[#c81a6e] dark:hover:text-white border-2 text-sm border-[#c81a6e] px-4 py-2 font-semibold rounded-lg hover:bg-[#c81a6e] transiton-all duration-300 cursor-pointer text-black  hover:text-white"><FaGithub/></a>
                            <a href={project.live} target="_blank" rel="noopener noreferrer"  className="dark:bg-[#c81a6e] dark:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black border-2 text-sm border-[#c81a6e] px-4 py-2 font-semibold rounded-lg bg-[#c81a6e] text-white  hover:bg-white  hover:text-black transiton-all duration-300 cursor-pointer"><FaLink/></a>
                        </div>
                    </motion.div>
                
             ))}
          </motion.div>
        </motion.section>
    )
}

