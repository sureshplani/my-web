import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom';
function Nav() {


  return (
   <nav className="Nav">
    <h1>I'M Suresh Palanichamy</h1>
    <div className='link'>
    <li> <Link to="/"> Home </Link> </li>
 <li> <Link to="download"> Download </Link> </li>
 

    </div>

   </nav>
  )
}

export default Nav