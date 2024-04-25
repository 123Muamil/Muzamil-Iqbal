// import React from 'react'
// import '../styles/about.css'
// import muzamiliqbal from '../Assests/Images/muzamiliqbal.jpg'
// import { Link } from 'react-scroll'
// import { Fade ,Zoom,Bounce,Slide} from "react-awesome-reveal";
// import resume from '../Assests/Muzamil.pdf'
// const About = () => {
//   return (
//     <div className='about-container  text-center align-items-center justify-content-center' id='about' >
//      <div className='container'>
//         <h1 className='about-text'>About Me</h1>
//         <span >Why choose me ?</span>
//         <Fade direction='up'> <div className='line'></div></Fade>
//         <div className='row'  style={{paddingTop:'100px'}}>
//             <div className='col-lg-6 col-md-10  align-items-center' style={{marginBottom:'50px'}}>
//             <Zoom> <img className='about-image' src={muzamiliqbal} alt='Muzamil Iqbal'/></Zoom>
//             </div>
//             <div className='col-lg-6 col-md-10  align-items-center' style={{marginBottom:'50px'}}>
//             <div className='about-image1'>
//                 <h1 >
//                <Zoom> Full Stack Developer proficient in React.js, React Native, Next.js, Node.js, Django, and Flask, delivering robust web and mobile applications. Expertise in front-end and back-end development, with a passion for creating efficient and scalable solutions.</Zoom>
//                 </h1>
//                 <h2 className='h2'>
//                <Bounce> Here are a Few Highlights:</Bounce>
//                 </h2>
              
//                <div style={{marginTop:10}}>
//                 <div >
//              <div  className='h6'> <Slide direction='up'><i className="fas fa-code"></i></Slide><h6><Fade direction='up'>Programming Languages: JavaScript (including ES6+), Python, Java, Kotlin, Swift</Fade></h6></div>
//          </div>
               
            
//                <div>
//                <div  className='h6'><Slide direction='up'><i className="fas fa-laptop-code"></i></Slide> <h6><Fade direction='up'>Frontend Development: React.js, React Native, Next.js</Fade></h6></div>
//          </div>
              
              
//                <div>
//                <div  className='h6'><Slide direction='up'><i className="fas fas fa-cogs"></i></Slide> <h6><Fade direction='up'>State Management: Redux, MobX</Fade></h6></div>
//          </div>
               
             
//                <div>
//                <div  className='h6'><Slide direction='up'><i className="fas fa-database"></i></Slide> <h6><Fade direction='up'>RESTful API Development</Fade></h6></div>
//          </div>
               
              
//                <div>
//                <div  className='h6'><Slide direction='up'><i className="fas fa-paint-brush"></i></Slide> <h6><Fade direction='up'>UI/UX Design Principles</Fade></h6></div>
//          </div>
              
             
//                <div>
//                <div  className='h6'><Slide direction='up'><i className="fas fa-code"></i></Slide> <h6><Fade direction='up'>Agile Development Methodologies</Fade></h6></div>
//          </div>
//          <div>
//                <div  className='h6'><Slide direction='up'><i className="fas fa-check-circle"></i></Slide> <h6><Fade direction='up'>Testing Frameworks: Jest, Enzyme, JUnit</Fade></h6></div>
//          </div>
//          <div>
//                <div  className='h6'><Slide direction='up'><i className="fas fa-cloud"></i></Slide> <h6><Fade direction='up'>Cloud Platforms: AWS, Google Cloud Platform (GCP)</Fade></h6></div>
//          </div>
//                </div>
//          <div className='d-flex about-buttons'>
//          <Link role='button' to='contact' className='about-button1' ><span  className='span'>Hire Me</span></Link>
//          <a href={resume} target='_blank' className='about-button2' download="MuzamilIqbal" ><span className='span'>Get Resume</span></a>
//          </div>
               
//             </div>
//             </div>
//             </div>
//      </div>
//     </div>
//   )
// }

