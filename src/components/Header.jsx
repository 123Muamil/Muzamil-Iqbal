import React, { useState } from 'react'
import '../styles/header.css'
import muzamil from '../Assests/Images/muzamiliqbal.jpg'
import Typewriter from "typewriter-effect";
import header from '../Assests/Images/header.png'
import { Link } from 'react-scroll';
import resume from '../Assests/Muzamil.pdf'
import { Zoom } from 'react-awesome-reveal';
import muz from '../Assests/Images/4.jpeg'
const Header = () => {
  return (
    <div  style={{background:' #24263B'}}>
    <div className='container header-container'>
      <div className='row'>
        <div className='col-md-10 col-lg-6' style={{paddingBottom:'50px'}}>

          <div className="container pt-4">
            <section className="mb-4">
              <a
               target='_blank'
                style={{color:'white'}}
                className="btn btn-link btn-floating btn-lg  "
                href="https://www.facebook.com/muzamal.iqbal.353?mibextid=ZbWKwL"
                role="button"
                data-mdb-ripple-color="white"
              ><i className="fab fa-facebook-f"></i
              ></a>

              {/* <a
               target='_blank'
                 style={{color:'white'}}
                className="btn btn-link btn-floating btn-lg  "
                href="https://www.twitter.com/"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-twitter"></i
              ></a> */}


              <a
               target='_blank'
               style={{color:'white'}}
                className="btn btn-link btn-floating btn-lg  "
                href="https://wa.me/923078761165"
                role="button"
                data-mdb-ripple-color="dark"
              >
             <i class="fa-brands fa-whatsapp"></i>
              </a>


              {/* <a
               target='_blank'
               style={{color:'white'}}
                className="btn btn-link btn-floating btn-lg  "
                href="https://www.instagram.com/"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-instagram"></i
              ></a> */}


              <a
               target='_blank'
               style={{color:'white'}}
                className="btn btn-link btn-floating btn-lg  "
                href="https://www.linkedin.com/in/muzamil-iqbal-145b2b233/"
                role="button"
                data-mdb-ripple-color="dark"
              >
              <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a
              target='_blank'
              style={{color:'white'}}
                className="btn btn-link btn-floating btn-lg "
                href="https://github.com/123Muamil/"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-github"></i
              ></a>
            </section>

          </div>
          <h1 className='header-text'>Hello, I'M <span style={{color:'#FF5823'}}>Muzamil Iqbal</span></h1>
          <div><h6 className='typing'><Typewriter
  
  onInit={(typewriter)=> {
  typewriter
  .typeString("Muzamil Iqbal")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Full Stack Developer proficient in React.js, React Native, Next.js, Node.js, Django, and Flask, delivering robust web and mobile applications. Expertise in front-end and back-end development, with a passion for creating efficient and scalable solutions. ")
  .start().deleteAll().typeString("Welcome You").start().deleteAll().typeString("Full Stack Developer").start()
  }}
  /></h6></div>
          {/* <p className='header-para'>
          Crafting applications is akin to composing a symphony; harmonizing front-end elegance with back-end functionality creates the masterpiece of user experience.
          </p> */}
         <div className='d-flex header-buttons'>
         <Link role='button' to='contact' className='header-button1' ><span >Hire Me</span></Link>
         <a  className='header-button2'  target="_blank" href={resume} download='MuzamilIqbal' ><span>Get Resume</span></a>
         </div>
        </div>
        <div className='col-md-10 col-lg-6' >
        <Zoom>  <img className='header-image' src={muz} alt='Muzamil Iqbal'/></Zoom>
        </div>
      </div>
    </div>
    <img src={header} className='header-behing-image' alt='Header Image'/>
    </div>
  )
}
export default Header
