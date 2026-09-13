import { FaEnvelope, FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaTiktok } from "react-icons/fa6";

export default function Footer(){

  const navbarScroll = (e,id) =>{
          e.preventDefault()

          const section = document.getElementById(id)

          section ?.scrollIntoView({behavior: "smooth"})
    }

    return(
        <section id="footer" className="mt-22 w-[90%] mx-auto py-6 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between">

              <div className="">
                <h1 className="text-[#c81a6e] font-bold text-2xl mb-5">MaryCynthia</h1>
                <p className="mb-4 max-w-[80%]">Crafting seamless digital experiences with modern technologies.</p>
                <div className="flex gap-2 items-center mb-3 max-w-60 border bg-pink-50  border-pink-600 text-center p-2 rounded-xl text-sm">
                  <h3 className="text-[#c81a6e] text-lg"><FaEnvelope/></h3>
                  <p>Oluebube9301@gmail.com</p>
                </div>
                <div className="flex gap-2 items-center mb-3 max-w-60 border bg-pink-50  border-pink-600 text-center p-2 rounded-xl text-sm">
                   <h3 className="text-[#c81a6e] text-lg"><FaLocationDot/></h3>
                   <p>Anambra State, Nigeria.</p>
                </div>

              </div>

              <div className="mt-4 mr-20">
                <h1 className="text-[#c81a6e] font-bold text-xl mb-5">Quick Links</h1>
                <div className="space-y-2 font-semibold grid">
                  <a href="#home" onClick={(e) => navbarScroll(e ,"home")} className="hover:cursor-pointer hover:text-[#c81a6e] transition-colors duration-300 inline-0">Home</a>
                  <a href="#about" onClick={(e) => navbarScroll(e ,"about")} className="hover:cursor-pointer hover:text-[#c81a6e] transition-colors duration-300 inline-0">About</a>
                  <a href="#skills" onClick={(e) => navbarScroll(e ,"skills")} className="hover:cursor-pointer hover:text-[#c81a6e] transition-colors duration-300 inline-0">Skills</a>
                  <a href="#projects" onClick={(e) => navbarScroll(e ,"projects")} className="hover:cursor-pointer hover:text-[#c81a6e] transition-colors duration-300 inline-0">Projects</a>
                  <a href="#services" onClick={(e) => navbarScroll(e ,"services")} className="hover:cursor-pointer hover:text-[#c81a6e] transition-colors duration-300 inline-0">Services</a>
                  <a href="#contact" onClick={(e) => navbarScroll(e ,"contact")} className="hover:cursor-pointer hover:text-[#c81a6e] transition-colors duration-300 inline-0">Contact</a>
                </div>
              </div>

              <div className="space-y-5 mt-4 mb-8">
                <h1 className="text-[#c81a6e] font-bold text-xl">Connect with me</h1>
                <p>Let's create something amazing together.</p>
                <div className='flex gap-2 mt-10'>
                  <a href="https://github.com/MARYCYNTHIA-NWANOKWARA" target="_blank" rel="noopener noreferrer" className="border-2 text-sm border-[#c81a6e] px-4 py-2 font-semibold rounded-lg hover:bg-[#c81a6e] transiton-all duration-300 cursor-pointer text-black  hover:text-white"><FaGithub className=""/></a>
                  <a href="https://linkedin.com/in/marycynthia-nwanokwara-a08812407" target="_blank" rel="noopener noreferrer" className="border-2 text-sm border-[#c81a6e] px-4 py-2 font-semibold rounded-lg hover:bg-[#c81a6e] transiton-all duration-300 cursor-pointer text-black  hover:text-white"><FaLinkedin className=""/></a>
                  <a href="https://tiktok.com/@tiastech__" target="_blank" rel="noopener noreferrer" className="border-2 text-sm border-[#c81a6e] px-4 py-2 font-semibold rounded-lg hover:bg-[#c81a6e] transiton-all duration-300 cursor-pointer text-black  hover:text-white"><FaTiktok className=""/></a>
                </div>
              </div>

            </div>

            

            <div className="md:flex justify-between mt-16 text-xs grid grid-cols-1 gap-2 border-t">
                <p className="mt-10">&copy; 2026 Nwanokwara MaryCynthia. All rights reserved</p>
                <p className="flex items-center gap-1 mt-10">Built with <FaHeart className="text-pink-600"/> using React & Tailwind CSS.</p>
            </div>
        </section>
    )
}