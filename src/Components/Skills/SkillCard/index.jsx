import React from 'react'
import './style.css'

const SkillCard = ({title, icon}) => {
  return (
    <>
    <div className='skill_card_root'>
        <div className='icon_container'>
            <img src={icon} alt="skill icon" />
        </div>
        <div className='title_container'>
            <h4>{title}</h4>
        </div>
        
    </div>
   
    </>
  )
}

export default SkillCard