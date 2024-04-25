import React, { useEffect } from 'react';
import { Roll } from 'react-awesome-reveal';
import '../styles/resumeComponent.css'
import img from '../Assests/Images/Muzamili.jpg'
function ProjectModal({ isOpen, project, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Cleanup effect
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='modal-overlay '>
     <div className='container'>
     <div className='modal-content'>
       <div className='modal-close' onClick={onClose}>
       <Roll>
          &times;
          </Roll>
        </div>
        <div className='d-flex'>
        <div className='mt-2 part1' >
        <h3 className="modal-title">Stacks</h3>
        <div class="progress-container">
        {
  project.Stacks.map((item, index) => {
    return (
      <div key={index}>
         <div>
      <p style={{color:'aqua',marginBottom:'-5px',textAlign:'start'}}>{item.stack}</p>
      </div>
         <div class="progress-label " >
        <i class={item.icon}></i>
    </div>
    <div class="progress-bar">
        <div class="progress-bar-inner" style={{width:item.percentage}}></div>
    </div>
   
      </div>
    );
  })
}


    {/* <div class="progress-label " >
        <i class="fab fa-css3-alt"></i>
    </div>
    <div class="progress-bar">
        <div class="progress-bar-inner" style={{width:'95%'}}></div>
    </div>

    <div class="progress-label">
        <i class="fab fa-bootstrap"></i>
    </div>
    <div class="progress-bar">
        <div class="progress-bar-inner" style={{width:'85%'}}></div>
    </div>
    <div class="progress-label">
        <i class="fab fa-react"></i>
    </div>
    <div class="progress-bar">
        <div class="progress-bar-inner" style={{width:'80%'}}></div>
    </div>
    <div class="progress-label">
        <i class="fab fa-python"></i>
    </div>
    <div class="progress-bar">
        <div class="progress-bar-inner" style={{width:'75%'}}></div>
    </div> */}
</div>
    </div>
        <div className='mt-2 part2'>
      <p>{project.description}</p>
    </div>
        <div class="single-box">
			<div class="header-area img1"  style={{ backgroundImage: `url(${project.image})` ,overflow:'hidden',zIndex:-10000}}>
        
      </div>
			<div class="body-area">
				<h3>{project.title}</h3>
		
				<div class="socials">  <a target='_blank' href={project.github_link} class="github_btn">
  <i class="fab fa-github"></i> GitHub
</a>

<a target='_blank' href={project.demo_link} class="link_btn">
  <i class="fas fa-external-link-alt"></i> Live Demo
</a>

</div>
			</div>
		</div>
  
        </div>
      </div>
     </div>
    </div>
  );
}

export default ProjectModal;