import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import { LuAlignJustify } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";
import '../Animation'
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 800, // Set the duration of the scroll animation in milliseconds
      smooth: 'easeInOutQuad', // Use easing function for smooth animation
    });
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
   
  };
  return (
   <>
    <nav>
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" data-aos="fade-right" class="flex items-center space-x-3 rtl:space-x-reverse">
            <FaLaptopCode className=' h-16 w-16 text-white'  />
    </a>
   
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul data-aos="fade-down"
     data-aos-easing="linear"
      class="font-medium  cursor-pointer flex flex-col p-4 md:p-0 mt-4 border text-xl border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <ScrollLink  class="block py-2 px-3 text-white  rounded hover:text-blue-950 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="homeSection" smooth={true} duration={800} onClick={() => scrollToSection('homeSection')}>
            Home
                </ScrollLink>
              </li>
        <li>
        <ScrollLink  class="block py-2 px-3 text-white  rounded hover:text-blue-950 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="aboutSection" smooth={true} duration={800} onClick={() => scrollToSection('aboutSection')}>
            About
                </ScrollLink>
              </li>
        
              <li>
          <ScrollLink   class="block py-2 px-3 text-white  rounded hover:text-blue-950 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="projectSection" smooth={true} duration={800} onClick={() => scrollToSection('projectSection')}>
            Project
          </ScrollLink>
        </li>
        <li>
          <ScrollLink   class="block py-2 px-3 text-white  rounded hover:text-blue-950 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"  to="contactSection" smooth={true} duration={800} onClick={() => scrollToSection('contactSection')}>
            Contact
          </ScrollLink>
        </li>
      </ul>
    </div>
  </div>

    
    
      </nav>
      
    </>
  )
}

export default Nav;