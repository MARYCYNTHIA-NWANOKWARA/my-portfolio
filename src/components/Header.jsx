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
      <header className= { `fixed top-0 left-0 w-full transition-all duration-300 flex justify-between p-6 ${
        isScrolled ? "bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm"
                   : "bg-transparent border-b border-transparent"
      } `}
>
        <div className="flex gap-2  items-center">
          <FaCode/>
          <h2>MaryCynthia</h2>
        </div>

        <div className="">
            <ul className="flex gap-4">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>

        <div className="">
            <button>Connect</button>
        </div>
        
      </header>
        </>
    )
}