import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Phone from '../../img/phone.png';
import Address from '../../img/address.png';
import Email from '../../img/email.png';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const [userData, setUserData] = useState({
    user_name: '',
    user_subject: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setUserData({
            user_name: '',
            user_subject: '',
            user_email: '',
            message: '',
          });
        },
        (error) => {
          console.log('Failed', error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Let's discuss your project</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={Phone} alt="" className="contact-icon" />
              +(62) 823 4567 8910
            </div>

            <div className="contact-info-item">
              <img src={Email} alt="" className="contact-icon" />
              contact@mad.dev
            </div>

            <div className="contact-info-item">
              <img src={Address} alt="" className="contact-icon" />
              245 King Street, Greater Jakarta 10000 Indonesia
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            <b>What's your story?</b> Get in touch. Always freelancing if the
            right project comes along.
          </p>

          <form ref={form} onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              onChange={handleChange}
              value={userData.user_name}
            />
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
              value={userData.user_subject}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Email"
              name="user_email"
              value={userData.user_email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="10"
              value={userData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
