import React from 'react'
import './Product.css'
import Card from '../Cards/Card'
import data from '../Data'



const Produtc = ({handleClick}) => {
   
    return (
     
  
      <div>
         <h1 className='h1'>All Type Of Meats Avalible Here</h1>
          <section>
         
          {data.map((item)=>(
          

          <Card key={item.id} item={item} handleClick={handleClick}/>
          ))}
          </section>
           
              </div>
    )
  }

export default Produtc
