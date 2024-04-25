import React from "react";
import '../styles/achievements.css'
const Achievements = () => { 
  return (
    <div className="container" style={{marginBottom:'50px'}}>
    <div style={{marginLeft:10,marginTop:50}}>
    <h2  className="h2">Achievements</h2>
    </div>
     <div className="d-flex ">
     <div className="Custom-Card" >
    <h4 >
           PEEF
           </h4>
           <a target="_blank" href="https://drive.google.com/file/d/1k86HWjOV-mCQ0qPdEhp3VO6zP0R30sUK/view?usp=sharing"> <i className="fa-solid fa-eye view_icon1"></i></a> 
    </div>
    <div className="Custom-Card">
    <h4 >
           iTEC 2024
           </h4>
           <a target="_blank" href="https://drive.google.com/file/d/1yXrfg2F02T_93oAkN_cfwEiLHj9EmJ6n/view?usp=sharing"><i className="fa-solid fa-eye view_icon1" ></i></a> 
 
    </div>
    <div className="Custom-Card">
    <h4 >
    iTEC 2023
           </h4>
          <a target="_blank" href="https://drive.google.com/file/d/1yXrfg2F02T_93oAkN_cfwEiLHj9EmJ6n/view?usp=sharing"> <i className="fa-solid fa-eye view_icon1"></i></a>
    </div>
     </div>
 
   </div>
  )
}

export default Achievements