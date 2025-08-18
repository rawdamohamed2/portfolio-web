import React from 'react';
import ProjectItem from '../Projects/ProjectItem/ProjectItem';
export default function AllProjects({projects}) {
  return (
    <>

      {projects.map((project,index)=>{return <ProjectItem key={index} project={project}/>;})}

    </>
  )
}
