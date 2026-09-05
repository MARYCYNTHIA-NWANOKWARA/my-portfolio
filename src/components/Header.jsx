import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";

export default function Header(){
    const [isScrolled,setIsScrolled] = useState(false)


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

    return(
        <>
      <header className= { `rounded-lg sticky top-0 left-0 w-full transition-all duration-300 flex justify-between px-6 py-4 ${
        isScrolled ? "bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm"
                   : "bg-transparent border-b border-transparent"
      } `}
>
        <div className="flex gap-2  items-center text-xl font-bold">
          <FaCode/>
          <h2>Mary<span className="text-[#c81a6e]">Cynthia</span></h2>
        </div>

        <div className="">
            <ul className="flex gap-4 ">
                <li className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300">Home</li>
                <li className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300">About</li>
                <li className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300">Skills</li>
                <li className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300">Projects</li>
                <li className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300">Services</li>
                <li className="cursor-pointer font-bold hover:text-[#b70a5d] transition-colors duration-300">Contact</li>
            </ul>
        </div>

        <div className="border border-[#c81a6e] px-4 py-1.5 rounded-lg bg-[#c81a6e] text-white  hover:bg-[#b70a5d]">
            <button className="cursor-pointer font-bold">Connect</button>
        </div>
        
      </header>
        </>
    )
}