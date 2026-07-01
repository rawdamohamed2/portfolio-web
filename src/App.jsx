import React, { useEffect } from "react";
import Navbar from "./components/common/Navbar.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import AnimatedBg from "./components/AnimatedBg/AnimatedBg.jsx";
import Footer from "./components/common/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutMe from "./pages/AboutMe.jsx";
import Experience from "./pages/Experience.jsx";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <AnimatedBg />
      <Navbar />
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      {/* <Skillop/> */}
      <Contact />
      <Footer />
    </>
  );
}
