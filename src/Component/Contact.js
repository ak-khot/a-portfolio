import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';


function Contact() {
  const form = useRef();

  const [forlgata, setForlgata] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForlgata((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear validation error when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

 
  const sendEmail = (e) => {
    e.preventDefault();
    clearFormData();
    emailjs.sendForm('service_cis5zko', 'template_4s7eizf', form.current, 'n3NYo6SbLq8pifgnE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    // Basic validation rules
    const newErrors = {
      name: forlgata.name.trim() === '' ? 'Name is required' : '',
      email: !isValidEmail(forlgata.email) ? 'Invalid email address' : '',
      message: forlgata.message.trim() === '' ? 'Message is required' : '',
    };

    // Check if there are validation errors
    if (Object.values(newErrors).some((error) => error !== '')) {
      setErrors(newErrors);
      console.log('Form has validation errors');
    } else {
      // Perform form submission logic
      setErrors('Form submitted:', forlgata);
    }
  };

  // Simple email validation function
  const isValidEmail = (email) => {
    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <form id="contactSection"  ref={form} onSubmit={sendEmail}>
      <div className='text-white lg:mx-48   mt-32 mb-10' >

        <h1 className=' text-5xl my-14 font-serif  text-center' data-aos="fade-down">Contact</h1>
        <div data-aos="zoom-in" className=' bg-gradient-to-l from-blue-400 to-emerald-400 border lg:w-[850px] h-[750px]   rounded-3xl lg:mx-14  mx-8 '>
          <h1 className=' text-black font-bold text-center mt-5 text-2xl'>Contact Us</h1> 
          <div className="mt-10 mx-4">
          <div class="mb-5 space-y-3 "  >
            <label for="Name" class="  text-sm font-medium lg:mx-28 text-black dark:text-white">Name <span className=' text-red-900 text-x'>*</span></label>
              <input type="text" id="Name" name="name"
                autoComplete='off'
          value={forlgata.name}
          onChange={handleChange} class="shadow-sm border text-black lg:w-[600px] lg:mx-28 bg-white border-gray-300  text-sm rounded-lg  block w-[100%]   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light" placeholder="Akshay khot" required />
            <p className="text-red-500 lg:mx-32">{errors.name}</p>
            
          </div>
          <div class="mb-5 space-y-3">
            <label for="email" class=" text-sm font-medium lg:mx-28 text-black dark:text-white"> Email <span className=' text-red-900 text-x'>*</span></label>
              <input type="email" id="email" name="email"
                autoComplete='off'
          value={forlgata.email}
          onChange={handleChange} class="shadow-sm border text-black lg:w-[600px]  bg-white border-gray-300  text-sm rounded-lg  block w-[100%] lg:mx-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light" placeholder="avkhot@gmail.com" required />
         <p className="text-red-500 lg:mx-28">{errors.email}</p>
          </div>

          <div className="mb-5 space-y-3 ">
            <label for="Name" class="  text-sm font-medium lg:mx-28 text-black dark:text-white">Massage <span className=' text-red-900 text-x'>*</span></label>
              <textarea id="message" rows="12" name="message"
                autoComplete='off'
          value={forlgata.message}
          onChange={handleChange} class="block p-2.5  text-sm text-black lg:w-[600px]  bg-white w-[100%] lg:mx-28  rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Massage..." required></textarea>
          <p className="text-red-500 lg:mx-28">{errors.message}</p>
          </div>
          <div className="  flex justify-center ">
            <input type="submit" value="Send" className='cursor-pointer bg-[#88A7FF] border mt-4 text-2xl p-2 rounded-3xl lg:mx-24 flex justify-end' />
              
        </div>
        </div>
          
        </div>

      </div>
    </form>
  );
}

export default Contact