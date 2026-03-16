import axios from 'axios'
import React, { useEffect , useState} from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProjectLayout from '../ProjectLayout/ProjectLayout';
import AllProjects from '../AllProjects/AllProjects';
import VanillaProjects from '../VanillaProjects/VanillaProjects';
import ReactProjects from '../ReactProjects/ReactProjects';
import { Element } from 'react-scroll';
import NextProjects from "../NextProjects/NextProjects.jsx";

export default function Projects() {
  let [projects,setProjects]=useState([]);
  let [reactProjects,setReactProjects]=useState([]);
  let [vanillaProjects,setVanillaProjects]=useState([]);
  let [nextprojects,setNextProjects]=useState([]);

    async function getProjects(){
      let project =await axios.get('https://raw.githubusercontent.com/rawdamohamed2/my-Portfolio-data/refs/heads/main/Projects.json');
      setProjects(project.data);
      setReactProjects(project.data.filter((project)=>{return !project.Vanilla}));
      setVanillaProjects(project.data.filter((project)=>{return project.Vanilla}));
      setNextProjects(project.data.filter((project)=>{return project.Next}));
    }
    useEffect(()=>{
      getProjects();
    },[])

    let routers = createBrowserRouter([
     {path:'/', element:<ProjectLayout/>, children:[
      {index:true,element:<AllProjects projects={projects}/>},
      {path:'vanillaprojects',element:<VanillaProjects vanillaProjects={vanillaProjects}/>},
      {path:'nextprojects',element:<NextProjects nextprojects={nextprojects}/>},
      {path:'reactprojects',element:<ReactProjects reactProjects={reactProjects}/>},
    ]},
  ])

  return ( 
  <Element name="projects">
    <RouterProvider router={routers}/>
  </Element>
  )
}
