import React , { useState }  from 'react'
// import { FaBars, FaTimes } from "react-icons/fa";
// import './Navbar.css'
import './Nav.css'
import { FaBars, FaTimes } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { Close } from "react-icons/tfi";

import { Link } from "react-router-dom";


 const Navbar = ({setShow, size }) => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [menu,setMenu]=useState('home')
  return (
    <>
   <nav className="main-nav" >
     {/* 1st logo part  */}
      <div className="logo" onClick={() => setShow(true)}>
        <Link to='/'><h2>
         <span>M</span>EAT 
         <span>M</span>ART
        
        </h2></Link>
       
     </div>

      {/* 2nd menu part  */}
      <div onClick={() => setShowMediaIcons(!showMediaIcons)}
        className={
          showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
           }>
         
         
       
        <ul onClick={() => setShowMediaIcons(!showMediaIcons)} >
          <li onClick={() => setShowMediaIcons(!showMediaIcons)} >
          <Link   to='/' onClick={()=>{setMenu('home')}}>Home</Link> {menu ==="home" ? <hr/>:''}
           </li>
         
           <li onClick={() => setShowMediaIcons(!showMediaIcons)}>
           <Link  to='/Features' onClick={()=>{setMenu('Features')}}>Features {menu ==="Features" ? <hr/>:''}</Link>
         </li>
          <li onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <Link   to='/Products' onClick={()=>{setMenu('Products')}}>Products {menu ==="Products" ? <hr/>:''}</Link>
          </li>
          <li onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <Link   to='/Contact' onClick={()=>{setMenu('Contact')}}>Contact {menu ==="Contact" ? <hr/>:''}</Link>
            </li>
         </ul>
       </div>

       <Link to='/Cart'>
       <div className="cart"  >
         <span>
           <i className="fas fa-cart-plus" ></i>
           
          </span>
        
          <span>{size}</span>
        </div>
        </Link> 
       {/* 3rd social media links */}
       <div className="social-media">
         {/* <ul className="social-media-desktop">
       
       
         </ul> */}

         {/* hamburget menu start  */}
         <div className="hamburger-menu" onClick={() => setShowMediaIcons(!showMediaIcons)}>
           <div >
            { showMediaIcons ? <FaTimes/>: <FaBars/>  }
          </div>
         </div>
       </div>
    </nav>

    
   </>

   )
 }

export default Navbar