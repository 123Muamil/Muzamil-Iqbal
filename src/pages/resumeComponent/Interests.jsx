import React from 'react';
import '../../styles/resumeComponent.css';
import {Roll, Fade ,Zoom} from "react-awesome-reveal";
const Interests = () => {
  return (
    <div className="interests-container">
       <div className="interest-item">
        <div className="interest-icon" >
         <Roll>
         <i className="fas fa-laptop-code" ></i>
         </Roll>
        </div>
        <div className="interest-content">
          <h3 className="interest-title"><Fade>Coding and Problem Solving</Fade></h3>
          <p className="interest-description">
           <Zoom> I am passionate about coding and problem-solving, using technology to address real-life challenges.</Zoom>
          </p>
        </div>
      </div>
      <div className="interest-item">
        <div className="interest-icon">
        <Roll>
        <i className="fas fa-baseball-ball"></i>
        </Roll>
        </div>
        <div className="interest-content">
          <h3 className="interest-title"><Fade>Cricket</Fade></h3>
          <p className="interest-description">
           <Zoom> I enjoy playing and watching cricket. It's a great way to relax and stay active.</Zoom>
          </p>
        </div>
      </div>

      <div className="interest-item">
        <div className="interest-icon">
        <Roll>
        <i className="fas fa-mosque"></i>
        </Roll>
        </div>
        <div className="interest-content">
          <h3 className="interest-title"><Fade>Islamic Naats and Scholars</Fade></h3>
          <p className="interest-description">
          <Zoom>  I find solace in listening to Islamic naats and lectures by scholars, which enriches my spiritual journey.</Zoom>
          </p>
        </div>
      </div>

      <div className="interest-item">
        <div className="interest-icon">
        <Roll>
        <i className="fas fa-book"></i>
        </Roll>
        </div>
        <div className="interest-content">
          <h3 className="interest-title"><Fade>Islamic History and Quranic Studies</Fade></h3>
          <p className="interest-description">
         <Zoom>   Exploring Islamic history and studying the Quran and its translations are important aspects of my life.</Zoom>
          </p>
        </div>
      </div>

     
    </div>
  );
}

export default Interests;
