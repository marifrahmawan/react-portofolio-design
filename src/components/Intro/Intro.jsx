import React from 'react';

import './intro.css';
import Me from '../../img/me.jpg';

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-greetings">Hello, My name is</h2>
          <h1 className="intro-name">James Burton</h1>

          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">UI/UX Designer</div>
              <div className="intro-title-item">Photographer</div>
              <div className="intro-title-item">Writer</div>
              <div className="intro-title-item">Content Creator</div>
            </div>
          </div>

          <div className="intro-description">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            onlone stores.
          </div>
        </div>
      </div>
      <div className="intro-right">
        <div className="right-image-wrapper">
          <div className="right-image-card">
            <img src={Me} alt="" className="me-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
