import React from 'react'
import { Link, Element } from 'react-scroll';
export default function Contact() {
  return (
    <Element name="contact" className=" py-5 bg-SecondbgColor">
          <div className="container mx-auto">
            <div className="contactheader py-4" data-aos="zoom-in" data-aos-delay="500">
              <h1 className=" py-2 text-4xl font-bold text-center relative after:content-['']
                        after:block lg:after:w-[30%] md:after:w-[30%] sm:after:w-[40%] after:w-full after:mx-auto after:h-[0.2px]
                        after:bg-hoverBtn md:after:mt-6 after:mt-4 tracking-widest mb-2">Let's Work <span className="text-effectColor">Together</span></h1>
                <div className="flex justify-center items-center gap-2 mb-6">
                    <div className="h-0.5 w-12 bg-effectColor"></div>
                    <div className="w-2 h-2 rounded-full border-2 border-effectColor"></div>
                    <div className="h-0.5 w-12 bg-effectColor"></div>
                </div>
            </div>
          
            <form className="grid grid-cols-1 gap-3"  action="https://getform.io/f/bejlmloa" method="POST" data-aos="fade-up" data-aos-delay="500">
             <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div className="">
                  <label htmlFor="inputName" className=" " >Name</label>
                  <input type="Name" className="w-full p-2 rounded-lg mt-2" id="inputName" name="name" placeholder='Enter your Name' required/>
                </div>
                <div className="">
                  <label htmlFor="inputEmail4" className="form-label " >Email</label>
                  <input type="email" className="w-full p-2 rounded-lg mt-2" id="inputEmail4" name="email" placeholder='Enter your Name' required/>
                </div>
             </div>
              
    
              <div className="col-md-12">
                <label htmlFor="exampleFormControlTextarea1" className="form-label " >Your Message</label>
                <textarea className="w-full p-2 rounded-lg mt-2" id="exampleFormControlTextarea1" name="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
    
              <div className="col-12 pt-2">
                <button type="submit" className="border border-fontColor text-effectColor  text-md p-2 rounded-lg mt-md-0 mt-2 hover:border-effectColor hover:text-fontColor hover:shadow-[0px_0px_12px_#01cabc]">Send Message</button>
              </div>
    
            </form>
          </div>
    </Element>
  )
}
