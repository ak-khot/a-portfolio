import React from 'react'
import { TbCaretLeftRight } from "react-icons/tb";
import '../Component/Animation'

const Projects = () => {
  return (
      <div id="projectSection" className='text-white text-center mt-40   '>
      <h1 className=' text-5xl  font-serif  ' data-aos="zoom-in"
      >Projects</h1>
      <div className="  lg:mx-48 lg:place-content-around lg:flex ">
      <div className=" space-y-4 rounded-3xl bg-[#985ee3] lg:w-[400px] md:mx-20  h-[450px] mt-20  mb-10 w-[80%] mx-10"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
          <h1 className=' text-white p-4 text-3xl font-semibold'>Electrical IMS</h1>
          <div className=' flex space-x-3 mx-2 text-white font-medium' >
            <TbCaretLeftRight className=' ml-4 mt-0 h-5 w-5 ' />
            <p className=' text-xl mx-10 text-start'>IMS is a inventory management system</p>
          </div>
          <div className=' flex space-x-3 mx-2 text-white font-medium'>
            <TbCaretLeftRight className=' ml-4 mt-0 h-7 w-7 ' />
            <p className=' text-xl mx-10 text-start'>Using Html, Tailwind ccs, Javascript, React JS technology</p>
          </div> 
          <div className=' flex space-x-3 mx-2 text-white font-medium'>
            <TbCaretLeftRight className=' ml-4 mt-0 h-7 w-7 ' />
            <p className=' text-xl mx-10 text-start'>Project overview CRUD Operation, Pop-up, Form validation etc.</p>
          </div>
          <div className=' flex space-x-3 mx-2 text-white font-medium'>
            <TbCaretLeftRight className=' ml-4 mt-0 h-5 w-5 ' />
            <p className=' text-xl mx-10 text-start'>Api integration using axios</p>
          </div>
</div>
      <div className=" space-y-4 rounded-3xl bg-[#985ee3] lg:w-[400px] md:mx-20  h-[450px] mt-20  mb-10 w-[80%] mx-10" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
      <h1 className=' text-white p-4 text-3xl font-semibold'>Techdarshak-Website</h1>
      <div className=' flex space-x-3 mx-2 text-white font-medium'>
            <TbCaretLeftRight className=' ml-4 mt-0 h-5 w-5 ' />
            <p className=' text-xl mx-10 text-start'>
Techdarshak website is a static website</p>
          </div>
          <div className=' flex space-x-3 mx-2 text-white font-medium'>
            <TbCaretLeftRight className=' ml-4 mt-0 h-7 w-7 ' />
            <p className=' text-xl mx-10 text-start'>Using HTML, Tailwind CSS, Javascript, React JS 
Technology
</p>
          </div>
      <div className=' flex space-x-3 mx-2 text-white font-medium'>
            <TbCaretLeftRight className=' ml-4 mt-0 h-5 w-5 ' />
            <p className=' text-xl mx-10 text-start'>Using WOW JS for Animation.</p>
          </div>
      
</div>

     </div>
    </div>
  )
}

export default Projects