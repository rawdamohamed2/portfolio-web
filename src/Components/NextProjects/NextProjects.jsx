import React from 'react'
import ProjectItem from "../Projects/ProjectItem/ProjectItem.jsx";

const NextProjects = ({nextprojects}) => {
    return (
        <>
            {nextprojects.map((project,index)=>{return <ProjectItem key={index} project={project}/>;})}
        </>
    )
}
export default NextProjects;
