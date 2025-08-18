import React from 'react'

export default function Footer() {
  return (
    <div className='container py-5 mx-auto'>
        <div className="grid  grid-cols-1 gap-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="text-center">
            <h3 className="md:text-3xl text-2xl py-3 ">Thank you for visiting <span className="text-effectColor">my portfolio</span> .</h3>
            <h3 className="text-2xl md:text-3xl py-3 relative after:content-[''] after:block after:w-full after:m-auto after:h-[0.2px] after:bg-effectColor after:mt-5">I hope my work has given you a clear idea of my skills and passion.</h3>
            </div>
            <div className="text-center">
              <a href="https://www.linkedin.com/in/rawda-mohamed-367a77370?"><i className="fa-brands fa-linkedin-in hover:text-effectColor transition-all duration-150 px-2 text-3xl"></i></a>
              <a href="https://github.com/rawdamohamed2"><i className="fa-brands fa-github hover:text-effectColor transition-all duration-150 px-2 text-3xl"></i></a>
            </div>
        </div>
    </div>
  )
}
