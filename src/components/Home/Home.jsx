import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Slider from '../Slider'






const Home = () => {
  return (
    <>
   
   
    <section className="home" >
    <Slider/>
 <div className="home-img">
 
   {/* <img src="https://assets.licious.in/oms/8d506a84-bdd6-5b52-5f2b-45fd757f71bc/original/1699256594513.jpeg" alt="" />  */}
   
 </div>
    <div className="content">
        <h3>The Best Fresh Meat Delivery  Online</h3>
        <Link to='/Products'>
        <button className='btn1' >SHOP NOW</button>
        </Link>
       
    </div>
    <div className="categories">
      <div className="containers">
      <Link to='/Products'>
        <div className="boxes">
        
            <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d654ce6f-3b1a-efb1-ce66-64b3a4afb655/original/Chicken_(1)_(1).png" alt="" />
         <h3>Chicken</h3>
        
        
        </div>
        </Link>
        <Link to='/Products'>
        <div className="boxes">
       
        <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/52ed9676-ec28-711e-dd8a-55d4ea17c324/original/Fish_(1)_(1)_(1).png" alt="" />
        <h3>Sea Food</h3>
        
       
        </div>
        </Link>
        <Link to='/Products'>
        <div className="boxes">
       
        <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/82b8b842-3d62-955f-6076-c57ca8fdb4c5/original/Prawns.png" alt="" />
        <h3>Prawns</h3>
       
        </div>
        </Link>
        <Link to='/Products'>
        <div className="boxes">
       
        <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/2119874c-38a6-df8c-22f1-5cd8a2eb4d80/original/Mutton_(1)_(1).png" alt="" />
        <h3>Mutton</h3>
       
        </div>
        </Link>
        <Link to='/Products'>
        <div className="boxes">
       
        <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/544bddc9-5775-cd44-511c-8e7e78f75a10/original/Eggs.png" alt="" />
        <h3>Eggs</h3>
       
        </div>
        </Link>
      </div>
      
    </div>
    
</section>
</>
  )
}

export default Home