

import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../styles/skills.css'
const Skills = () => {
  const [items, setItems] = useState([
    "Javascript",
    "Python",
    "ReactJS",
    "NextJS",
    "React Native",
    "NodeJS",
    "Django",
    "Flask"
  ]); // Initial items for the carousel
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setItems((prevItems) => {
        const updatedItems = [...prevItems.slice(1), prevItems[0]];
        return updatedItems;
      });
    }, 3000); 

    return () => clearTimeout(timer);
  }, [items]);

  return (
    <div className="container">
     <div style={{marginLeft:10,marginTop:50}}>
     <h2 className="h2">Skills</h2>
     </div>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        draggable
        focusOnSelect={false}
        infinite={true}
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5, 
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3, // Show 3 items on tablet
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1, // Show 1 item on mobile
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        autoPlay={autoPlay}
      >
        {items.map((item) => (
          <div
            key={item}
            className="Custom_Card"  
         >
           <h4 >
           {item}
           </h4>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Skills;
