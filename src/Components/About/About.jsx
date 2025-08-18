import axios from "axios"
import { useEffect, useState } from "react";
import { Link, Element } from 'react-scroll';
export default function About() {
    let [profileImage,setprofileImage]=useState({});
    async function getprofilio(){
      let profile = await axios.get('https://raw.githubusercontent.com/rawdamohamed2/my-Portfolio-data/refs/heads/main/profile.json')
      setprofileImage(profile.data[0]);
    }
    useEffect(()=>{
      getprofilio();
    },[])
  return (
    <Element name="about" className="pt-9 pb-5 bg-SecondbgColor flex items-center">
        <div className="container h-full mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4 gap-2 items-center" >

                <div className="lg:col-span-2 md:col-span-2 col-span-1" data-aos="fade-up" data-aos-delay="500" >        
                    <div className="AboutMeContant w-full">
                        <div className="headerContant text-center" >
                            <h1 className="md:text-[3.3rem] text-4xl font-bold py-3 relative after:content-[''] after:block lg:after:w-[30%] md:after:w-[50%] sm:after:w-[30%] after:w-[50%] after:mx-auto after:h-[0.2px] after:bg-hoverBtn after:rounded md:after:mt-6 after:mt-4">About <span className="text-effectColor">Me</span></h1>   
                        </div>
                        <div className="content md:px-3 px-0 md:py-3 py-7 " >
                            <p className="text-xl lg:text-start text-center ">I'm Rawda Mohamed, a Frontend Developer and a fourth-year Computer Science student. 
                                I specialize in building clean, responsive, and user-friendly websites using HTML, CSS, Bootstrap, JavaScript, and jQuery.
                                I enjoy transforming ideas into interactive web experiences and constantly strive to improve my skills and learn new technologies.
                            </p>
                            <p className=" text-xl lg:text-start text-center py-3 relative after:content-[''] after:block after:w-full after:m-auto after:h-[0.2px] after:bg-gray-500 after:rounded after:mt-5">My goal is to blend creativity with cutting-edge technology, delivering web applications that leave a lasting impression.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-7">

                                <ul className="col-span-1 lg:text-start text-center">
                                  <li className="fontdisplay md:text-lg text-md py-2">Name: <span className="text-secondfontColor">Rawda Mohamed</span></li>
                                  <li className="fontdisplay py-2 md:text-lg text-md">Age: <span className="text-secondfontColor">21 Year</span></li>
                                  <li className="fontdisplay py-2 md:text-lg text-md">Email: <span className="text-secondfontColor">rawda.singab1@gmail.com</span></li>
                                </ul>

                                <ul className="col-span-1 lg:text-start text-center">
                                    <li className="fontdisplay py-2 md:text-lg text-md">Job Title: <span className="text-secondfontColor">Frontend Developer</span></li>
                                    <li className="fontdisplay py-2 md:text-lg text-md">Location: <span className="text-secondfontColor">Alex, Eygpt</span></li>       
                                </ul>

                                <div className="py-3 px-2 lg:text-start text-center col-span-1 md:col-span-2 lg:mt-0 md:mt-2 mt-0 ">
                                    <a href="https://www.linkedin.com/in/rawda-mohamed-367a77370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className=" border border-fontColor  text-md text-effectColor p-2 rounded-lg md:mt-0 mt-3 md:me-2 me-0 hover:border-effectColor hover:text-fontColor hover:shadow-[0px_0px_12px_#01cabc]"> My Linkedin</a>
                                    <a href="https://drive.google.com/file/d/1rpknOGf54qGh00DDHq0jsPPnftMhxnPa/view?usp=drive_link" className="border border-fontColor text-effectColor  text-md p-2 rounded-lg mt-md-0 mt-2 hover:border-effectColor hover:text-fontColor hover:shadow-[0px_0px_12px_#01cabc]">My Cv</a>
                                </div> 

                            </div> 

                        </div>
                    </div>
                </div>

                <div className='md:pt-2 pt-0 sm:pb-5 md:pb-1 min-h-[400px] lg:col-span-1 md:col-span-2 col-span-1' data-aos="fade-down" data-aos-delay="500">
                    <div className="relative w-full">
                        <div className='top-0 start-0 absolute h-[340px] w-full border-[8px] border-hoverBtn rounded-2xl shadow-[0px_0px_15px_#01cabc]'>
                        </div>
                        <div className='md:top-[20px] md:start-[20px] top-0 start-0 absolute h-[340px] w-full rounded-2xl'>
                            <img src={profileImage.profileImage} alt="My-Photo" className="w-full h-full rounded-2xl"/>
                        </div>
                    </div>
                </div>
                        
            </div>
      </div>
    </Element>
  )
}
