import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/testimonials.css';
import image from '../Assests/Images/muzamiliqbal.jpg'
import { Fade } from 'react-awesome-reveal';
import img1 from '../Assests/Images/person1.jpg'
import img2 from '../Assests/Images/person2.jpg'
import img3 from '../Assests/Images/person3.jpg'
import img4 from '../Assests/Images/person4.jpg'
const Testimonials = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
 const data = [
    {
        "id": 1,
        "name": "Samuel Wilson",
        "role": "System Analyst",
        "rating": 5,
        "review": "Outstanding expertise! Muzamil's analytical skills were pivotal in understanding and solving complex system issues. His insights greatly contributed to the success of our project.",
        "image":img1
      },
    {
      "id": 2,
      "name": "John Doe",
      "role": "Web Developer",
      "rating": 4,
      "review": "Excellent work! Muzamil helped me build a robust web application from scratch. His expertise in both frontend and backend development is commendable.",
      "image":img2
    },
    {
      "id": 3,
      "name": "Jane Smith",
      "role": "Software Engineer",
      "rating": 5,
      "review": "Highly recommended! Muzamil is a talented and dedicated developer. He delivered our project ahead of schedule and exceeded our expectations.",
      "image":img3
    },
    {
      "id": 4,
      "name": "Alex Johnson",
      "role": "Mobile App Developer",
      "rating": 4,
      "review": "Great communication and collaboration! Muzamil was easy to work with and provided valuable insights throughout the development process.",
      "image":img4
    },
    {
      "id": 5,
      "name": "Emily Brown",
      "role": "UI/UX Designer",
      "rating": 5,
      "review": "Amazing attention to detail! Muzamil's contributions to our project significantly improved the user experience. We're thrilled with the results!",
      "image":img1
    },
    {
      "id": 6,
      "name": "David Wilson",
      "role": "Backend Developer",
      "rating": 4,
      "review": "Professional and efficient! Muzamil's backend expertise was crucial to the success of our project. He consistently delivered high-quality code on time.",
      "image":img2
    },
    {
      "id": 7,
      "name": "Sarah Adams",
      "role": "Frontend Developer",
      "rating": 5,
      "review": "Exceptional skills! Muzamil's frontend development skills are unmatched. He created stunning and responsive user interfaces that exceeded our expectations.",
      "image":img3
    },
    {
      "id": 8,
      "name": "Michael Brown",
      "role": "Database Administrator",
      "rating": 4,
      "review": "Reliable and knowledgeable! Muzamil's expertise in database management ensured smooth data operations throughout our project. Highly recommended!",
      "image":img4
    },
    {
      "id": 9,
      "name": "Jessica Taylor",
      "role": "Quality Assurance Engineer",
      "rating": 5,
      "review": "Thorough testing! Muzamil's attention to detail in testing our application was exceptional. He identified and resolved issues efficiently, ensuring a bug-free release.",
      "image":img1
    },
    {
      "id": 10,
      "name": "Daniel Harris",
      "role": "Project Manager",
      "rating": 4,
      "review": "Effective leadership! Muzamil demonstrated strong leadership skills in managing our project. He kept the team motivated and focused, resulting in a successful delivery.",
      "image":img2
    }
  ];
  
  
  
  const ButtonGroup = ({ next, previous}) => {
    return (
      <div className="carousel-button-group mt-auto gap-4 mt-5 d-flex justify-content-center align-items-center w-full" style={{paddingTop:'20px'}}>
        <div className='custom-button' onClick={previous}><i class="fas fa-arrow-left"></i>
</div>
        <div className='custom-button' onClick={next}>
        <i class="fas fa-arrow-right"></i>

</div>
      </div>
    );
  };
    return (
        <div className='testimonial-container' id='testimonial'>
            <div className='text-center'>
                <h1 className='testimonial-text'>Testimonial</h1>
                <p className='testimonial-para'>What My Client Say About Me</p>
                <Fade direction='up'> <div className='line1'></div></Fade>
            </div>

           <div className='container ' style={{marginTop:'120px'}}>
           <Carousel  responsive={responsive}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        centerMode={true}
        autoPlaySpeed={3000}
        autoPlay={true}
        itemClass="project-item1"
         partialVisible={false}
         infinite={true}
         draggable={true}
      >
             {
                data.map((item,index)=>{
                     return(
                        <div  key={index}>
                        <div className='t_card_top'>
                        <div  className='d-flex'>
                        <img className='t_image' src={item.image} alt='person'/>
                        <div>
                        <h2 className='text'>{item.name}</h2>
                        <p className='t_para'>{item.role}</p>
                        </div>
                        </div>
                        <div style={{marginTop:'15px',marginLeft:'35px'}}>
                        <i className="fa fa-star Star"></i>
                        <i className="fa fa-star Star"></i>
                        <i className="fa fa-star Star"></i>
                        <i className="fa fa-star Star"></i>
                        <i className="fa fa-star Star1"></i>
                        </div>
                        </div>
                        <div style={{paddingBottom:'20px',paddingRight:"20px",paddingLeft:"20px",overflowY:'auto'}}>
                            <p className='t_para1'>
                              {
                                item.review
                              }
                            </p>
                        </div>
                       </div>
                     )
                })
             }
  {/* <div >  <div className='t_card_top'>
        <div  className='d-flex'>
        <img className='t_image' src={image} alt='person'/>
        <div>
        <h2 className='text'>Muzamil Iqbal</h2>
        <p className='t_para'>Full Stack Developer</p>
        </div>
        </div>
        <div style={{marginTop:'15px',marginLeft:'35px'}}>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star1"></i>
        </div>
        </div>
        <div style={{paddingBottom:'20px',paddingRight:"20px",paddingLeft:"20px",overflowY:'auto'}}>
            <p className='t_para1'>
            A Game-Changer for Networking As an entrepreneur, the quest for meaningful connections can be daunting. Today has been a game-changer for me. The caliber of professionals I've met here is unparalleled. 
            </p>
        </div>
        </div>
  <div >  <div className='t_card_top'>
        <div  className='d-flex'>
        <img className='t_image' src={image} alt='person'/>
        <div>
        <h2 className='text'>Muzamil Iqbal</h2>
        <p className='t_para'>Full Stack Developer</p>
        </div>
        </div>
        <div style={{marginTop:'15px',marginLeft:'35px'}}>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star1"></i>
        </div>
        </div>
        <div style={{paddingBottom:'20px',paddingRight:"20px",paddingLeft:"20px",overflowY:'auto'}}>
            <p className='t_para1'>
            A Game-Changer for Networking As an entrepreneur, the quest for meaningful connections can be daunting. Today has been a game-changer for me. The caliber of professionals I've met here is unparalleled. 
            </p>
        </div>
        </div>
        <div > <div className='t_card_top'>
        <div  className='d-flex'>
        <img className='t_image' src={image} alt='person'/>
        <div>
        <h2 className='text'>Muzamil Iqbal</h2>
        <p className='t_para'>Full Stack Developer</p>
        </div>
        </div>
        <div style={{marginTop:'15px',marginLeft:'35px'}}>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star1"></i>
        </div>
        </div>
        <div style={{paddingBottom:'20px',paddingRight:"20px",paddingLeft:"20px",overflowY:'auto'}}>
            <p className='t_para1'>
            A Game-Changer for Networking As an entrepreneur, the quest for meaningful connections can be daunting. Today has been a game-changer for me. The caliber of professionals I've met here is unparalleled. 
            </p>
        </div>
        </div>
        <div > <div className='t_card_top'>
        <div  className='d-flex'>
        <img className='t_image' src={image} alt='person'/>
        <div>
        <h2 className='text'>Muzamil Iqbal</h2>
        <p className='t_para'>Full Stack Developer</p>
        </div>
        </div>
        <div style={{marginTop:'15px',marginLeft:'35px'}}>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star1"></i>
        </div>
        </div>
        <div style={{paddingBottom:'20px',paddingRight:"20px",paddingLeft:"20px",overflowY:'auto'}}>
            <p className='t_para1'>
            A Game-Changer for Networking As an entrepreneur, the quest for meaningful connections can be daunting. Today has been a game-changer for me. The caliber of professionals I've met here is unparalleled. 
            </p>
        </div>
        </div>
        <div > <div className='t_card_top'>
        <div  className='d-flex'>
        <img className='t_image' src={image} alt='person'/>
        <div>
        <h2 className='text'>Muzamil Iqbal</h2>
        <p className='t_para'>Full Stack Developer</p>
        </div>
        </div>
        <div style={{marginTop:'15px',marginLeft:'35px'}}>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star1"></i>
        </div>
        </div>
        <div style={{paddingBottom:'20px',paddingRight:"20px",paddingLeft:"20px",overflowY:'auto'}}>
            <p className='t_para1'>
            A Game-Changer for Networking As an entrepreneur, the quest for meaningful connections can be daunting. Today has been a game-changer for me. The caliber of professionals I've met here is unparalleled. 
            </p>
        </div>
        </div>
        <div > <div className='t_card_top'>
        <div  className='d-flex'>
        <img className='t_image' src={image} alt='person'/>
        <div>
        <h2 className='text'>Muzamil Iqbal</h2>
        <p className='t_para'>Full Stack Developer</p>
        </div>
        </div>
        <div style={{marginTop:'15px',marginLeft:'35px'}}>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star1"></i>
        </div>
        </div>
        <div style={{paddingBottom:'20px',paddingRight:"20px",paddingLeft:"20px",overflowY:'auto'}}>
            <p className='t_para1'>
            A Game-Changer for Networking As an entrepreneur, the quest for meaningful connections can be daunting. Today has been a game-changer for me. The caliber of professionals I've met here is unparalleled. 
            </p>
        </div>
        </div>
        <div > <div className='t_card_top'>
        <div  className='d-flex'>
        <img className='t_image' src={image} alt='person'/>
        <div>
        <h2 className='text'>Muzamil Iqbal</h2>
        <p className='t_para'>Full Stack Developer</p>
        </div>
        </div>
        <div style={{marginTop:'15px',marginLeft:'35px'}}>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star"></i>
        <i className="fa fa-star Star1"></i>
        </div>
        </div>
        <div style={{paddingBottom:'20px',paddingRight:"20px",paddingLeft:"20px",overflowY:'auto'}}>
            <p className='t_para1'>
            A Game-Changer for Networking As an entrepreneur, the quest for meaningful connections can be daunting. Today has been a game-changer for me. The caliber of professionals I've met here is unparalleled. 
            </p>
        </div>
        </div> */}
      </Carousel>
           </div>
        </div>
    )
}

export default Testimonials;
