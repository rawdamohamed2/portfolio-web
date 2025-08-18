import React, {useState ,useEffect } from 'react'
import { Link, Element, Events } from "react-scroll";
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    let Toggle=()=>{
        setOpen(!open);
    }
    useEffect(() => {
  const handleScroll = () => {
        if (window.scrollY > 0) {
        setScrolled(true);
        } else {
        setScrolled(false); 
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 ${scrolled ? 'navbar-scrolled' : 'navbar-default' }`}>
        <div className='container mx-auto  f md:gap-4  mx-auto flex justify-between items-center lg:p-6 py-5 '>
            <div className="logo">
                <p className='logoFont text-4xl font-bold hover:text-effectColor transition-all duration-150'>Rawda</p>
            </div>
            <nav className="nav pt-5 md:pt-0 flex ">
                <ul className={`flex md:gap-3 gap-2 md:flex-row flex-col md:static fixed md:bg-transparent md:h-auto h-[100vh] top-0 end-0 w-[50%] md:w-auto z-10 transition-all duration-500
                    ${open ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:justify-normal justify-center md:px-0 px-9 bg-MColor/90 `}>
                    <li><Link to="home" spy={true} activeClass="active" offset={-100} className='hover:text-effectColor transition-all duration-150 cursor-pointer' smooth={true} duration={500} >Home</Link></li>
                    <hr className='md:hidden w-full bg-effectColor p-[0.3px] my-1' />
                    <li><Link to="about" spy={true} activeClass="active" offset={-90} className='hover:text-effectColor transition-all duration-150 cursor-pointer' smooth={true} duration={500}>About</Link></li>
                    <hr className='md:hidden w-full bg-effectColor p-[0.3px] my-1' />
                    <li><Link to="education" spy={true} activeClass="active" offset={-90} className='hover:text-effectColor transition-all duration-150 cursor-pointer' smooth={true} duration={500}>Education</Link></li>
                    <hr className='md:hidden w-full bg-effectColor p-[0.3px]  my-1' />
                    <li><Link to="projects" spy={true} activeClass="active" offset={-100} className='hover:text-effectColor transition-all duration-150 cursor-pointer' smooth={true} duration={500}>Projects</Link></li>
                    <hr className='md:hidden w-full bg-effectColor p-[0.3px] my-1' />
                    <li><Link to="skills" spy={true} activeClass="active" offset={-100} className='hover:text-effectColor transition-all duration-150 cursor-pointer' smooth={true} duration={500}>Skills</Link></li>
                    <hr className='md:hidden w-full bg-effectColor p-[0.3px] my-1' />
                    <li><Link to="contact" spy={true} activeClass="active" offset={-100} className='hover:text-effectColor transition-all duration-150 cursor-pointer' smooth={true} duration={500}>Contact</Link></li>
                    <hr className='md:hidden w-full bg-effectColor p-[0.3px] my-1' />
                    <div className="icons flex flex-row gap-3 md:px-4 px-1 ">
                        <li><a href="https://github.com/rawdamohamed2" className='text-xl hover:text-effectColor transition-all duration-150 md:ps-1 ps-0 '><i className="fa-brands fa-github"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/rawda-mohamed-2/" className='text-xl hover:text-effectColor transition-all duration-150'><i className="fa-brands fa-linkedin"></i></a></li>
                    </div>

                    <li><button className='md:hidden hover:text-effectColor text-2xl absolute top-5 right-5' onClick={Toggle}><i className="fa-solid fa-xmark"></i></button></li>
                </ul>
   
            </nav> 
            <button className='md:hidden hover:text-effectColor text-2xl' onClick={Toggle}><i className="fa-solid fa-bars"></i></button>
        </div>
    </header>
  )
}
