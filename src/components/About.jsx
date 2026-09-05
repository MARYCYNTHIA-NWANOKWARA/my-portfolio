import { FaCode } from "react-icons/fa";
import { FiMessageSquare} from "react-icons/fi";
import { FaMagic } from "react-icons/fa";


export default function About(){
    return(
        <section className="mt-20 w-[90%] mx-auto py-6 gap-12 grid grid-cols-1 md:grid-cols-2">

           <div className="">
             <h1 className="font-serif text-5xl font-semibold leading-tight mb-16">About <span className="text-[#c81a6e] text-6xl"> Me</span></h1>
             <div className="space-y-4 ">
               <p className="">I'm a passionate <span className=" text-[#c81a6e] font-bold">Frontend Developer</span> building beautiful, responsive, and user-friendly web apps and websites. I specialize in creating performant user interfaces that combines beautiful design with exceptional functionality. </p>
               <p className="">My expertise spans the entire frontend ecosystem. from Javascript and React to modern CSS frameworks. I'm commited to writing clean, maintainable code and staying current with the latest web technologies. </p>
               <p className="">When i'm not coding, you'll find me contributing to open sources, speaking at events or exploring new design trends.</p>
             </div>
             <div className="mt-10 w-[80%] mx-auto flex justify-between">
                <div className="">
                  <h2 className="text-3xl font-bold text-[#c81a6e]">6+</h2>
                  <p className="">Months of experience</p>
                </div>
                <div className="">
                  <h2 className="text-3xl font-bold text-[#c81a6e]">5+</h2>
                  <p className="">Practical Projects</p>
                </div>
             </div>

             <button className="mt-6 border-2 text-sm border-[#c81a6e] px-2 py-2 font-semibold rounded-lg bg-[#c81a6e] text-white  hover:bg-white  hover:text-black transiton-all duration-300 cursor-pointer">Download CV</button>
             
           </div>

           <div className="mt-30">
             <div className="flex gap-4 border bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
             
                <h3 className="text-[#c81a6e] font-bold text-2xl"><FaCode/></h3>
                <div className="grid gap-2">
                    <h3 className="text-[#c81a6e] font-bold text-lg">Expertise</h3>
                    <p className="text-black">Specialized in building scalable web applications with modern technologies and best practices.</p>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-2">
               
                 <div className="grid gap-2 border bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
                    <h3 className="text-[#c81a6e] font-bold text-lg"><FaMagic/></h3>
                    <h2 className="text-[#c81a6e] font-bold text-lg">Clean Code</h2>
                    <p className="text-black">Writing maintainable well-documented code that scales.</p>
                 </div>
               
                 <div className="grid gap-2 border bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
                    <h3 className="text-[#c81a6e] font-bold text-lg"><FiMessageSquare/></h3>
                    <h2 className="text-[#c81a6e] font-bold text-lg">Communication</h2>
                    <p className="text-black">Clear updates, feedback and great teamwork.</p>
                 </div>
            </div>

               <div className="flex  justify-between border bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
                     <div className="">
                        <h2 className="text-[#c81a6e] font-bold text-2xl">100%</h2>
                        <p className="text-black">Client Satisfaction</p>
                     </div>
                     <div className="">
                        <h2 className="text-[#c81a6e] font-bold text-2xl">24/7</h2>
                        <p className="text-black">Support Available</p>
                     </div>
                     <div className="">
                        <h2 className="text-[#c81a6e] font-bold text-2xl">Fast</h2>
                        <p className="text-black">Delivery Time</p>
                     </div>
               </div>
             
           </div>
        </section>
    )
}