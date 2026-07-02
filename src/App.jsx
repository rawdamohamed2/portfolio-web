import React, { useEffect } from "react";
import Navbar from "@/components/common/Navbar.jsx";
import Projects from "@/pages/Projects.jsx";
import Skills from "@/pages/Skills.jsx";
import Contact from "@/pages/Contact.jsx";
import Home from "@/pages/Home.jsx";
import AnimatedBg from "@/components/AnimatedBg/AnimatedBg.jsx";
import Footer from "@/components/common/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutMe from "@/pages/AboutMe.jsx";
import Experience from "@/pages/Experience.jsx";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "@/store/useThemeStore";

export default function App() {
  const { t } = useTranslation();
  const theme = useThemeStore((state) => state.theme);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
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
