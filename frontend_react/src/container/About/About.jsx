import React ,{useState, useEffect} from 'react'
import { motion } from 'framer-motion';

import './About.scss';

import { images } from '../../constants';

const abouts =[
  { title: 'Mobile Game Development', desciption: 'I am a Mobile Game Developer.', imgUrl: images.about01},
  { title: 'Frontend Development', desciption: 'I am a Developer focus in frontend.', imgUrl: images.about02},
  { title: 'Web Development', desciption: 'I can also develop websites.', imgUrl: images.about03},
  { title: 'Media creation', desciption: 'I am also good at media including video edit, sound edit and some 3D animations.', imgUrl: images.about04}
];

const About = () => {
  return (
    <>
    <h2 className="head-text">I know that <span>Good Apps</span><br/>means <span>Good Business</span></h2>
    <div className="app__profiles">
      {abouts.map((about, index)=> (
        <motion.div
        whileInView={{opacity: 1}}
        whileHover={{scale: 1.1}}
        transition={{duration: 0.5, type:'tween'}}
        className="app__profile-item"
        key={about.title + index}
        >
          <img src={about.imgUrl} alt={about.title}/>
          <h2 className="bold-text" style={{ marginTop:20 }}>{about.title}</h2>
          <p className="p-text" style={{ marginTop: 10 }}>{about.desciption}</p>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default About;