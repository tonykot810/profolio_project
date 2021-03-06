import React from 'react'
import { motion } from 'framer-motion';

import {AppWrap} from '../../wrapper'
import {images} from '../../constants';
import './Header.scss';

const scaleVariants ={
  whileInView: {
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
      whileInView={{x:[-300,0], opacity:[0,1] }}
      transition={{duration: 1}}
      className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hi, I am</p>
              <h1 className="head-text">Tony Kot</h1>
              </div>
          </div>

          <div className="tag-cmp app__flex">
          <p className="p-text">Mobile Game developer</p>
          </div>
          <div className="tag-cmp app__flex">
          <p className="p-text">This profolio is made by React, Sanity, Sass</p>
          </div>
          <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-title"
      >
      {[images.react, images.sanity, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
        </div>
        <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
    </motion.div>
      </motion.div>
      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      >
      {[images.cocos2dx, images.unity, images.react, images.javascript, images.node,images.lua].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');