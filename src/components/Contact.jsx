import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import '../styles/about.css'
const Contact = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_tlwe2up', 'template_q556ept', form.current, 'z5iTSs9wzKYmgLv7v')
        .then((result) => {
            console.log(result.text);
            form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='container' style={{paddingBottom:"80px"}} id='contact' >
      
<section className="mb-4" style={{boxShadow:' 0 4px 8px rgba(0, 0, 0, 0.1)',backgroundColor:'#ffffff',padding:20,borderRadius:10}}>


<h2 className="h1-responsive font-weight-bold text-center my-4">Contact ME</h2>

<p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly. I will come back to you within
    a matter of hours to help you.</p>

<div className="row">
    <div className="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="" method="POST"  ref={form} onSubmit={sendEmail}>
            <div className="row">
                <div className="col-md-6">
                    <div className="md-form mb-0">
                    <label htmlFor="name" className="label">Your name</label>
                        <input type="text" id="name" name="name" className="form-control"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="md-form mb-0">
                    <label htmlFor="email" className="label">Your email</label>
                        <input type="text" id="email" name="email"className="form-control"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="md-form mb-0">
                    <label htmlFor="subject" className="label">Subject</label>
                        <input type="text" id="subject" name="subject"className="form-control"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="md-form">
                    <label htmlFor="message">Your message</label>
                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                    </div>
                </div>
            </div>
            <div className="text-center text-md-left">
            <button className="btn btn-success contact-button"  type='submit'  >Send</button>
        </div>
        <div className="status"></div>
        </form>
    </div>
   
   
</div>

</section>

    </div>
  )
}

export default Contact
