import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  let Toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <nav className="nav pt-5 md:pt-0 flex " aria-label={t("nav.home")}>
          <ul
            className={`flex md:gap-3 gap-2 md:flex-row flex-col md:static fixed md:bg-transparent md:h-auto h-[100vh] top-0 end-0 w-[50%] md:w-auto z-10 transition-all duration-500
                    ${open ? "translate-x-0" : "translate-x-full"} md:translate-x-0 md:justify-normal justify-center md:px-0 px-9 md:bg-transparent bg-navColor`}
          >
            <li>
              <Link
                to="home"
                spy={true}
                activeClass="active"
                offset={-100}
                className="hover:text-effectColor transition-all duration-150 cursor-pointer"
                smooth={true}
                duration={500}
                onClick={Toggle}
              >
                {t("nav.home")}
              </Link>
            </li>
            <hr className="md:hidden w-full bg-effectColor p-[0.3px] my-1" />
            <li>
              <Link
                to="about"
                spy={true}
                activeClass="active"
                offset={-90}
                className="hover:text-effectColor transition-all duration-150 cursor-pointer"
                smooth={true}
                duration={500}
                onClick={Toggle}
              >
                {t("nav.about")}
              </Link>
            </li>
            <hr className="md:hidden w-full bg-effectColor p-[0.3px]  my-1" />
            <li>
              <Link
                to="education"
                spy={true}
                activeClass="active"
                offset={-90}
                className="hover:text-effectColor transition-all duration-150 cursor-pointer"
                smooth={true}
                duration={500}
                onClick={Toggle}
              >
                {t("nav.education")}
              </Link>
            </li>
            <hr className="md:hidden w-full bg-effectColor p-[0.3px]  my-1" />
            <li>
              <Link
                to="projects"
                spy={true}
                activeClass="active"
                offset={-100}
                className="hover:text-effectColor transition-all duration-150 cursor-pointer"
                smooth={true}
                duration={500}
                onClick={Toggle}
              >
                {t("nav.projects")}
              </Link>
            </li>
            <hr className="md:hidden w-full bg-effectColor p-[0.3px] my-1" />
            <li>
              <Link
                to="skills"
                spy={true}
                activeClass="active"
                offset={-100}
                className="hover:text-effectColor transition-all duration-150 cursor-pointer"
                smooth={true}
                duration={500}
                onClick={Toggle}
              >
                {t("nav.skills")}
              </Link>
            </li>
            <hr className="md:hidden w-full bg-effectColor p-[0.3px] my-1" />
            <li>
              <Link
                to="contact"
                spy={true}
                activeClass="active"
                offset={-100}
                className="hover:text-effectColor transition-all duration-150 cursor-pointer"
                smooth={true}
                duration={500}
                onClick={Toggle}
              >
                {t("nav.contact")}
              </Link>
            </li>
            <hr className="md:hidden w-full bg-effectColor p-[0.3px] my-1" />
            <div className="icons flex flex-row items-center gap-3 md:px-4 px-1 ">
              <li>
                <a
                  href="https://github.com/rawdamohamed2"
                  aria-label={t("social.github")}
                  className="text-xl hover:text-effectColor transition-all duration-150 md:ps-1 ps-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-effectColor rounded"
                >
                  <i className="fa-brands fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rawda-mohamed-2/"
                  aria-label={t("social.linkedin")}
                  className="text-xl hover:text-effectColor transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-effectColor rounded"
                >
                  <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <ThemeToggle />
              </li>
              {/*<li>*/}
              {/*  <LanguageSwitcher />*/}
              {/*</li>*/}
            </div>

            <li>
              <button
                aria-label={t("nav.closeMenu")}
                className="md:hidden hover:text-effectColor text-2xl absolute top-5 right-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-effectColor rounded"
                onClick={Toggle}
              >
                <i className="fa-solid fa-xmark" aria-hidden="true"></i>
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          {/*<ThemeToggle />*/}
          {/*<LanguageSwitcher />*/}
          <button
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={open}
            className="hover:text-effectColor text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-effectColor rounded"
            onClick={Toggle}
          >
            <i className="fa-solid fa-bars" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
