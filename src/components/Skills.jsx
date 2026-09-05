import { BsBootstrap } from "react-icons/bs";
import { FaCss3, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Skills(){
    return(
        <section className="mt-22 w-[90%] mx-auto py-6">
            <h1 className="font-serif text-5xl font-semibold leading-tight mb-16">My <span className="text-[#c81a6e] text-6xl">Skills</span></h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="grid gap-2 border bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
              <h2 className="text-[#c81a6e] font-bold text-2xl"><FaHtml5/></h2>
              <h3 className="text-[#c81a6e] font-bold text-lg">HTML5</h3>
              <p className="text-black">Building layouts with clean semantic code.</p>
            </div>
            <div className="grid gap-2 border bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
              <h2 className="text-[#c81a6e] font-bold text-2xl"><FaCss3/></h2>
              <h3 className="text-[#c81a6e] font-bold text-lg">CSS3</h3>
              <p className="text-black">Designing visuals and smooth animations.</p>
            </div>
            <div className="grid gap-2 border bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
              <h2 className="text-[#c81a6e] font-bold text-2xl"><SiTailwindcss/></h2>
              <h3 className="text-[#c81a6e] font-bold text-lg">Tailwind</h3>
              <p className="text-black">Utility-first styling for fast, custom interfaces.</p>
            </div>
            <div className="grid gap-2 border bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
              <h2 className="text-[#c81a6e] font-bold text-2xl"><BsBootstrap/></h2>
              <h3 className="text-[#c81a6e] font-bold text-lg">Bootstrap</h3>
              <p className="text-black">Creating fully responsive grid-based web designs.</p>
            </div>
            <div className="grid gap-2 border bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
              <h2 className="text-[#c81a6e] font-bold text-2xl"><FaJsSquare/></h2>
              <h3 className="text-[#c81a6e] font-bold text-lg">JavaScript</h3>
              <p className="text-black">Developing logic and DOM Manipulation.</p>
            </div>
            <div className="grid gap-2 border bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
              <h2 className="text-[#c81a6e] font-bold text-2xl"><FaReact/></h2>
              <h3 className="text-[#c81a6e] font-bold text-lg">React</h3>
              <p className="text-black">Building interactive UIs with React components.</p>
            </div>
          </div>
        </section>
    )
}