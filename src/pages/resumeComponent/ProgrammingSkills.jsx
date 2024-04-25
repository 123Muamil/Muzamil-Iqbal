import React from 'react';
import '../../styles/resumeComponent.css';
import {Flip,Roll,Fade} from 'react-awesome-reveal'
const values = [
  { id: 1, value: 'HTML', icon: 'fab fa-html5', progressValue: 100, skillLevel: 'Expert' },
  { id: 2, value: 'CSS', icon: 'fab fa-css3-alt', progressValue: 100, skillLevel: 'Expert' },
  { id: 3, value: 'Bootstrap', icon: 'fab fa-bootstrap', progressValue: 100, skillLevel: 'Proficient' },
  { id: 4, value: 'Tailwind CSS', icon: 'fab fa-css3', progressValue: 85, skillLevel: 'Intermediate' },
  { id: 5, value: 'JavaScript', icon: 'fab fa-js', progressValue: 100, skillLevel: 'Expert' },
  { id: 6, value: 'React JS', icon: 'fab fa-react', progressValue: 100, skillLevel: 'Proficient' },
  { id: 7, value: 'React Native', icon: 'fab fa-react', progressValue: 100, skillLevel: 'Expert' },
  { id: 8, value: 'Next JS', icon: 'fab fa-react', progressValue: 90, skillLevel: 'Proficient' },
  { id: 9, value: 'Python', icon: 'fab fa-python', progressValue: 100, skillLevel: 'Proficient' },
  { id: 10, value: 'Django', icon: 'fab fa-python', progressValue: 90, skillLevel: 'Proficient' },
  { id: 11, value: 'Flask', icon: 'fab fa-python', progressValue: 85, skillLevel: 'Intermediate' },
  { id: 12, value: 'Java', icon: 'fab fa-java', progressValue: 80, skillLevel: 'Intermediate' },
  { id: 13, value: 'Kotlin', icon: 'fab fa-swift', progressValue: 80, skillLevel: 'Intermediate' },
  { id: 14, value: 'Swift', icon: 'fab fa-swift', progressValue: 85, skillLevel: 'Intermediate' }
];


const ProgrammingSkills = () => {
  return (
    <div className='programmingSkills-container'>
      {values.map((currentItem,index) => (
        <div key={currentItem.id} className='d-flex justify-content-between'>
          <div  >
          <Roll  direction="up" triggerOnce delay={index * 100}>
          <h6 className='resume-text'>
              <i className={currentItem.icon} style={{color:'#2A7DFD'}}></i> {currentItem.value}
            </h6>
          </Roll>
       
       
         
         
          </div>
          <div>
          <Flip  direction="up" triggerOnce delay={index * 100}>
          <h6 className='skills'>
              {currentItem.skillLevel}
            </h6>
          </Flip>
         
          </div>
          <div className='d-flex'>
          <Fade  direction="up" triggerOnce delay={index * 100}>
          <progress className='p_bar' value={currentItem.progressValue} max={100}  />
          </Fade>
          
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProgrammingSkills;
