import React,{useState,useEffect} from 'react'
import Skills from './pages/Skills'
import Header from './components/Header'
import About from './pages/About'
import Contact from './components/Contact'
import ProjectShowcase from './pages/ProjectShowcase'
import ScrollToTop from "react-scroll-to-top"
import Testimonials from './pages/Testimonials'
import Navshow from './components/Navshow'
import ResumeShow from './pages/ResumeShow'
import Certificates from './pages/Certificates'
import Achievements from './pages/Achievements'
import IntroVideo from './pages/Introvideo'
import Preloader from './components/Preloader'
import './App.css'
import Faq from './pages/Faq'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import DocumentationPage from './components/Docs'
const App = () => {
  const [True,setTrue]=useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setTrue(false); 
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    //  <Routes>
    //   <Route path='/' element={ 
      <div>
        <ScrollToTop 
  smooth 
  component={<i className="lni lni-chevron-up"></i>} 
  className='scroll-top' 

/>
{
        True?   <Preloader/>:
    
    <>
      <Navshow/>
      <Header/>
      <Skills/>
      <Certificates/>
      <Achievements/>
      <IntroVideo/>
      <About/>
    <ResumeShow/>
      <ProjectShowcase/>
      <Testimonials/>
      <Faq/>
      <Contact/>
      <Footer/>
        
    </>
    }
    </div>
    // }/>
    // {/* <Route path='/doc' element={<DocumentationPage/>}/>
    //  </Routes> */}
  )
}

export default App

