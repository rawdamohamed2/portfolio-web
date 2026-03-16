import React, { useEffect, useState } from 'react'
import { Link, Element } from 'react-scroll';


export default function Home() {
  const fullText = "Developer";
  const speed = 100;       
  const deleteSpeed = 50;  
  const delay = 1000;      

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [i, setI] = useState(0);

  useEffect(() => {
    let typingTimeout;
    if (!isDeleting && i <= fullText.length) {
      typingTimeout = setTimeout(() => {
        setText(fullText.substring(0, i));
        setI(i + 1);
      }, speed);
    } else if (isDeleting && i >= 0) {
      typingTimeout = setTimeout(() => {
        setText(fullText.substring(0, i));
        setI(i - 1);
      }, deleteSpeed);
    } else {
      typingTimeout = setTimeout(() => {
        setIsDeleting(!isDeleting);
      }, delay);
    }
    return () => {
      clearTimeout(typingTimeout);
    }
  }, [i, isDeleting]);

    
  return (
    <Element name="home" className='relative overflow-hidden min-h-[100dvh] bg-MainbgColor w-dvh flex items-center justify-center' >
      <div className='overflow-hidden md:visible invisible  md:h-[600px] h-[320px] md:w-[600px] w-[320px] bg-cricleColor absolute end-[-60px] bottom-[-90px] rounded-[50%] opacity-25 rotate-35 z-0'>
      </div>
      <div className='overflow-hidden md:h-[550px] h-[300px] md:w-[550px] w-[300px] bg-cricleColor absolute start-[-90px] top-[-60px] rounded-[50%] opacity-25 rotate-35 z-0'>
      </div>
      <div className='container relative flex items-center justify-center text-center mx-auto' data-aos="fade-down" data-aos-delay="600">
        <div className="contant">
            <h1 className= 'md:text-[4rem] text-[2.6rem] font-medium'><span className='logoFont block  span'>Hello,</span> 
               I'm Rawda Mohamed
            </h1>
            <h2 className="md:text-[2.5rem] text-[2.1rem] text-medium ">Web <span className='text-effectColor'>{text}</span><span className="cursor">|</span></h2>

            <div className="buttons mt-4 ">
              <Link to="projects" type="button" className='btn text-[1.23rem] text-effectColor md:px-5 px-4 py-2 rounded-lg shadow-[0px_0px_15px_#00FFF7] hover:text-fontColor hover:shadow-[0px_0px_30px_#00FFF7] hover:bg-bgColor '>Explore My Work</Link>
            </div>
                  
        </div>
      </div>
    </Element>
  )
}
