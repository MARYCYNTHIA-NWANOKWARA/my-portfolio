import { useEffect, useState,useContext } from "react";
import { FaCode, FaFolderOpen, FaHandshake, FaHome, FaLaptop, FaPaperPlane, FaQuestionCircle } from "react-icons/fa";
import { FaBars, FaMoon, FaSun  } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

export default function Header(){
    const [isScrolled,setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const { isDark, toggleTheme } = useContext(ThemeContext);


    useEffect( () =>{
        const handleScroll = () =>{
            if(window.scrollY > 20){
                setIsScrolled(true)
            }else{
                setIsScrolled(false)
            }

            if(isOpen){
              setIsOpen(false)
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    },[isOpen])


    const navbarScroll = (e,id) =>{
          e.preventDefault()

          const section = document.getElementById(id)

          section ?.scrollIntoView({behavior: "smooth"})
          setIsOpen(false)
    }

    const isOpenSet = () =>{
           setIsOpen(!isOpen)
    }


    /*useEffect(() => {
      const navClose = () => {
        if(isOpen){
          setIsOpen(false)
        }
      }

      window.addEventListener("scroll" , navClose)

      return () =>{
        window.removeEventListener("scroll" , navClose)
      }
    } , [isOpen])*/

    return(
        <>
      <motion.header id="header" className= { `z-50 flex rounded-lg sticky top-0 left-0 w-full transition-all duration-300 justify-between px-6 py-4 ${
        isScrolled ? "bg-white/70 dark:bg-black dark:shadow-white/70 backdrop-blur-md border-b border-white/20 shadow-sm"
                   : "bg-transparent border-b border-transparent"
      } `}
>
        <a href="#home" onClick={(e) => navbarScroll(e ,"home")} className="flex gap-2  items-center text-xl font-bold">
          <FaCode className="dark:text-white"/>
          <h2 className="dark:text-white">Mary<span className="text-[#c81a6e] dark:font-bold">Cynthia</span></h2>
        </a>

        
        <div className="hidden lg:flex gap-4 dark:text-gray-400 ">
                <a href="#home" onClick={(e) => navbarScroll(e ,"home")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300">Home</a>
                <a href="#about" onClick={(e) => navbarScroll(e ,"about")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300">About</a>
                <a href="#skills" onClick={(e) => navbarScroll(e ,"skills")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300">Skills</a>
                <a href="#projects" onClick={(e) => navbarScroll(e ,"projects")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300">Projects</a>
                <a href="#services" onClick={(e) => navbarScroll(e ,"services")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300">Services</a>
                <a href="#contact" onClick={(e) => navbarScroll(e ,"contact")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300">Contact</a>
        </div>
        

          <span className="flex gap-4">
            <button className="dark:text-white   font-bold  hover:text-[#c81a6e] transiton-all duration-300 cursor-pointer text-black  text-2xl lg:hidden" onClick={isOpenSet}>{isOpen ? <FaTimes/> : <FaBars/>}</button>
            <button onClick={toggleTheme} className="transition-all  dark:text-white  font-bold text-2xl  transiton-all duration-300 cursor-pointer text-black">{isDark? <FaSun /> : <FaMoon />}</button>
            <a href="#contact" onClick={(e) => navbarScroll(e ,"contact")} className="dark:hover:text-white border-2 border-[#c81a6e] px-3 py-1.5 rounded-lg bg-[#c81a6e] text-white  hover:bg-transparent hover:border-2 hover:text-black hover:border-[#c81a6e] transition-colors duration-300 cursor-pointer font-bold">Connect</a>
          </span>
          
          
          

          {isOpen && (
            <div className=" dark:bg-zinc-800 dark:text-gray-300 fixed top-17 z-50 left-0 mx-auto w-full bg-[#fff8f5] backdrop-blur-md border-t border-pink-200 lg:hidden">
                <div className="text-lg flex flex-col left-0 items-center gap-6 py-6 justify-center text-center  ">
                   <a href="#home" onClick={(e) => navbarScroll(e ,"home")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300 flex items-center gap-4 max-w-[50%] mx-auto justify-center"><FaHome className=""/> Home</a>
                   <a href="#about" onClick={(e) => navbarScroll(e ,"about")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300 flex items-center gap-4 justify-center "><FaQuestionCircle className=""/> About</a>
                   <a href="#skills" onClick={(e) => navbarScroll(e ,"skills")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300 flex items-center gap-4 justify-center mr-3"><FaLaptop className=""/>   Skills</a>
                   <a href="#projects" onClick={(e) => navbarScroll(e ,"projects")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300 flex items-center gap-4 justify-center "><FaFolderOpen className=""/> Projects</a>
                   <a href="#services" onClick={(e) => navbarScroll(e ,"services")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300 flex items-center gap-4 justify-center "><FaHandshake className=""/> Services</a>
                   <a href="#contact" onClick={(e) => navbarScroll(e ,"contact")} className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300 flex items-center gap-4 justify-center "><FaPaperPlane className=""/>Contact</a>
                </div>
            </div>
          
        )}

      </motion.header>
         
      
         
      
        </>
    )
}