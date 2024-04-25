// import React,{useState,useEffect} from 'react'
// import Mobile from './resumeComponent/Mobile/Mobile';
// import Resume from './Resume';

// const ResumeShow = () => {
//     const [isFixed, setIsFixed] = useState(true);
//     useEffect(() => {
//       const handleResize = () => {
//         setIsFixed(window.innerWidth <= 767);
//       };
    
//       handleResize(); // Call the handler initially
//       window.addEventListener('resize', handleResize);
      
//       // Cleanup the event listener
//       return () => window.removeEventListener('resize', handleResize);
//     }, []);

//   return (
//    <>
//    {
//    isFixed?<Mobile/>:<Resume/>
//    }
//    </>
//   )
// }

// export default ResumeShow
import React,{useState,useEffect} from 'react'
import Mobile from './resumeComponent/Mobile/Mobile'
import Resume from './Resume'
const ResumeShow = () => {
    const [isFixed, setIsFixed] = useState(true);
    useEffect(() => {
        const handleResize = () => {
          setIsFixed(window.innerWidth <= 767);
        };
      
        handleResize(); // Call the handler initially
        window.addEventListener('resize', handleResize);
        
        // Cleanup the event listener
        return () => window.removeEventListener('resize', handleResize);
      }, []);
      return (
        <>
        {
            isFixed?<Mobile/>:<Resume/>
        }
        </>
      )
}

export default ResumeShow