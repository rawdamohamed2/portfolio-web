import React, { useEffect } from "react";
import Navbar from "@/Components/layout/Navbar.jsx";
import AppRoutes from "@/app/AppRoutes.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useThemeStore } from "@/store/useThemeStore.js";

export default function App() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  return (
    <div className="min-h-dvh">
      <Navbar />

      <main>
        <AppRoutes />
      </main>
    </div>
  );
}
