import React from 'react'
import './footer.css'
import img1 from "../../assests/rvlogo.png";


export default function Footers() {
  return (
    <>
    
    <div id="footer">
      <div id="end-center-left" className='d-flex'>
      <img  id="img" src={img1} alt="rvlogo" /> 
      </div>
      <p id="para">R.V College Of Engineering</p>
      <div id="end-center-right">
        <h4>Contact Us</h4>
        <div>Ph No: +9100000000</div>
        <div>e-mail: something@rvce.edu.com</div>
       
      </div>

      <div id="bottom">
<p>Copyright © 2015 rvce.edu.in  All Rights Reserved.</p> 
</div>

      </div>

 



  

  

  
    
    </>
  )
}