import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
const Animation = () => {
    useEffect(() => {
        AOS.init({ duration: 5000  });
      }, []);
  return (
    <div></div>
  )
}

export default Animation