import React,{useState,useEffect} from 'react'
import Navbar from './Navbar';
import { Sidebar } from './Sidebar/Sidebar';
const Navshow = () => {
    const [isFixed, setIsFixed] = useState(true);

useEffect(() => {
  const handleResize = () => {
    setIsFixed(window.innerWidth <= 1000);
  };

  handleResize(); // Call the handler initially
  window.addEventListener('resize', handleResize);
  
  // Cleanup the event listener
  return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <>
    {
        isFixed?<Sidebar/>:<Navbar/>
    }
    </>
  )
}

export default Navshow