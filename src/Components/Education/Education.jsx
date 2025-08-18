import { Link, Element } from 'react-scroll';

export default function Education() {
 

  return (
    <Element name="education" id="Education" className=" py-8 bg-MainbgColor flex items-center justify-center">
      <div className="container">

        <div className="headercontant pb-4" data-aos="zoom-in" data-aos-delay="500" >
          <h1 className="py-2 md:text-[3.3rem] text-4xl font-bold text-center relative after:content-[''] after:block lg:after:w-[27%] md:after:w-[40%] sm:after:w-[40%] after:w-full after:mx-auto after:h-[0.2px] after:bg-hoverBtn md:after:mt-6 after:mt-4"><span className="text-effectColor">Edu</span>cation</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 py-1  ">

          <div className='flex items-center justify-center px-2 py-4' data-aos="fade-up" data-aos-delay="500" >
            <div className='text-center md:max-h-[300px] min-h-[160px] w-full p-3 hover:shadow-[0px_0px_15px_#00FFF7] transform hover:scale-[1.06] rounded-xl transition-all duration-500'>
              <h5 className="text-xl">Bachelor of Computer Science</h5>
              <p className="font-light md:mt-4 mt-1 md:mb-1 mb-0 text-[1.03rem]">Faculty of Science, Alexandria University</p>
              <p className="font-light mb:md-1 mb-0 text-[1.03rem]">Fourth-Year Student <span className="text-effectColor">|</span> [ 2022 - 2026 ]</p>
              <p className="font-light mb:md-1 mb-0 text-[1.03rem]">GPA: <span className=""> 3.73 </span></p>
            </div>
          </div>
          <div className='flex items-center justify-center px-2 ' data-aos="fade-up" data-aos-delay="500" >
            <div className='text-center md:max-h-[300px] min-h-[160px] w-full p-3 hover:shadow-[0px_0px_15px_#00FFF7] transform hover:scale-[1.06] rounded-xl transition-all duration-500'>
              <h5 className="text-xl">Frontend Developer Internship</h5>
              <p className="font-light md:mt-4 mt-1 md:mb-1 mb-0 text-[1.03rem]">Built real projects using React.js and JavaScript.</p>
              <p className="font-light mb:md-1 mb-0 text-[1.03rem]">Code Sentinel <span className="text-effectColor">|</span> [ June – July 2025 ]</p>
            </div>
          </div>
          <div className='flex items-center justify-center px-2 ' data-aos="fade-up" data-aos-delay="500" >
            <div className='text-center md:max-h-[300px] min-h-[160px] w-full p-3 hover:shadow-[0px_0px_15px_#00FFF7] transform hover:scale-[1.06] rounded-xl transition-all duration-500'>
              <h5 className="text-xl">Web Design & Freelancing Internship</h5>
              <p className="font-light md:mt-4 mt-1 md:mb-1 mb-0 text-[1.03rem]">NTI – Ministry of Communications, Egypt </p>
              <p className="font-light mb:md-1 mb-0 text-[1.03rem]">Learned design principles and freelancing skills.</p>
              <p className="font-light mb:md-1 mb-0 text-[1.03rem]"> 2025</p>
            </div>
          </div>
        </div>   

      </div>
    </Element>
  )
}