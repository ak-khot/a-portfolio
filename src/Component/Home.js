import React from 'react'
import { useEffect } from 'react';
import '../Component/Animation'
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 3000,delay: 1000 });
  }, []);
  return (
      <div id="homeSection">
          <div className="  lg:flex mt-10">
          <div className="  text-white  lg:mx-48 lg:mt-48 text-center lg:text-start space-y-4">
              <h1 className=' lg:text-3xl text-xl' data-aos="fade-down" data-aos-duration="3000">Hello</h1>
              <h1 className=' lg:text-5xl font-bold text-3xl'  data-aos="zoom-in">I am Akshay</h1>
              <h1 className=' lg:text-5xl font-bold text-3xl'  data-aos="zoom-in">Frontend Devloper</h1>
              <p className=' lg:w-[450px] lg:mx-1 mx-4'  data-aos="fade-up" data-aos-duration="3000"> I am a skilled and passionate web devloper with experience in creating visully appealing and user-friendly websites. </p>
              <div className=" mt-5   space-x-3   flex lg:space-x-5 text-center mx-32 lg:mx-0">
            <a href=" https://www.instagram.com/_akshay_khot497?igsh=OGQ5ZDc2ODk2ZA==">
            <div data-aos="zoom-out" className="  bg-[#020225] hover:bg-[#EB972A] border p-4 h-14 rounded-full w-14 flex justify-center  ">
              <FaInstagram className=' w-6 h-6 ' />
            </div>
            </a>
            <a href=" https://www.linkedin.com/in/akshay-khot-7a154a287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <div data-aos="zoom-out" className=" bg-[#020225] border p-4 h-14 rounded-full w-14 hover:bg-[#EB972A]   ">
            <FaLinkedinIn  className=' w-6 h-6 mx-0 ' />
            </div>
            </a>
          
            </div>
        </div> 
              <div className=" lg:mr-6 mx-4 md:mx-28">
              <img  data-aos="zoom-in" className=' rounded-full mt-20' src="https://storage.googleapis.com/pai-images/585031b247d345f0b4d31c92340d2ab0.jpeg" alt="" />
              </div>    
          </div>
    </div>
  )
}

export default Home