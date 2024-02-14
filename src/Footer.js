import React from 'react'
import './footer.css'
import { CgMail } from "react-icons/cg";
import { IoIosPhonePortrait } from "react-icons/io";
import { Link } from 'react-router-dom';


function Footer() {
  return (
 <footer className='footer'>
      <div className="footer-row">
         <div className="footer-col">
           <h4>Language</h4>
              <ul className="links">
               <li><Link to="#">English</Link></li>
               <li><Link to="#">Tamil</Link></li>
               <li><Link to="#">Kannadam</Link></li>
           </ul>
          </div>

            <div className="footer-col">
              <h4>Contect</h4>
              <ul className="links">
                <li><Link to="#"><CgMail  /> suresh16palani@gmail.com</Link></li>
                <li><Link to="#"><IoIosPhonePortrait /> 8778476778</Link></li>  
              </ul>
              </div>
         
           </div>
       </footer>
  )
}

export default Footer