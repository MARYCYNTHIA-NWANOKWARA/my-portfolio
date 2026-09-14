
import { FaCode, FaMobileAlt } from "react-icons/fa";
import { FaComment, FaPaintbrush,  FaPuzzlePiece,  FaRocket} from "react-icons/fa6";
import { motion } from "framer-motion" 

const fadeUp = {
  hidden:{opacity: 0, y:40},
  show:{opacity:1, y:0,
    transition:{duration:0.6}
  }
}

export default function  Services(){
    return(
        <motion.section variants = {fadeUp} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} id="services" className="mt-22 w-[90%] mx-auto py-6">
            <h1 className="font-serif text-5xl font-semibold leading-tight mb-16 ">My <span className="text-[#c81a6e] text-6xl">Services</span></h1>
            <div className=" gap-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
                    <div className="grid grid-col gap-4 border  bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
                        <h3 className="text-[#c81a6e] font-bold text-2xl p-1 w-10 border-2 rounded-lg border-[#c81a6e]"><FaCode/></h3>
                        <h2 className="text-[#c81a6e] font-bold text-lg">Frontend Development</h2>
                        <p className="text-black">Building performant web applications using React, vite and modern CSS frameworks like Tailwind CSS. From landing page to full web apps.</p>
                    </div>
                    <div className="grid grid-col gap-4 border  bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
                        <h3 className="text-[#c81a6e] font-bold text-2xl p-1 w-10 border-2 rounded-lg border-[#c81a6e]"><FaMobileAlt/></h3>
                        <h2 className="text-[#c81a6e] font-bold text-lg">Responsive Design</h2>
                        <p className="text-black">Creating mobile-first responsive interfaces that work seamlessly across all devices and screen sizes uwithexceptional user experience.</p>
                    </div>
                </div>

                <div className=" gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="grid grid-col gap-4 border  bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
                       <h3 className="text-[#c81a6e] font-bold text-2xl p-1 w-10 border-2 rounded-lg border-[#c81a6e]"><FaPaintbrush/></h3>
                        <h2 className="text-[#c81a6e] font-bold text-lg">UI/UX Implementation</h2>
                        <p className="text-black">Turning Figma designs into pixel-perfect, accessible code  focused on usability.</p>
                    </div>
                    <div className="grid grid-col gap-4 border  bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
                       <h3 className="text-[#c81a6e] font-bold text-2xl p-1 w-10 border-2 rounded-lg border-[#c81a6e]"><FaPuzzlePiece/></h3>
                        <h2 className="text-[#c81a6e] font-bold text-lg">Custom Components</h2>
                        <p className="text-black">Reusable React components and design system that keep your brand consistent.</p>
                    </div>
                    <div className="grid grid-col gap-4 border bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
                       <h3 className="text-[#c81a6e] font-bold text-2xl p-1 w-10 border-2 rounded-lg border-[#c81a6e]"><FaRocket/></h3>
                        <h2 className="text-[#c81a6e] font-bold text-lg">Performance Optimization</h2>
                        <p className="text-black">Faster website with code splitting, lazy loading, and Core Web Vitals in mind.</p>
                    </div>
                    <div className="grid grid-col gap-4 border bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
                       <h3 className="text-[#c81a6e] font-bold text-2xl p-1 w-10 border-2 rounded-lg border-[#c81a6e]"><FaComment/></h3>
                        <h2 className="text-[#c81a6e] font-bold text-lg">Code Review & Consulting</h2>
                        <p className="text-black">Expert code reviews + technical guidance to scale and improve your frontend apps.</p>
                    </div>
                </div>
            </div>

        </motion.section>
    )
}