import React from "react";
import '../styles/certificates.css'
const Certificates = () => {
   
      
  return (
    <div className="container">
    <div style={{marginLeft:10,marginTop:50}}>
    <h2  className="h2">Certificates</h2>
    </div>
     <div className="d-flex ">
     <div className="Custom-Card" >
    <h4 >
           Mern Stack 
           </h4>
           <a target="_blank" href="https://drive.google.com/file/d/1lE8wyB_OAza-izFygdp3Mz27YTceE45n/view?usp=sharing"> <i className="fa-solid fa-eye view_icon"></i></a> 
    </div>
    <div className="Custom-Card">
    <h4 >
           AWS Cloud
           </h4>
           <a target="_blank" href="https://drive.google.com/file/d/1w12XUV8NZHWa5CtDOWTlBBzh-CEISSWo/view?usp=sharing"><i className="fa-solid fa-eye view_icon" ></i></a> 
 
    </div>
    <div className="Custom-Card">
    <h4 >
           React Native
           </h4>
           <i className="fa-solid fa-eye view_icon"></i>
    </div>
     </div>
 
   </div>
  )
}

export default Certificates