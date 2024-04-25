import React, { useState } from 'react';
import '../styles/footer.css'; // Import your CSS file
import Modal from 'react-modal';
import TermsandConditions from './TermsandConditions';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  const [email,setEmail]=useState('')
  const [isValid, setIsValid] = useState(true);
  const handleEmailChange = (e) => {
    
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(inputEmail));
  };

  const handleEmailClick = (event) => {
    event.preventDefault();
    if(isValid)
    {
      window.location.href = `mailto:${email}`;
    }
    else{
      console.warn("Please Enter Correct Email")
    }
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
    <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container-fluid" style={{marginBottom:'50px'}}>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                <form  className="f_subscribe_two mailchimp" method="post" noValidate>
                  <input type="text" name="EMAIL" className="form-control mail" placeholder="123muzamil.iqbal@gmail.com"  onChange={handleEmailChange}
        style={{ borderColor: isValid ? 'initial' : 'red' }}/>
          {!isValid && <p style={{ color: 'red' }}>Please enter a valid email address.</p>}
                  <button className="btn btn_get btn_get_two"  onClick={handleEmailClick}>Send Mail</button>
                  <p className="mchimp-errmessage" style={{display: 'none'}}></p>
                  <p className="mchimp-sucmessage" style={{display: 'none'}}></p>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                <ul className="list-unstyled f_list">
                  {/* <li><a href="#">Android App</a></li>
                  <li><a href="#">iOS App</a></li>
                  <li><a href="#">Desktop</a></li> */}
                  <li><a href="#pro">Projects</a></li>
                  <li><a href="#about">My tasks</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s">
                <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                <ul className="list-unstyled f_list">
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#" onClick={openModal}>Term &amp; conditions</a></li>
                  <li><NavLink to="/doc">Documentation</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s">
                <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                <div className="f_social_icon">
                  <a   target='_blank' href="https://www.facebook.com/muzamal.iqbal.353?mibextid=ZbWKwL" className="fab fa-facebook-f iconHover" style={{backgroundColor:'#4267B2',textDecoration:'none'}}></a>
                  <a target='_blank' href="https://wa.me/923078761165" className="fa-brands fa-whatsapp iconHover" style={{backgroundColor:'#25D366',textDecoration:'none'}}></a>
                  <a  target='_blank' href="https://www.linkedin.com/in/muzamil-iqbal-145b2b233/" className="fa-brands fa-linkedin-in iconHover" style={{backgroundColor:'#0A66C2',textDecoration:'none'}}></a>
                  <a   target='_blank' href="https://github.com/123Muamil/" className="fab fa-github iconHover" style={{backgroundColor:'#333',textDecoration:'none'}}></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='container-fluid' > */}
        <div className="footer_bg" >
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
        {/* </div> */}
       
      </div>
    
    </footer>
   
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="customoverlay"
      >
         <TermsandConditions closeModal={closeModal}/>
        {/* <button onClick={closeModal}>Close Modal</button> */}
      </Modal>
    </>
  );
}

export default Footer;
