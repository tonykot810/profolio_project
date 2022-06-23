import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import {linkdinlink} from './SocialMediaLink';


const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href={linkdinlink} target="_blank" rel="noreferrer" >
              <BsLinkedin/>
              </a>
        </div>
    </div>
  )
}

export default SocialMedia