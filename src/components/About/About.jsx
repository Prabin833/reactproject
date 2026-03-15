import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <i className="fa-solid fa-play play-icon" onClick={()=>{
              {setPlayState(true)}
            }}></i>
        </div>
        <div className="about-right">
            <h3>About beaches</h3>
            <h2>Beautifull beaches in the world</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos inventore nihil praesentium expedita sequi beatae aperiam ipsam sed? Accusamus, dignissimos a nostrum veniam dolores hic quasi. Odio fuga rerum non!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quasi repellendus numquam itaque, facilis a.</p>
        </div>
    </div>
  )
}

export default About