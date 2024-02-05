import React from 'react'
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import '../Component/Animation'

const About = () => {
  return (
    <div  id="aboutSection" className=''>
      <div className=' text-white text-center mt-32'>
          <h1 className=' text-5xl mt-4 font-serif' data-aos="fade-down">About</h1>
          <p className=' lg:mx-48 mx-4 text-xl font-sans mt-10 text-gray-300' data-aos="zoom-in">
As a Frontend Intern at Techdarshak Software LLP in Nashik, India, I gained hands-on experience in frontend technologies such as HTML, CSS, Bootstrap, Tailwind, and JavaScript, with a focus on React.js. I successfully learned to use version control tools like Git, GitLab, and GitHub for effective code management. Additionally, I collaborated with team members on diverse projects, contributing to a dynamic and collaborative work environment.</p>
    </div>
     <div className='text-white text-center lg:mt-28'>
     <h1 className='  lg:mb-4 mb-0 text-5xl lg:mt-6 mt-28 font-serif'  data-aos="fade-down">Skills</h1>

<div className='  lg:mt-14 mt-10 lg:place-content-around  space-y-5  lg:mx-44 lg:flex md:flex-wrap md:flex  md:w-1/1 md:space-x-10 grid grid-cols-2   lg:space-x-10 text-center mx-12 space-x-6 lg:space-y-0 '>

          <div className=" bg-[#985ee3] p-4 h-28 rounded-full w-28 mt-5 lg:mt-0 lg:ml-0 ml-6 " data-aos="fade-down">
<h4 className=' text-black font-bold text-center'>HTML</h4>
<IoLogoHtml5 className=' w-14 h-14 mx-3 my-0'  />
</div>
<div className=" bg-[#985ee3] p-4 h-28 rounded-full w-28  "  data-aos="fade-down">
<h4 className=' text-black font-bold text-center'>CSS</h4>
<IoLogoCss3  className=' w-14 h-14 mx-3 my-0'  />
</div>
<div className=" bg-[#985ee3] p-4 h-28 rounded-full w-28  " data-aos="zoom-in">
<h4 className=' text-black font-bold text-center'>B-STRAP</h4>
<FaBootstrap  className=' w-14 h-14 mx-3 my-0'  />
</div>
<div className=" bg-[#985ee3] p-4 h-28 rounded-full w-28  " data-aos="zoom-in">
<h4 className=' text-black font-bold text-center'>TAILWIND</h4>
<SiTailwindcss  className=' w-14 h-14 mx-3 my-0'  />
</div>
<div className=" bg-[#985ee3] p-4 h-28 rounded-full w-28  "  data-aos="fade-down">
<h4 className=' text-black font-bold text-center'>JS</h4>
<RiJavascriptFill   className=' w-14 h-14 mx-3 my-0'  />
</div>
<div className=" bg-[#985ee3] p-4 h-28 rounded-full w-28  "  data-aos="fade-down"   >
<h4 className=' text-black font-bold text-center'>REACT</h4>
<FaReact  className=' w-14 h-14 mx-3 my-0'  />
</div>


</div>
      </div>
      </div>
  )
}

export default About;