import { useEffect, useState } from "react";
import { FaCode, FaFolderOpen, FaHandshake, FaHome, FaLaptopCode, FaPaperPlane, FaQuestionCircle } from "react-icons/fa";
import { FaBars, FaMoon  } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Header(){
    const [isScrolled,setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)


    useEffect( () =>{
        const handleScroll = () =>{
            if(window.scrollY > 20){
                setIsScrolled(true)
            }else{
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    },[])


    const navbarScroll = (e,id) =>{
          e.preventDefault()

          const section = document.getElementById(id)

          section ?.scrollIntoView({behavior: "smooth"})
          setIsOpen(false)
    }

    return(
        <>
      <motion.header id="header" className= { `flex rounded-lg sticky top-0 left-0 w-full transition-all duration-300 justify-between px-6 py-4 ${
        isScrolled ? "bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm"
                   : "bg-transparent border-b border-transparent"
      } `}
>
        <a href="#home" onClick={(e) => navbarScroll(e ,"home")} className="flex gap-2  items-center text-xl font-bold">
          <FaCode/>
          <h2>Mary<span className="text-[#c81a6e]">Cynthia</span></h2>
        </a>

        
        <div className="hidden lg:flex gap-4 ">
                <a href="#home" onClick={(e) => navbarScroll(e ,"home")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300">Home</a>
                <a href="#about" onClick={(e) => navbarScroll(e ,"about")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300">About</a>
                <a href="#skills" onClick={(e) => navbarScroll(e ,"skills")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300">Skills</a>
                <a href="#projects" onClick={(e) => navbarScroll(e ,"projects")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300">Projects</a>
                <a href="#services" onClick={(e) => navbarScroll(e ,"services")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300">Services</a>
                <a href="#contact" onClick={(e) => navbarScroll(e ,"contact")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300">Contact</a>
        </div>
        

          <span className="flex gap-4">
            <button className="lg:hidden  font-bold  hover:text-[#c81a6e] transiton-all duration-300 cursor-pointer text-black  text-2xl " onClick={() => setIsOpen(!isOpen)}>{isOpen ? <FaTimes/> : <FaBars/>}</button>
            <button className="  font-bold text-2xl  hover:text-[#c81a6e] transiton-all duration-300 cursor-pointer text-black"><FaMoon/></button>
            <a href="#contact" onClick={(e) => navbarScroll(e ,"contact")} className=" border-2 border-[#c81a6e] px-3 py-1.5 rounded-lg bg-[#c81a6e] text-white  hover:bg-transparent hover:border-2 hover:text-black hover:border-[#c81a6e] transition-colors duration-300 cursor-pointer font-bold">Connect</a>
          </span>

          {isOpen && (
            <div className="fixed  top-[68px] left-0 h-[(calc(100vh-68px))] w-full  bg-black z-40 lg:hidden" onClick={() => setIsOpen(false)}></div>
          )}

          {isOpen && (
            <div className=" fixed top-[68px] z-50  w-full bg-[#fff8f5] backdrop-blur-md border-t border-pink-200 lg:hidden">
                <div className="flex flex-col items-center gap-6 py-6">
                   <a href="#home" onClick={(e) => navbarScroll(e ,"home")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300 flex items-center gap-2 max-w-[50%] mx-auto"><FaHome/> Home</a>
                   <a href="#about" onClick={(e) => navbarScroll(e ,"about")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300 flex items-center gap-2"><FaQuestionCircle/> About</a>
                   <a href="#skills" onClick={(e) => navbarScroll(e ,"skills")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300 flex items-center gap-2"><FaLaptopCode/> Skills</a>
                   <a href="#projects" onClick={(e) => navbarScroll(e ,"projects")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300 flex items-center gap-2"><FaFolderOpen/> Projects</a>
                   <a href="#services" onClick={(e) => navbarScroll(e ,"services")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300 flex items-center gap-2"><FaHandshake/> Services</a>
                   <a href="#contact" onClick={(e) => navbarScroll(e ,"contact")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300 flex items-center gap-2"><FaPaperPlane/>Contact</a>
                </div>
            </div>
          
        )}

      </motion.header>
         
         
      
        </>
    )
}