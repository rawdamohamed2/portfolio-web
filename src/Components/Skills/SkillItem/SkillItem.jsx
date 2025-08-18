import React from 'react'

export default function SkillItem({skill , Tool}) {
    if(Tool){
      return(
        
      <div className="card bg-cricleColor flex items-center gap-0 justify-center border border-fontColor/30 rounded-2xl px-4 py-2">
        <h1 className="card-title text-effectColor"><img src={Tool.icon} alt={Tool.title} className=" inline-block w-[30px]" /></h1>
        <h3 className="card-text text-secondfontColor text-xl duration-[0.5s,0s] transition-all ps-1">{Tool.title}</h3>
      </div>
    )}
    else{
      return (
        <div className='card bg-cricleColor flex items-center gap-0 justify-center border border-fontColor/30 rounded-2xl px-4 py-2'> 
          <h1 className="card-title text-effectColor text-4xl">{skill.icon.startsWith('fa')||skill.icon.includes("fa-brands")?<i className={`${skill.icon} card-img-top`}></i>:<img src={skill.icon} alt={skill.title} className=" inline-block w-[40px]" />}</h1>
          <h3 className="card-text text-secondfontColor text-xl duration-[0.5s,0s] transition-all ps-1 ">{skill.title}</h3>
        </div>
   )
    }
  
}
