import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className="footer">
<div className='footer-logo'>
       <i className='fas fa-winemart'></i>
        <p>Meat Mart</p>

    </div>
    <ul className="footer-links">
        <li>Home</li>
        <li>Features</li>
        <li>Products</li>
        <li>Contact</li>
    </ul>
    <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp} alt="" />
        </div>
    </div>
    <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 -All Rights Reserved by  <span>Mr.Srinivas</span></p>

    </div>
    </div>
    
  )
}

export default Footer