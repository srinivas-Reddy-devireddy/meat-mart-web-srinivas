import { useRef} from "react"
import React from 'react'
import emailjs from '@emailjs/browser';

import './Contact.css'
const Contact = () => {
    
    

   

    const form=useRef()
    const sendEmail = (e) => {
    
        e.preventDefault();
    
        emailjs.sendForm('service_4gh00tp', 'template_lk46hit', form.current, '8_9MWeqjo6P0y_5fl')
          .then((result) => {
            alert('submitted successfully!')
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          
      };

  
  return (


    
    <section className="contact-section">
        <div>
        <div className="contact-me">
   
   <h3> Feel Free To Contact Me </h3>
   <div className="info">
    <div>
        <i className="fas fa-phone">   </i><br />
   <i className="fas fa-envelope"> </i><br />
   <i className="fas fa-address-book"> </i>
   </div>
   
   <ul>
    <li className="one">9133870617</li>
    <li className="three">srinureddy1595@gmail.com</li>
    <li className="two">India ,Hyderabad</li>
   </ul>
   </div>
   

</div>
        </div>
        <div>
        <div className="container">
        <h2 >Contact Us</h2>
            <form ref={form} onSubmit={sendEmail} >
           
                <input type="text"   placeholder='Full Name'  name='user_name'  
                      required/>
                <input type="Email" placeholder='Email' name='user_email'   required/>
                <input type="text"   placeholder='Subject' name='Subject'    required/>
                <textarea name="message"  cols="30" rows="10"   ></textarea>
                
              <button onSubmit={sendEmail}>Submit Here</button>
               
              
            </form>
        </div>
        </div>
       


       
    
    </section>
   
  )
}

export default Contact