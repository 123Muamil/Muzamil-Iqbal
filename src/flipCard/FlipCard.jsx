import React from 'react';
import './FlipCard.css';
const FlipCard = ({ id,title, image, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
  <img src={image} alt="React Logo" className="logo"/>
  <div className="content">
    <h2 className='h2'>{title}</h2>
  </div>
  <span className='id'>{id}</span>
</div> 
    );
  };
  
  export default FlipCard;