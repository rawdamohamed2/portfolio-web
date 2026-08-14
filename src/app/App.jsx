import React, { useEffect } from "react";
import Navbar from "@/Components/layout/Navbar.jsx";
import Footer from "@/Components/layout/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "@/store/useThemeStore.js";
import AppRoutes from "@/app/AppRoutes.jsx";
import AnimatedBg from "@/Components/AnimatedBg/AnimatedBg.jsx";

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
    <div className="min-h-dvh ">
      <AnimatedBg />
      <Navbar />

      <main>
        <AppRoutes />
      </main>
      {/*<Footer />*/}
    </div>
  );
}
