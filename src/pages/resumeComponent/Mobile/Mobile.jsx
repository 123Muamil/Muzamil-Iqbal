import React from 'react'
import '../../../styles/resume.css'
import Education from '../Education'
import WorkHistory from '../WorkHistory'
import ProgrammingSkills from '../ProgrammingSkills'
import Projects from '../Projects'
import Interests from '../Interests'
const Mobile = () => {
  return (
    <div style={{background:"#ffffff"}} id='resume'>
    <div className='container text-center' style={{paddingBottom:'30px'}}>
    <h1 className='resumeText'>Resume</h1>
        <span >My formal Bio Details</span>
        </div>
        <div className='container'>
            {/* Start of Education */}
        <div className='d-flex justify-content-center align-items-center' >
        <div className="Card">
             <a   className='resume-link' ><i className="fa-solid fa-graduation-cap vertival-layer-icons"></i>Education</a>
         </div>
        </div>
        <div  className='dataContainer'>
               <Education/>
                </div>
                {/* End of Education */}

                {/* Start Of WorkHistory */}
                <div className='d-flex justify-content-center align-items-center' style={{marginTop:80}}>
        <div className="Card">
        <a className='resume-link' ><i className="fa-solid fa-person-digging vertival-layer-icons"></i>Work Histry</a>
         </div>
        </div>
        <div  className='dataContainer'>
              <WorkHistory/>
                </div>
                {/* End of WorkHistory */}
                {/* Start Of ProgrammingSkills */}
                <div className='d-flex justify-content-center align-items-center' style={{marginTop:80}}>
        <div className="Card">
        <a  className='resume-link'><i className="fa-solid fa-computer vertival-layer-icons"></i>Programming Skills</a>
         </div>
        </div>
        <div  className='dataContainer'>
           <ProgrammingSkills/>
                </div>
                {/* End of Programming Skills */}
            {/* Start of  Projects */}
            <div className='d-flex justify-content-center align-items-center' style={{marginTop:80}}>
        <div className="Card">
        <a  className='resume-link'><i className="fa-solid fa-list-check vertival-layer-icons"></i>Projects</a>
         </div>
        </div>
        <div  className='dataContainer'>
         <Projects/>
                </div>

            {/* End Of Projects */}
            {/* Start of Interests */}
            <div className='d-flex justify-content-center align-items-center' style={{marginTop:80}}>
        <div className="Card">
        <a  className='resume-link'><i className="fa-solid fa-map-location vertival-layer-icons"></i>Interests</a>
         </div>
        </div>
        <div  className='dataContainer'>
        <Interests/>
                </div>
            {/* end of Interests */}
        
        </div>
    </div>
  )
}

export default Mobile