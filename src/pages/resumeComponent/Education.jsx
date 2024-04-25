import React from 'react';
import '../../styles/resumeComponent.css';
import { Fade ,Bounce,Flip,JackInTheBox} from 'react-awesome-reveal';
const Education = () => {
  const textLines = [
    "As a dedicated computer scientist, I approach my academic and professional journey with a multifaceted perspective, embracing every opportunity as a chance to learn and grow.",
    "Beyond traditional coursework, I immerse myself in a diverse range of activities, from hackathons and coding competitions to research projects and community outreach initiatives.",
    "These experiences not only enhance my technical skills but also foster creativity, collaboration, and problem-solving abilities.",
    "Whether I'm exploring the latest advancements in artificial intelligence, contributing to open-source projects, or mentoring aspiring programmers, I am constantly expanding my knowledge and refining my expertise.",
    "My passion for computer science extends far beyond the confines of the classroom, driving me to pursue excellence in every endeavor and make meaningful contributions to the ever-evolving field of technology."
  ];
  return (
    <div className="row education-container">
      <div className="col-md-6 first-part">
        <div className="education-item">
          <h2 className="education-title"><Bounce>Bachelor of Computer Science</Bounce></h2>
          <div className="education-details">
            <p className="education-school"><Flip>UET Lahore</Flip></p>
            <p className="education-duration"><JackInTheBox>2020-2024</JackInTheBox></p>
          </div>
        </div>

        <div className="education-item">
          <h2 className="education-title"><Bounce>Intermediate</Bounce></h2>
          <div className="education-details">
            <p className="education-school"><Flip>Intermediate</Flip></p>
            <p className="education-duration"><JackInTheBox>2018-2020</JackInTheBox></p>
          </div>
        </div>

        <div className="education-item">
          <h2 className="education-title"><Bounce>Matriculation</Bounce></h2>
          <div className="education-details">
            <p className="education-school"><Flip>GHHS #139A Layyah</Flip></p>
            <p className="education-duration"><JackInTheBox>2016-2018</JackInTheBox></p>
          </div>
        </div>
      </div>

   
      <div className="col-md-6">
        <div className="education-description">
          <h2 className="education-description-title">About Bachelor of Computer Science</h2>
          {textLines.map((line, index) => (
        <Fade key={index} direction="up" triggerOnce delay={index * 100}>
          <p className="education-description-content">{line}</p>
        </Fade>
      ))}
          
        
        </div>
      </div>
    </div>
  );
}

export default Education;
