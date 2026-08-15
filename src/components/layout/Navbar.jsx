import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "@/components/common/ThemeToggle.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    { label: "Skills", path: "/skills" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${scrolled ? "navbar-scrolled" : "navbar-default"}`}
    >
      <div className="container mx-auto f md:gap-4 flex justify-between items-center lg:p-6 py-5 ">
        <div className="logo">
          <p className="logoFont text-4xl font-bold hover:text-effectColor transition-all duration-150">
            Rawda
          </p>
        </div>
        <nav className="nav pt-5 md:pt-0 flex ">
          <ul
            className={`flex md:gap-3 gap-2 md:flex-row flex-col md:static fixed md:bg-transparent md:h-auto h-[100vh] top-0 end-0 w-[50%] md:w-auto z-10 transition-all duration-500
                    ${open ? "translate-x-0" : "translate-x-full"} md:translate-x-0 md:justify-normal justify-center md:px-0 px-9 md:bg-transparent bg-navColor`}
          >
            {navLinks.map((link) => (
              <div>
                <li key={link.label}>
                  <Link
                    to={link.path}
                    activeClass="active"
                    className="hover:text-effectColor transition-all duration-150 cursor-pointer"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </li>
                <hr className="md:hidden w-full bg-effectColor p-[0.3px] my-1" />
              </div>
            ))}

            <div className="icons flex flex-row items-center gap-3 md:px-4 px-1 ">
              <li>
                <a
                  href="https://github.com/rawdamohamed2"
                  className="text-xl hover:text-effectColor transition-all duration-150 md:ps-1 ps-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-effectColor rounded"
                >
                  <i className="fa-brands fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rawda-mohamed-2/"
                  className="text-xl hover:text-effectColor transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-effectColor rounded"
                >
                  <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <ThemeToggle />
              </li>
            </div>

            <li>
              <button
                aria-label="nav.closeMenu"
                className="md:hidden hover:text-effectColor bg-red-400 text-2xl absolute top-5 right-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-effectColor rounded"
                onClick={toggleMenu}
              >
                <i className="fa-solid fa-xmark" aria-hidden="true"></i>
              </button>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="hover:text-effectColor text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-effectColor rounded"
            onClick={toggleMenu}
          >
            <i
              className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
