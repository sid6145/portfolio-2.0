import React from 'react'
import SkillCard from './SkillCard';
import "./style.css";

const skillsData = [
  {
    key: "HTML5",
    icon: "https://img.icons8.com/color/48/000000/html-5--v1.png"
  },
  {
    key: "CSS3",
    icon: "https://img.icons8.com/color/48/000000/css3.png"
  },
  {
    key: "JavaScript",
    icon: "https://img.icons8.com/color/48/000000/javascript--v1.png"
  },
  {
    key: "TypeScript",
    icon: "https://img.icons8.com/color/48/000000/typescript.png"
  },
  {
    key: "React",
    icon: "https://img.icons8.com/plasticine/100/000000/react.png"
  },
  {
    key: "Redux",
    icon: "https://img.icons8.com/color/48/000000/redux.png"
  },
  {
    key: "NEXT",
    icon: "https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png"
  },
]

const Skills = () => {
  return (
    <div className='skills_container'>
      <h2>Skills</h2>
        <div className='row'>
          {skillsData.map((item) => (
          <div className='col-md-3 col-sm-4 col-xs-6 mb-3'>
            <SkillCard icon={item.icon} title={item.key}/>
          </div>
          ))}
          
          </div>
    </div>
  )
}

export default Skills