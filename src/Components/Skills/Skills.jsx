import React from 'react'
import axios from 'axios';
import  { useEffect, useState } from 'react'
import SkillItem from './SkillItem/SkillItem';
import { Element } from 'react-scroll';
import VanillaTilt from 'vanilla-tilt';
export default function Skills() {
  let [skills,setSkills]=useState([]);
  let [Tools,setTools]=useState([]);
  let [bSkills,setBSkills]=useState([]);
    async function getSkills(media,setmedia){
    try {
      let response = await axios.get(`https://raw.githubusercontent.com/rawdamohamed2/my-Portfolio-data/refs/heads/main/${media}.json`);
        setmedia(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(()=>{
    getSkills('Tools',setTools);
    getSkills('skills',setSkills);
    getSkills('backendSkills',setBSkills);
    const elements = document.querySelectorAll("[data-tilt]");
        VanillaTilt.init(elements, {
        max: 10,
        speed: 1000,   
        scale: 1.02,   
    });
    return () => {
      elements.forEach(el => el.vanillaTilt.destroy());
    };
},[])

  return (
    <Element name="skills" className=" py-5 bg-MainbgColor overflow-hidden">
          <div className="container mx-auto">
    
          <div className="haederProjects pb-7 text-center" data-aos="zoom-in" data-aos-delay="500">
            <h1 className=" py-2 text-4xl font-bold text-center relative after:content-['']
                        after:block lg:after:w-[27%] md:after:w-[30%] sm:after:w-[40%] after:w-full after:mx-auto after:h-[0.2px]
                        after:bg-hoverBtn md:after:mt-6 after:mt-4 tracking-widest mb-2"><span className="text-effectColor">Sk</span>ills </h1>
              <div className="flex justify-center items-center gap-2 mb-6">
                  <div className="h-0.5 w-12 bg-effectColor"></div>
                  <div className="w-2 h-2 rounded-full border-2 border-effectColor"></div>
                  <div className="h-0.5 w-12 bg-effectColor"></div>
              </div>
          </div>

              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-14 gap-y-10 py-4 md:py-4 md:px-0 px-4 mb-6" data-aos="zoom-in" data-aos-delay="500">
                <div className="skill-item flex flex-col md:gap-5 gap-3 items-center justify-center h-fit skillCradHover border-0 w-full transform duration-[0.5s,0s] transition-all hover:scale-[1.02] bg-MainbgColor shadow-[0px_0px_6px_#00FFF7]  rounded-2xl px-[40px] py-4" data-tilt data-tilt-max="10">
                    <h1 className=' text-3xl pb-3 pt-2 text-center text-secondfontColor'>Front-End Development</h1>
                    <div className='flex flex-wrap items-center justify-center h-fit gap-3'>
                        {
                            skills.map((skill,index)=>{return <SkillItem key={index} skill={skill}/>;})
                        }
                    </div>
                    
                </div>
                  <div className="tools flex flex-col md:gap-5 gap-3 items-center justify-center h-fit skillCradHover border-0 w-full transform duration-[0.5s,0s] transition-all hover:scale-[1.02] bg-MainbgColor shadow-[0px_0px_6px_#00FFF7]  rounded-2xl px-[70px] py-4 " data-tilt data-tilt-max="10">
                      <h1 className='text-3xl pb-3 pt-2 text-center text-secondfontColor'>Back-End Development</h1>
                      <div className="flex flex-wrap justify-center h-fit gap-3">
                          {
                              bSkills.map((Tool,index)=>{return <SkillItem key={index} Tool={Tool}/>;})
                          }
                      </div>
                  </div>
                <div className="tools flex flex-col md:gap-5 gap-3 items-center justify-center h-fit skillCradHover border-0 w-full transform duration-[0.5s,0s] transition-all hover:scale-[1.02] bg-MainbgColor shadow-[0px_0px_6px_#00FFF7]  rounded-2xl px-[70px] py-4 " data-tilt data-tilt-max="10">
                      <h1 className='text-3xl pb-3 pt-2 text-center text-secondfontColor'>Tools & Technologies</h1>
                    <div className="flex flex-wrap justify-center h-fit gap-3">
                        {
                            Tools.map((Tool,index)=>{return <SkillItem key={index} Tool={Tool}/>;})
                        }
                    </div>
                    
                </div>

              </div>
          </div>
          
        </Element>
  )
}
