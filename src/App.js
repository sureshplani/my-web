
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Home from './Home'
import Download from './Download';
import { useState } from 'react';
import Footer from './Footer';
import Summary from './Summary';

function App() {
  const [data,setData] =useState([
    {id:1 , title:"Profile"},
    {id:2 , title:"About"},
  ])
  return (
    <div className="App">
       <Nav />
      <Routes>
        <Route path='/' element={<Home 
                        data={data}
                        setData={setData} />} />
        <Route path='download' element={<Download />} />
        <Route path='summary' element={<Summary />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

