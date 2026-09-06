import projects from "../data/Projects";
import { FaGithub, FaLink } from "react-icons/fa";


export default function Projects(){
   
    return(
        <section className="mt-22 w-[90%] mx-auto py-6">
          <h1 className="font-serif text-5xl font-semibold leading-tight mb-16">My <span className="text-[#c81a6e] text-6xl">Projects</span></h1>
          <p className=""></p>
          <div className="grid p-4 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" id="projectsCard">
             {projects.map((project) =>(
                
                    <div className="rounded-2xl shadow-lg overflow-hidden hover:translate-y-1 h-full flex-col  border bg-white text-pink-600 border-pink-100 transition-transform duration-300" key={project.id} >
                        <img src={project.image} className="rounded-lg p-2 w-full h-48 border-b border-gray-900"/>
                        <h1 className=" text-xl font-bold text-[#c81a6e] p-4">{project.title}</h1>
                        <h1 className="px-4 text-black mb-5 flex-1 h-18 font-medium text-sm">{project.description}</h1>
                        <div className="flex flex-wrap mb-4 gap-2 px-4">
                            {project.tech.map((tech) =>(
                                <span key={tech} className=" bg-gray-100 px-4 font-bold py-2 rounded-md text-sm  text-black">{tech}</span>
                            ))}
                        </div>
                        <div className="flex gap-3 px-4 mt-auto py-2">
                            <a href={project.github} target="_blank" className="border-2 text-sm border-[#c81a6e] px-4 py-2 font-semibold rounded-lg hover:bg-[#c81a6e] transiton-all duration-300 cursor-pointer text-black  hover:text-white"><FaGithub className=""/></a>
                            <a href={project.live} target="_blank" className=" border-2 text-sm border-[#c81a6e] px-4 py-2 font-semibold rounded-lg bg-[#c81a6e] text-white  hover:bg-white  hover:text-black transiton-all duration-300 cursor-pointer"><FaLink className=""/></a>
                        </div>
                    </div>
                
             ))}
          </div>
        </section>
    )
}

