

import React from 'react'
import { Link } from 'react-router-dom'
import './Features.css'

const Features = () => {
  return (
    <div>
         <section className="features" >
    <div className="box-container">
<div className="box">
            <img src="https://metro.com/product_images/uploaded_images/raw-meat-in-a-restaurant-kitchen.jpg" alt=""  className='img-features'/>
            <h3>All type of  Meats avalible</h3>
            <Link to='/Products'>
            <button className='btn'>Shop Now</button>
            </Link>
        </div>

       <div className="box">
        <img src="https://img.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg?w=996&t=st=1698381948~exp=1698382548~hmac=59072695899e33dcadbc6bede195025bc48a48ad82a5814362ed6e8ea364c4d9" alt=""  className="img-features" />
        <h3>free delivery</h3>
        <Link to='/Commingsoon'>
        <button className='btn'>Shop Now</button>
        </Link>
           
        </div>
        <div className="box">
            <img src="https://img.freepik.com/free-photo/3d-hand-making-cashless-payment-from-smartphone_107791-16609.jpg?w=740&t=st=1698381994~exp=1698382594~hmac=e6bb19df7c0f8a03e085c9f5ae74a561244abea4f81d07c7b3aaa6190185382c" alt="" className="img-features"></img> 
            <h3>Easy payments</h3>
            <Link to='/Commingsoon'>
        <button className='btn'>Shop Now</button>
        </Link>
        </div>
    </div>
    </section>

    </div>
  )
}

export default Features