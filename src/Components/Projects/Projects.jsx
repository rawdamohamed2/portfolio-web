import axios from 'axios'
import React, { useEffect , useState} from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProjectLayout from '../ProjectLayout/ProjectLayout';
import AllProjects from '../AllProjects/AllProjects';
import VanillaProjects from '../VanillaProjects/VanillaProjects';
import ReactProjects from '../ReactProjects/ReactProjects';
import { Element } from 'react-scroll';

export default function Projects() {
  let [projects,setProjects]=useState([]);
  let [reactProjects,setReactProjects]=useState([]);
  let [vanillaProjects,setVanillaProjects]=useState([]);
    async function getProjects(){
      let project =await axios.get('https://raw.githubusercontent.com/rawdamohamed2/my-Portfolio-data/refs/heads/main/Projects.json');
      setProjects(project.data);
      setReactProjects(project.data.filter((project)=>{return !project.Vanilla}));
      setVanillaProjects(project.data.filter((project)=>{return project.Vanilla}));

    }
    useEffect(()=>{
      getProjects();
    },[])

    let routers = createBrowserRouter([
     {path:'/', element:<ProjectLayout/>, children:[
      {index:true,element:<AllProjects projects={projects}/>},
      {path:'vanillaprojects',element:<VanillaProjects vanillaProjects={vanillaProjects}/>},
      {path:'reactprojects',element:<ReactProjects reactProjects={reactProjects}/>},
    ]},
  ])

  return ( 
  <Element name="projects">
    <RouterProvider router={routers}/>
  </Element>
  )
}
