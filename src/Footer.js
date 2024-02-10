import React from 'react'
import './footer.css'
import { CgMail } from "react-icons/cg";
import { IoIosPhonePortrait } from "react-icons/io";


function Footer() {
  return (
 <footer className='footer'>
      <div class="footer-row">
         <div class="footer-col">
           <h4>Language</h4>
              <ul class="links">
               <li><a href="#">English</a></li>
               <li><a href="#">Tamil</a></li>
               <li><a href="#">Kannadam</a></li>
           </ul>
          </div>

            <div class="footer-col">
              <h4>Contect</h4>
              <ul class="links">
                <li><a href="#"><CgMail  /> suresh16palani@gmail.com</a></li>
                <li><a href="#"><IoIosPhonePortrait /> 8778476778</a></li>  
              </ul>
              </div>
         
           </div>
       </footer>
  )
}

export default Footer