import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function ProjectLayout() {
  return (
    <div  className="min-h-dvh py-16 bg-SecondbgColor overflow-hidden">
      <div className="container mx-auto overflow-hidden">
            <div className="haederProjects pb-10 w-full" data-aos="zoom-in" data-aos-delay="200">
              <h1 className=" py-2 md:text-[3.3rem] text-4xl font-bold text-center"><span className="text-effectColor">Pro</span>jects</h1>
              <p className="text-center text-secondfontColor font-semibold md:mb-4 mb-1 md:text-xl text-lg py-4  ">Here are some of my projects.</p>   
              <div className='flex items-center justify-center mt-[80px]'>
                  <div className="feature border border-fontColor/90 md:py-[12px] py-[10px] px-2 rounded-lg  mx-auto">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) =>
                          `md:mx-2 mx-0 text-md px-2 py-1 rounded-lg md:mt-0 mt-3 md:me-2 me-0 featurelink text-effectColor ${
                            isActive 
                              ? "border-b-2 border-effectColor rounded-none text-fontColor" 
                              : "hover:text-fontColor"
                          }`
                        } 
                      >
                        ALL
                    </NavLink>
                    <NavLink to="/reactprojects"  className={({ isActive }) =>
                          `md:mx-2 mx-0 text-md px-2 py-1 rounded-lg md:mt-0 mt-3 md:me-2 me-0 featurelink text-effectColor ${
                            isActive 
                              ? "border-b-2 border-effectColor rounded-none text-fontColor" 
                              : "hover:text-fontColor"
                          }`
                        }> REACT 
                    </NavLink>
                    <NavLink to="/vanillaprojects"  className={({ isActive }) =>
                          `md:mx-2 mx-0 text-md px-2 py-1 rounded-lg md:mt-0 mt-3 md:me-2 me-0 featurelink text-effectColor ${
                            isActive 
                              ? "border-b-2 border-effectColor rounded-none text-fontColor" 
                              : "hover:text-fontColor"
                          }`
                        }> VANILLA JS
                    </NavLink>
                  </div>
              </div>
            </div >
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-9 md:gap-x-4 gap-x-9 overflow-hidden py-10 md:px-2 px-0'>
              <Outlet ></Outlet>
            </div>
         
      </div>
    </div>
  )
}
