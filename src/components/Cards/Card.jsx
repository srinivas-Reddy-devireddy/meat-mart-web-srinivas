import React from 'react'
import './Card.css'
const Card = ({ item, handleClick }) => {
    const { title, pack, price, img ,qty,pices,serves} = item;
    return (
      <>
      
      <div className="cards">
       
        <div className="image_box">
          <img src={img} alt="" />
        </div>
        <div className="details">
          <p>{title}</p>
          <p>{pack}</p>
         
          <div className="serves">
          <p>{qty} | </p>
          <p>{pices}|</p>
          <p>{serves}</p>
          </div>
         
          
          <p>Price - {price}</p>
          <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
       
      </div>
      </>
    );
  };

export default Card
