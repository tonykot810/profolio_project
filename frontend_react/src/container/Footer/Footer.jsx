import React, {useState} from 'react'
import { images } from '../../constants'
import { AppWrap, MotionWrap} from '../../wrapper';
import { client } from '../../client';

import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [IsFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
    .catch((err) => console.log(err));
  }

  return (
    <>
    <h2 className="head-text" > Please Feel Free to contact me</h2>
    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src= {images.email} alt="email" />
        <a href="mailto:tonykot810@gmail.com">tonykot810@gmail.com</a>
      </div>
    </div>
    {!IsFormSubmitted ? 
  <div className="app__footer-form app__flex">
    <div className="app__flex">
      <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput}/>
    </div>
    <div className="app__flex">
      <input className="p-text" type="email" placeholder="Your email" name="email" value={email} onChange={handleChangeInput}/>
    </div>
    <div>
      <textarea 
      className="p-text"
      placeholder="Your Message"
      value={message}
      name={message}
      onChange={handleChangeInput}
      />
    </div>
    <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
  </div>
  : <div>
    <h3 className="head-text">Thank you for contacting me!</h3>
  </div>}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
  )