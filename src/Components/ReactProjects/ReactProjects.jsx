import React from 'react'
import ProjectItem from '../Projects/ProjectItem/ProjectItem';
export default function ReactProjects({reactProjects}) {
  console.log(reactProjects);
  
  return (
    <>
      {reactProjects.map((project,index)=>{return <ProjectItem key={index} project={project}/>;})}
    </>
  )
}
