import React from 'react'
import './style.css'

const HeroSection = () => {
  return (
    <div className='root_container'>
        <div className='hero_text'>
            <h4>Hi, I am Siddhant</h4>
            <h5>I am a Frontend Developer</h5>
            <video  className='background_video' autoPlay muted loop>
              <source src='background_loop.mp4' type='video/mp4'/>
            </video>
        </div>
    </div>
  )
}

export default HeroSection