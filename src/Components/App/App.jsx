import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import Education from '../Education/Education'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import AnimatedBg from '../AnimatedBg/AnimatedBg'
import Footer from '../Footer/Footer'
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
      AOS.init({
        duration: 1000,    
      });
    }, []);
  return (
    <>
      <AnimatedBg/>
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Projects/>
      <Skills/>
      {/* <Skillop/> */}
      <Contact/>
      <Footer/>
      
    </>
    
    
  )
}