// export default About
import React, { useState ,useEffect} from 'react';
import '../flipCard/FlipCard.css';
import FlipCard from '../flipCard/FlipCard';
import image from '../flipCard/logo192.png'
import fullstackdeveloper from '../Assests/Images/fullstackdeveloper.png'
import js from '../Assests/Images/js.png'
import muzamiliqbal from '../Assests/Images/muzamiliqbal.jpg'
import python from '../Assests/Images/python.png'
const About = () => {
      const [flippedCardIndex, setFlippedCardIndex] = useState(null);

      useEffect(() => {
        setFlippedCardIndex(0);
      }, []);
    
      const handleCardClick = (index) => {
        setFlippedCardIndex(index);
      };
    
      const handleNext = () => {
        setFlippedCardIndex((prevState) => {
          if (prevState === null || prevState === undefined) {
            return 0;
          }
          if (prevState === cards.length - 1) {
            return prevState;
          }
          return prevState + 1;
        });
      };
      
      const handlePrevious = () => {
        setFlippedCardIndex((prevState) => {
          if (prevState === null || prevState === undefined) {
            return 0;
          }
          if (prevState === 0) {
            return prevState;
          }
          return prevState - 1;
        });
      };
      
    
      const cards = [
        {id:1,image:fullstackdeveloper, title: "Full Stack Developer",skills:["HTML5","CSS3","Bootstrap5","TailwindCSS","MUI","Javascript","Typescript","ReactJS","NextJS","AngularJS","Django","Flask","NodeJS"] },
        {id:2,image:js, title: "Javascript Developer" ,skills:["ReactJS","NextJS","AngularJS","NodeJS","ExpressJS","Mern Stack","Mean Stack"] },
        {id:3,image:image, title: "React.JS Developer",skills:["HTML","CSS","Bootstrap","ReactJS","NextJS"] },
        {id:4,image:image, title: "React Native Developer",skills:["Android","IOS","Expo","React Native CLI","Xcode","Android Studio","UI","Native Feature",] },
        {id:4,image:image, title: "Next.JS Developer",skills:["HTML","CSS","Bootstrap","ReactJS"] },
        {id:4,image:python, title: "Python Developer" ,skills:["Django","Flask","FastAPI","Machine Learning","Deep Learning","Computer Vision"]},
        // Add more card objects here
      ];
  return (
      <div className='aboutContainer' id='about'>
      <div className="container">
       <div className='d-flex '>
       <img src={muzamiliqbal} alt='Muzamil Iqbal' className='aboutImage'/>
       <h1 className='aboutTitle'>About My Self</h1>
       </div>
       <h5 className='aboutsubTitle'>Knack of Building application with frontend and backend operation</h5>
       <div className='row'>
         <div className='col-md-1'>
         </div>
         <div className='col-md-3'>
       <p className='p'>  My name is Muzamil Iqbal. A professional and enthusiastic full-stack developer. However, I am more than just your average programmer. I was continually coming up with new concepts. I'm very fluid and never stop learning and adapting to new situations.</p>
         </div>
         <div className='col-md-3'>
         <p className='p'>This attitude propelled me on an endless journey to learn a variety of skills,  UI/UX, design, front-end and back-end development, devOps, SEO and optimisations, Mobile Application Developement, software design, database design, and many more...</p>
           </div>
           <div className='col-md-3'>
          <p className='p'> When I encounter a new problem, I usually conduct extensive research on it in order to comprehend it and discover cutting-edge and innovative approaches for dealing with similar problems in the future. As a result, it's not unexpected that I've listed a lot of abilities here:</p>
           </div>
       </div>
       <div className="row">
         <div className="col-md-6 mb-5 mt-3">
           <div className='Container' >
             {cards.map((card, index) => (
               <FlipCard
                 key={index}
                 id={index+1}
                 title={card.title}
                 image={card.image}
                 onClick={() => handleCardClick(index)}
               />
             ))}
           </div>
         </div>
         <div className="col-md-6 mb-5 mt-3">
           <div className="container d-flex justify-content-center align-items-center">
             <div className='contentContainer'>
             {flippedCardIndex !== null && (
               <>
                 <div className='contentId'> {flippedCardIndex + 1}</div>
                 <h4 className='skill'>My Skills as</h4>
                 <h3 className='contentTitle'>{cards[flippedCardIndex].title}</h3>
                 <div class="list-container">
                 <ul class="dot-list">
         {cards[flippedCardIndex].skills.map((skill, i) => (
           <li key={i}>{skill}</li>
         ))}
       </ul>
   </div>
                 {/* <p className='contentDescription'>lorem haoghoahgoahgoihsoiah</p> */}
                 <div>
                   <button onClick={handlePrevious} className='iconButton'>  <i className="fas fa-chevron-left"></i></button>
                   <button onClick={handleNext} className='iconButton'> <i className="fas fa-chevron-right"></i></button>
                 </div>
               
               </>
             )}
              
             </div>
          
           </div>
          
         </div>
       
       </div>
    
     </div>
    </div>
  )
}

export default About