import React from 'react'
import './footer.css'
import { CgMail } from "react-icons/cg";
import { IoIosPhonePortrait } from "react-icons/io";


function Footer() {
  return (
       <footer className='footer'>
                        <ul className='ul'>
                          <h3>Language</h3>
                          <li>English</li>
                          <li>Tamil</li>
                          <li>Kannadam</li>
                        </ul>
                        
                        <div className='contect'>
                        <h3> Contect us</h3>
                        <p className='email'> <CgMail  /> <p>suresh16palani@gmail.com</p> </p>
                        <p className='phone'> <IoIosPhonePortrait /> <p>8778476778</p> </p>
                        </div>

       </footer>
  )
}

export default Footer