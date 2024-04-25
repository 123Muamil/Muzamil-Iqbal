import React from 'react';
import '../../styles/resumeComponent.css';
import {Slide,Rotate,Zoom,JackInTheBox,Fade} from 'react-awesome-reveal'
const WorkHistory = () => {
  return (
    <div className="work-history-container">
      <div className="work-item">
        <div className="work-details">
          <h2 className="work-title"><Slide direction='down'>FULL STACK DEVELOPER</Slide></h2>
         <div className='d-flex justify-content-between'>
         <p className="work-company"><Rotate>Freelancer</Rotate></p>
          <p className="work-duration"><JackInTheBox>2021-Present</JackInTheBox></p>
         </div>
        </div>
        <div className="work-description">
          <p className="work-para">
          <Zoom>  As a full stack developer, I specialize in developing various types of websites and mobile applications, catering to diverse client needs and industry requirements.</Zoom>
            <br />
            <br />
            <Fade direction="up" triggerOnce delay={0*100}>
            Key Responsibilities:
            </Fade>
          
            <ul className="work-list">
              <li>
              <Fade direction="up" triggerOnce delay={1*100}>
              Developed and deployed dynamic web applications and mobile apps across different platforms, ensuring functionality, performance, and scalability.
              </Fade>
             
              </li>
              <li>
              <Fade  direction="up" triggerOnce delay={2*100}>
              Collaborated with clients to understand their requirements and translate them into technical solutions that meet business objectives.
              </Fade>
              
              </li>
              <li>
              <Fade  direction="up" triggerOnce delay={3*100}>
              Utilized a wide range of technologies and frameworks, including React, React Native, Node.js, Django, Flask, and others, to deliver customized solutions tailored to client needs.
              </Fade>
             
              </li>
              <li>
              <Fade  direction="up" triggerOnce delay={4*100}>
              Demonstrated proficiency in UI/UX design principles to create intuitive and visually appealing interfaces, enhancing user engagement and satisfaction.
              </Fade>
             
              </li>
              <li>
              <Fade  direction="up" triggerOnce delay={5*100}>
              Integrated frontend applications with backend services to optimize functionality and improve user experience, ensuring seamless operation and data integrity.
              </Fade>
              
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkHistory;
