import React ,{useState,useEffect}from 'react'
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart =({ cart, setCart, handleChange }) => {

    const [price, setPrice] = useState(0);
  
    const handleRemove = (id) => {
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr);
      handlePrice();
    };
  
    const handlePrice = () => {
      let ans = 0;
      cart.map((item) => (ans += item.amount * item.price));
      setPrice(ans);
    };
  
    useEffect(() => {
      handlePrice();
    });
  
    return (
      <>
     
     
      
      
     
      <div className='cart-container'>
      {cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="img">
            <img src={item.img} alt="" />
            </div>
            <div className="content-box">
            <div className="title-price">
               
              
              
               <p>{item.title}</p>
               
               
               <span  > {item.price} /-</span>
              
                
               
            
           </div>
           <div className="qty-adding">
               
               <span>{item.qty}</span>
              
               <div className='adding-box'>
              <button onClick={() => handleChange(item, 1)}>+</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, -1)}>-</button>
            </div> 
            
          
             {/* <button onClick={() => handleChange(item, 1)}>+</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, -1)}>-</button>  */}

           </div>
           
            </div>
              
           
           <button onClick={() => handleRemove(item.id)} className='delete'><i class="fas fa-trash" ></i></button>
          
        
          </div>
        ))} 
        <div className="total">
          
          <p> Total Price :-  <span>{price} </span> /-</p>
          <Link to='/'><button>Check Out</button></Link>
          
        </div>
      </div>
  

      
      
     

      </>
      
    );
  };

export default Cart