import React from 'react'
import './profile.css'
function Profile({searchFilter}) {
  return (
    <div className='container' > 
   {searchFilter.map(data => data.id === 1 ?
                 <div key={data.id}>
                  <h1 className='h1' >{data.title}</h1>
                  <div className='imgContainer1 '>
                  <article className='profile'>
                  <p>
                  I would like to turn out to be software professionalwhere,
                  I can work as a team member and to secure aposition 
                  where I can efficiently contribute my skills andabilities to the growth of the 
                  organization and make myprofessional career.
                  </p>
                 </article>
               <img className='img1' 
                src='https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg'
                 alt="img" /> 
                </div> </div> : null)
                }
              </div>
   
  )
}

export default Profile