import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
function Skills({searchFilter}) {
  return (
   
    <div className='container'>
     {searchFilter.map(data => data.id === 2 ? 
     
     <div > 
         <h1 className='h1'>{data.title }</h1>
         <div className='imgContainer '>
 <img className='img' src='https://img.freepik.com/premium-vector/purple-web-development-background_76964-167.jpg?w=1060'
        alt="img" />
          <article className='skills'>
            <ul>
            <li>Java</li>
            <li>Html,Sss</li>
            <li>JavaScript</li>
            <li>MySql</li>
            <li>SpringBoot <Link to="summary" style={{fontSize:"20px"}}>Click Here To Open Summary</Link></li>
            </ul>
        </article>
     </div> </div>: null)}
       
 
        
        </div>
  )
}

export default Skills