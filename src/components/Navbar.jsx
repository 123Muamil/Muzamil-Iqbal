import React from 'react';
import '../styles/navbar.css'
import muzamil from '../Assests/Images/MuzamilIqbal.png'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-black bg-white navbar-fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Software Engineer</a>
        <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav"> 
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pro">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonial">Testimonials</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">Testimonials</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
