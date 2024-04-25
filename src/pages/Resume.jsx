import React from 'react'
import Education from './resumeComponent/Education'
import WorkHistory from './resumeComponent/WorkHistory'
import ProgrammingSkils from './resumeComponent/ProgrammingSkills'
import Projects from './resumeComponent/Projects'
import Interests from './resumeComponent/Interests'
import '../styles/resume.css'
import { useState } from 'react'
const Resume = () => {
  const [data,setData]=useState(<Education/>)
  return (
    <div style={{background:"#ffffff"}} id='resume'>
    <div className='container text-center' style={{paddingBottom:'80px'}}>
      <h1 className='resumeText'>Resume</h1>
        <span >My formal Bio Details</span>
       <div className='container logos ' >
             {/* Infinit Loop Part One */}
             <div className='logos-slide'>
              <div className='d-flex justify-content-center align-items-center ' style={{marginTop:80}}>
             <div className="Card" onClick={()=>setData(<Education/>)}>
             <a   className='resume-link' ><i className="fa-solid fa-graduation-cap vertival-layer-icons"></i>Education</a>
         </div>
         <div className="Card" onClick={()=>setData(<WorkHistory/>)}>
             <a className='resume-link' ><i className="fa-solid fa-person-digging vertival-layer-icons"></i>Work Histry</a>
         </div>
         <div className="Card" onClick={()=>setData(<ProgrammingSkils/>)}>
             <a  className='resume-link'><i className="fa-solid fa-computer vertival-layer-icons"></i>Programming Skills</a>
         </div>
         <div className="Card" onClick={()=>setData(<Projects/>)}>
             <a  className='resume-link'><i className="fa-solid fa-list-check vertival-layer-icons"></i>Projects</a>
         </div>
         <div className="Card" onClick={()=>setData(<Interests/>)}>
             <a  className='resume-link'><i className="fa-solid fa-map-location vertival-layer-icons"></i>Interests</a>
         </div>
              </div>
              </div>
              {/* Infinite Loop Part 2 */}
              <div className='logos-slide'>
              <div className='d-flex justify-content-center align-items-center ' style={{marginTop:80}}>
             <div className="Card" onClick={()=>setData(<Education/>)}>
             <a   className='resume-link' ><i className="fa-solid fa-graduation-cap vertival-layer-icons"></i>Education</a>
         </div>
         <div className="Card" onClick={()=>setData(<WorkHistory/>)}>
             <a className='resume-link' ><i className="fa-solid fa-person-digging vertival-layer-icons"></i>Work Histry</a>
         </div>
         <div className="Card" onClick={()=>setData(<ProgrammingSkils/>)}>
             <a  className='resume-link'><i className="fa-solid fa-computer vertival-layer-icons"></i>Programming Skills</a>
         </div>
         <div className="Card" onClick={()=>setData(<Projects/>)}>
             <a  className='resume-link'><i className="fa-solid fa-list-check vertival-layer-icons"></i>Projects</a>
         </div>
         <div className="Card" onClick={()=>setData(<Interests/>)}>
             <a  className='resume-link'><i className="fa-solid fa-map-location vertival-layer-icons"></i>Interests</a>
         </div>
              </div>
              </div>
             
           
       
        </div>
        <div className='container'>
        <div  className='dataContainer'>
                { data}
                </div>
        </div>
    </div>
    </div>
  )
}
export default Resume
