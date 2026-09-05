import { FaStar } from "react-icons/fa";
import heroPic from "../assets/hero-pic.jpeg"


export default function Home(){
    return(
        <>
        <section className="grid grid-cols-1 md:grid-cols-2 mt-10 w-[90%] mx-auto py-6 gap-12">

          

          <div className="space-y-6 mt-10">

            <p className="flex items-center gap-2  border bg-pink-50 text-pink-600 border-pink-600 text-center p-2 rounded-xl text-sm "><FaStar/> Frontend Developer & Fullstack Enthusiast | Based in Anambra, Nigeria.</p>
            <h1 className="text-5xl font-semibold leading-tight font-serif">Building Modern Web Interfaces</h1>
            <p className="text-base ">I'm Nwanokwara Marycynthia , a Frontend Developer focused on building fast, scalable and high performance web applications using modern Frontend technologies.</p>
            <div className="flex gap-2">
            <button className="border-2 text-sm border-[#c81a6e] px-2 py-2 font-semibold rounded-lg bg-[#c81a6e] text-white  hover:bg-white  hover:text-black transiton-all duration-300 cursor-pointer">View My Work</button>
            <button className="border-2 text-sm border-[#c81a6e] px-4 py-1.5 font-semibold rounded-lg hover:bg-[#c81a6e] transiton-all duration-300 cursor-pointer  hover:text-white">Contact Me</button>
            </div>

          </div>

          <div className="">
            <img className="h-130 w-130 rounded-2xl shadow-xl border border-pink-600 object-cover" alt="Mary-Cynthia" src={heroPic}/>
          </div>

        </section>
        </>
    )
}