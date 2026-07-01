import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "home", offset: -100 },
    { name: "About", to: "about", offset: -90 },
    { name: "Education", to: "education", offset: -90 },
    { name: "Projects", to: "projects", offset: -100 },
    { name: "Skills", to: "skills", offset: -100 },
    { name: "Contact", to: "contact", offset: -100 },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "navbar-scrolled shadow-md" : "navbar-default"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center lg:px-6 px-4 py-5">
        <div className="logo">
          <p className="logoFont text-4xl font-bold hover:text-effectColor transition-all duration-150 cursor-pointer">
            Rawda
          </p>
        </div>

        <nav className="nav pt-5 md:pt-0 flex">
          <ul
            className={`flex md:gap-4 gap-2 md:flex-row flex-col md:static fixed md:bg-transparent md:h-auto h-[100vh] top-0 end-0 w-[60%] sm:w-[50%] md:w-auto z-10 transition-transform duration-500
            ${
              open ? "translate-x-0" : "translate-x-full"
            } md:translate-x-0 md:justify-normal justify-center md:px-0 px-9 bg-MColor/95 shadow-lg md:shadow-none`}
          >
            {/* Close Button (Mobile) */}
            <li className="md:hidden absolute top-5 right-5">
              <button
                className="hover:text-effectColor text-3xl"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </li>

            {navLinks.map((link, index) => (
              <React.Fragment key={index}>
                <li>
                  <Link
                    to={link.to}
                    spy={true}
                    activeClass="active"
                    offset={link.offset}
                    className="hover:text-effectColor transition-all duration-150 cursor-pointer block md:inline-block py-2 md:py-0"
                    smooth={true}
                    duration={500}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                </li>

                {index !== navLinks.length - 1 && (
                  <li className="md:hidden w-full bg-effectColor/30 h-[1px] my-1"></li>
                )}
              </React.Fragment>
            ))}

            <li className="flex flex-row gap-4 md:px-4 px-1 mt-4 md:mt-0 items-center justify-center md:justify-start">
              <a
                href="https://github.com/rawdamohamed2"
                target="_blank"
                rel="noreferrer"
                className="text-2xl md:text-xl hover:text-effectColor transition-all duration-150"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/rawda-mohamed-2/"
                target="_blank"
                rel="noreferrer"
                className="text-2xl md:text-xl hover:text-effectColor transition-all duration-150"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="md:hidden hover:text-effectColor text-2xl z-20"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
}
