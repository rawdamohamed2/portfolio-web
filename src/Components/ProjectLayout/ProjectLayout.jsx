import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function ProjectLayout() {
  return (
    <div  className="min-h-dvh py-16 bg-SecondbgColor overflow-hidden">
        <div className="container mx-auto overflow-hidden">
            <div className="haederProjects pb-10 w-full" data-aos="zoom-in" data-aos-delay="200">
                <h1 className=" py-2 text-4xl font-bold text-center relative after:content-['']
                        after:block lg:after:w-[27%] md:after:w-[30%] sm:after:w-[40%] after:w-full after:mx-auto after:h-[0.2px]
                        after:bg-hoverBtn md:after:mt-6 after:mt-4 tracking-widest mb-2"><span className="text-effectColor">Pro</span>jects</h1>
                <div className="flex justify-center items-center gap-2 mb-6">
                    <div className="h-0.5 w-12 bg-effectColor"></div>
                    <div className="w-2 h-2 rounded-full border-2 border-effectColor"></div>
                    <div className="h-0.5 w-12 bg-effectColor"></div>
                </div>
                <p className="text-center text-secondfontColor font-semibold md:text-xl text-lg pt-4 ">Here are some of my projects.</p>

                <div className="flex justify-center mt-9">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `md:mx-2 mx-0 text-md px-3 py-2 rounded-lg bg-bgColor/60 md:mt-0 mt-3 md:me-2 me-0 featurelink text-effectColor ${
                                isActive
                                    ? "border-2 border-effectColor p-2 rounded-2xl  text-fontColor"
                                    : "hover:text-fontColor border-none"
                            }`
                        }
                    >
                        ALL
                    </NavLink>
                    <NavLink
                        to="/reactprojects"
                        className={({ isActive }) =>
                            `md:mx-2 mx-0 text-md px-3 py-2 rounded-lg bg-bgColor/60 md:mt-0 mt-3 md:me-2 me-0 featurelink text-effectColor ${
                                isActive
                                    ? "border-2 border-effectColor p-2 rounded-2xl bg-bgColor/20  text-fontColor"
                                    : "hover:text-fontColor border-none"
                            }`
                        }
                    > REACT
                    </NavLink>
                    <NavLink
                        to="/vanillaprojects"
                        className={({ isActive }) =>
                            `md:mx-2 mx-0 text-md px-3 py-2 rounded-lg bg-bgColor/60 md:mt-0 mt-3 md:me-2 me-0 featurelink text-effectColor ${
                                isActive
                                    ? "border-2 border-effectColor p-2 rounded-2xl bg-bgColor/20  text-fontColor"
                                    : "hover:text-fontColor border-none"
                            }`
                        }
                    > VANILLA JS
                    </NavLink>
                    <NavLink
                        to="/nextprojects"
                        className={({ isActive }) =>
                            `md:mx-2 mx-0 text-md px-3 py-2 rounded-lg bg-bgColor/60 md:mt-0 mt-3 md:me-2 me-0 featurelink text-effectColor ${
                                isActive
                                    ? "border-2 border-effectColor p-2 rounded-2xl bg-bgColor/20  text-fontColor"
                                    : "hover:text-fontColor border-none"
                            }`
                        }
                    > Next
                    </NavLink>
                </div>
            </div >


            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-9 md:gap-x-4 gap-x-9 overflow-hidden py-10 md:px-2 px-0'>
                <Outlet ></Outlet>
            </div>

        </div>
    </div>
  )
}
