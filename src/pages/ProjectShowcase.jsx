import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProjectModal from '../pages/ProjectModel'
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import Swiper1 from 'swiper';
import '../styles/resumeComponent.css'
import Today from '../Assests/Images/header_img.png'
import App from '../Assests/Images/app.png'
import smartAgro from '../Assests/Images/smartAgro.jpeg'
Swiper1.use([Navigation, EffectCoverflow, Autoplay]);
function ProjectShowcase() {
  const projects = [
    {
      title: 'Today Landing Page',
      description: 'Today is a dynamic networking platform designed for entrepreneurs to connect, collaborate, and cultivate business relationships. It leverages smart technology to intelligently match you with other entrepreneurs who share your business goals and interests.',
      image: Today,
      demo_link: 'https://123muamil.github.io/LandingPage/',
      github_link: 'https://github.com/123Muamil/LandingPage',
      Stacks: [{
        id:1,
        icon:"fab fa-html5",
        stack:'HTML5',
        percentage:'100%'
      },
    {
      id:2,
      icon:"fab fa-css3-alt",
      stack:"CSS3",
      percentage:"50%"
    },{
      id:3,
      icon:"fab fa-bootstrap",
      stack:"Bootstrap5",
      percentage:"50%"
    },{
      id:4,
      icon:"fa fa-code",
      stack:"Javascript",
      percentage:"10%"
    }],
    },
    {
      title: 'Today App',
      description: "Today is not just an app, it's a movement. A movement where isolation becomes collaboration, where challenges become victories. Every entrepreneur knows the journey can be solitary, but with 'Today', you're no longer navigating alone.",
      image: App,
      demo_link: 'https://docs.google.com/presentation/d/1H3lfIhlLzTloi3wEWktEjHTN7qgkOoVX/edit?usp=sharing&ouid=118353028160737019847&rtpof=true&sd=true',
      github_link: 'https://github.com/123Muamil/tinder-today',
      Stacks: [{
        id:1,
        icon:"fab fa-react",
        stack:'React Native',
        percentage:'100%'
      },
      {
        id:2,
        icon:"fab fa-react",
        stack:'Expo',
        percentage:'100%'
        
      },
    {
      id:3,
      icon:"fab fa-react",
      stack:"IOS",
      percentage:"100%"
    },{
      id:4,
      icon:"fab fa-react",
      stack:"Android",
      percentage:"100%"
    },{
      id:5,
      icon:"fab fa-react",
      stack:"Xcode",
      percentage:"50%"
    },{
      id:6,
      icon:"fa-solid fa-code-branch",
      stack:"Firebase",
      percentage:"100%"
    }],
    },
    {
      title: 'SmartAgro',
      description: 'SMARTAGRO(AN INTEGRATED AI-BASED SYSTEM FOR AGRICULTURAL TRADING AND CROP DISEASE DIAGNOSIS) WITH REACT NATIVE, DJANGO,Nodejs,MYSQL and Firebase .',
      image: smartAgro,
      demo_link: 'https://docs.google.com/presentation/d/1OpDHETcDvPywmws15Sdna9dZ6ETqCiGO/edit?usp=sharing&ouid=118353028160737019847&rtpof=true&sd=true',
      github_link: 'https://github.com/qamarmehar0301/updated_smartAgro',
      Stacks: [{
        id:1,
        icon:"fab fa-react",
        stack:'React Native',
        percentage:'100%'
      },
      {
        id:2,
        icon:"fab fa-react",
        stack:'React Native CLI',
        percentage:'100%'
        
      },
    {
      id:3,
      icon:"fa-brands fa-python",
      stack:"Django",
      percentage:"30%"
    },{
      id:4,
      icon:"fab fa-react",
      stack:"Android",
      percentage:"100%"
    },{
      id:5,
      icon:"fa-brands fa-node-js",
      stack:"NodeJS",
      percentage:"10%"
    },{
      id:6,
      icon:"fa-solid fa-code-branch",
      stack:"Firebase",
      percentage:"60%"
    }],
    },
    {
      title: 'Today Landing Page',
      description: 'Today is a dynamic networking platform designed for entrepreneurs to connect, collaborate, and cultivate business relationships. It leverages smart technology to intelligently match you with other entrepreneurs who share your business goals and interests.',
      image: Today,
      demo_link: 'https://123muamil.github.io/LandingPage/',
      github_link: 'https://github.com/123Muamil/LandingPage',
      Stacks: [{
        id:1,
        icon:"fab fa-html5",
        stack:'HTML5',
        percentage:'100%'
      },
    {
      id:2,
      icon:"fab fa-css3-alt",
      stack:"CSS3",
      percentage:"50%"
    },{
      id:3,
      icon:"fab fa-bootstrap",
      stack:"Bootstrap5",
      percentage:"50%"
    },{
      id:4,
      icon:"fa fa-code",
      stack:"Javascript",
      percentage:"10%"
    }],
    },
    {
      title: 'Today App',
      description: "Today is not just an app, it's a movement. A movement where isolation becomes collaboration, where challenges become victories. Every entrepreneur knows the journey can be solitary, but with 'Today', you're no longer navigating alone.",
      image: App,
      demo_link: 'https://docs.google.com/presentation/d/1H3lfIhlLzTloi3wEWktEjHTN7qgkOoVX/edit?usp=sharing&ouid=118353028160737019847&rtpof=true&sd=true',
      github_link: 'https://github.com/123Muamil/tinder-today',
      Stacks: [{
        id:1,
        icon:"fab fa-react",
        stack:'React Native',
        percentage:'100%'
      },
      {
        id:2,
        icon:"fab fa-react",
        stack:'Expo',
        percentage:'100%'
        
      },
    {
      id:3,
      icon:"fab fa-react",
      stack:"IOS",
      percentage:"100%"
    },{
      id:4,
      icon:"fab fa-react",
      stack:"Android",
      percentage:"100%"
    },{
      id:5,
      icon:"fab fa-react",
      stack:"Xcode",
      percentage:"50%"
    },{
      id:6,
      icon:"fa-solid fa-code-branch",
      stack:"Firebase",
      percentage:"100%"
    }],
    },
    {
      title: 'SmartAgro',
      description: 'SMARTAGRO(AN INTEGRATED AI-BASED SYSTEM FOR AGRICULTURAL TRADING AND CROP DISEASE DIAGNOSIS) WITH REACT NATIVE, DJANGO,Nodejs,MYSQL and Firebase .',
      image: smartAgro,
      demo_link: 'https://docs.google.com/presentation/d/1OpDHETcDvPywmws15Sdna9dZ6ETqCiGO/edit?usp=sharing&ouid=118353028160737019847&rtpof=true&sd=true',
      github_link: 'https://github.com/qamarmehar0301/updated_smartAgro',
      Stacks: [{
        id:1,
        icon:"fab fa-react",
        stack:'React Native',
        percentage:'100%'
      },
      {
        id:2,
        icon:"fab fa-react",
        stack:'React Native CLI',
        percentage:'100%'
        
      },
    {
      id:3,
      icon:"fa-brands fa-python",
      stack:"Django",
      percentage:"30%"
    },{
      id:4,
      icon:"fab fa-react",
      stack:"Android",
      percentage:"100%"
    },{
      id:5,
      icon:"fa-brands fa-node-js",
      stack:"NodeJS",
      percentage:"10%"
    },{
      id:6,
      icon:"fa-solid fa-code-branch",
      stack:"Firebase",
      percentage:"60%"
    }],
    },
    // {
    //     title: 'EaseRoute',
    //     description: 'Description of Project 4 goes here.',
    //     image: 'https://m.media-amazon.com/images/I/81B77MW5wQL._AC_SL1500_.jpg',
    //     demo_link: 'Location 4',
    //     github_link: 'Owner 4',
    //     Stacks: 'Date 4',
    //   },
      // {
      //   title: 'Project 5',
      //   description: 'Description of Project 5 goes here.',
      //   image: 'https://m.media-amazon.com/images/I/81B77MW5wQL._AC_SL1500_.jpg',
      //   demo_link: 'Location 5',
      //   github_link: 'Owner 5',
      //   Stacks: 'Date 5',
      // },
 
  ]

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  // Function to handle adding/removing the class to disable/enable window scrolling



  return (
    <div className='project-showcase' id='pro'>
      <h1 className='page-title'>Latest Projects</h1>
      <Swiper
        effect='coverflow'
        grabCursor={true}
        // centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000 }}
        spaceBetween={20}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className='project-card' onClick={() => openModal(project)}>
              <div className='card-image'>
                <img src={project.image} style={{width:'100%',height:350}} alt={project.title} />
                <div className='card-content'>
                  <h2 style={{color:'#ffffff'}}>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={closeModal}
      />
    </div>
  )
}

export default ProjectShowcase