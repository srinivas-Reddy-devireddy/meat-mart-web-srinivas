import React from 'react'
import './CommingsSoon.css'
import { Link } from 'react-router-dom'
const CommingSoon = () => {
  return (
    <div className='comming'>
       
<img src="http://clipart-library.com/new_gallery/31-313080_coming-soon-hd-png.png" alt="" />


<Link to='/Features' className="back">
<div >
<h1>Back To Features</h1>
</div>
</Link>


    </div>
  )
}

export default CommingSoon