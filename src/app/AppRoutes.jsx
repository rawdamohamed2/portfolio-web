import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home.jsx";
import About from "@/pages/AboutMe.jsx";
import Experience from "@/pages/Experience.jsx";
import Skills from "@/pages/Skills.jsx";
import Projects from "@/pages/Projects.jsx";
import Contact from "@/pages/Contact.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
