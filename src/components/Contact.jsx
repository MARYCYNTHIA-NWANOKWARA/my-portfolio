import{ useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { motion } from "framer-motion" 

const fadeUp = {
  hidden:{opacity: 0, y:40},
  show:{opacity:1, y:0,
    transition:{duration:0.6}
  }
}

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setStatus('success');
          setLoading(false);
          form.current.reset(); // clear form
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('error');
          setLoading(false);
        }
      );
  };

  return (
    <motion.section id="contact" variants = {fadeUp} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} className="mt-22 w-[90%] mx-auto py-6">
      
        <h1 className="dark:text-white font-serif text-5xl font-semibold leading-tight mb-4 ">Contact <span className="text-[#c81a6e] text-6xl">Me</span></h1>
        <p className=" dark:text-gray-400 text-black mb-18 font-semibold ">Have a project in mind? Let's talk.</p>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">

        <div className="dark:bg-zinc-900 p-6 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)]  hover:translate-y-1 h-full flex-col   bg-white   transition-transform duration-300">
        <form ref={form} onSubmit={sendEmail} className="">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name"
            required 
            className="dark:shadow-zinc-800 dark:bg-zinc-900 dark:placeholder-gray-400 w-full placeholder:text-gray-600 px-4 py-3 focus:outline-none focus:ring-2 focus:border-[#c81a6e] focus:ring-[#c81a6e] bg-white   p-4 rounded-xl mb-8  transition-all duration-300 shadow-lg"
          />
          
          <input 
            type="email" 
            name="email" 
            placeholder="your@email.com"
            required 
            className="dark:shadow-zinc-800 dark:bg-zinc-900 dark:placeholder-gray-400 w-full placeholder:text-gray-600  px-4 py-3 focus:outline-none focus:ring-2 focus:border-[#c81a6e] focus:ring-[#c81a6e] bg-white   p-4 rounded-xl mb-8  transition-all duration-300 shadow-lg"
          />

          <input 
            type="text" 
            name="title" 
            placeholder="Subject"
            required 
            className="dark:shadow-zinc-800 dark:bg-zinc-900 dark:placeholder-gray-400 w-full placeholder:text-gray-600 text-black  px-4 py-3 focus:outline-none focus:ring-2 focus:border--[#c81a6e] focus:ring-[#c81a6e] bg-white   p-4 rounded-xl mb-8  transition-all duration-300 shadow-lg"
          />

          <textarea 
            name="message" 
            rows="5"
            placeholder="Tell me about your project..."
            required 
            className="dark:shadow-zinc-800 dark:bg-zinc-900 dark:placeholder-gray-400 w-full placeholder:text-gray-600 px-4 py-3 focus:outline-none focus:ring-2 focus:border--[#c81a6e] focus:ring-[#c81a6e] bg-white   p-4 rounded-xl mb-8  transition-all duration-300 shadow-lg"
          />

          {/* This sends the current date/time automatically */}
          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <button 
            type="submit" 
            disabled={loading}
            className="dark:bg-[#c81a6e] dark:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black cursor-pointer border-2 w-full border-[#c81a6e] px-4 py-2 rounded-lg bg-[#c81a6e] text-white  hover:bg-transparent hover:border-2 hover:text-black hover:border-[#c81a6e] transition-colors duration-300 font-semibold"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {/* Success/Error messages */}
          {status === 'success' && (
            <p className="text-green-400 text-center">Message sent successfully! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center">Oops! Something went wrong. Please try again.</p>
          )}
        </form>
        </div>

        <div className="dark:bg-black p-6 rounded-2xl   h-full flex-col flex space-y-10  bg-white   ">
          <h1 className='dark:bg-gradient-to-l dark:from-white dark:to-[#c81a6e] dark:bg-clip-text dark:text-transparent text-[#c81a6e] font-bold text-2xl mb-2'>Let's Connect</h1>
          <p className='dark:text-gray-400'>I reply within 2 hours. Tell me about your project, your timeline, and budget... Let's build something users will love.</p>

          <div className="dark:bg-zinc-900 dark:border-zinc-800 flex gap-4 border bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
                       
            <h3 className="text-[#c81a6e] font-bold text-2xl"><FaEnvelope/></h3>
            <div className="grid gap-2">
              <h3 className="dark:text-white text-[#c81a6e] font-bold text-lg">Email</h3>
              <p className="dark:text-gray-400 text-black">Oluebube9301@gmail.com</p>
            </div>
           </div>

           <div className="dark:bg-zinc-900 dark:border-zinc-800 flex gap-4 border bg-pink-50 text-pink-600 border-pink-600 p-4 rounded-xl mb-6 hover:scale-[1.03] transition-all duration-300 shadow-lg">
                       
            <h3 className="text-[#c81a6e] font-bold text-2xl"><FaLocationDot/></h3>
            <div className="grid gap-2">
              <h3 className="dark:text-white text-[#c81a6e] font-bold text-lg">Location</h3>
              <p className="dark:text-gray-400 text-black">Anambra State, Nigeria.</p>
            </div>
           </div>

           <p className='dark:text-gray-400 mt-4 '>Connect With Me</p>

           <div className='flex gap-2 -mt-4'>
            <a href="https://github.com/MARYCYNTHIA-NWANOKWARA" target="_blank" rel="noopener noreferrer" className="dark:bg-[#c81a6e] dark:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black border-2 text-sm border-[#c81a6e] px-4 py-2 font-semibold rounded-lg hover:bg-[#c81a6e] transiton-all duration-300 cursor-pointer text-black  hover:text-white"><FaGithub className=""/></a>
            <a href="https://linkedin.com/in/marycynthia-nwanokwara-a08812407" target="_blank" rel="noopener noreferrer" className="dark:bg-[#c81a6e] dark:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black border-2 text-sm border-[#c81a6e] px-4 py-2 font-semibold rounded-lg hover:bg-[#c81a6e] transiton-all duration-300 cursor-pointer text-black  hover:text-white"><FaLinkedinIn className=""/></a>
            <a href="https://tiktok.com/@tiastech__" target="_blank" rel="noopener noreferrer" className="dark:bg-[#c81a6e] dark:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black border-2 text-sm border-[#c81a6e] px-4 py-2 font-semibold rounded-lg hover:bg-[#c81a6e] transiton-all duration-300 cursor-pointer text-black  hover:text-white"><FaTiktok className=""/></a>
           </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;