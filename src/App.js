import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Features from './components/Features/Features';
import Produtc from './components/Products/Produtc';
import Cart from './components/Cart/Cart';
import CommingSoon from './components/CommingSoon/CommingSoon';
import Contact from './components/Contact/Contact';
function App() {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <div className="App">
      {show?'':""}
      <BrowserRouter>
     <Navbar setShow={setShow} size={cart.length}/>
     
      
     <Routes>
     
     
       <Route path='/Products' element={<Produtc  handleClick={handleClick} />}/>

     
        <Route path='/Cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />}/>

      
     <Route path='/'  element={<Home/>}/>
      
     <Route path='/Features'  element={<Features/>}/>
     <Route path='/Contact'  element={<Contact/>}/>
     <Route path='/Commingsoon' element={<CommingSoon/>}/>
     
          </Routes>
     <Footer/>
   
      </BrowserRouter>
    
    </div>
  );
}

export default App;

