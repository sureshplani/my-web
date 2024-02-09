import React, { useEffect, useState } from 'react'
import './home.css'
import Skills from './Skills'
import Profile from './Profile'


function Home({data, setData}) {
  const [search, setSearch] = useState("")
  const [searchFilter, setSearchFilter] = useState([])
  useEffect(
   () =>{
      const searchResult = data.filter(data => 
        data.title.toLowerCase().includes(search.toLowerCase()))
        setSearchFilter(searchResult)

    },[search, data]
  )
  return (
          <div>
             <div className='background'>
                <from onSubmit={(e) => e.preventDefault()}  className="from" >
                <input
                autoFocus
                type='search'
                id="search"
                value={search}
               placeholder='search here '
                onChange={(e) => setSearch(e.target.value)}
                 />
                
                </from>
              </div>
            <Profile searchFilter={searchFilter} />
            <Skills searchFilter={searchFilter} />
     </div>

  )
}

export default Home