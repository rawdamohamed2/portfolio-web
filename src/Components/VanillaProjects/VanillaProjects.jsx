import React from 'react'
import ProjectItem from '../Projects/ProjectItem/ProjectItem';
export default function VanillaProjects({vanillaProjects}) {
  return (
    <>
        {vanillaProjects.map((project,index)=>{return <ProjectItem key={index} project={project}/>;})}
    </>
  )
}
