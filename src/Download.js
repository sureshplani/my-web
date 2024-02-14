import React from 'react'
import './App.css'
function Download() {

  const handleDownload = () => {
     fetch("SureshPalanichamyResume.pdf").then(response => response.blob()
     .then(blob =>
     { const fileURL = window.URL.createObjectURL(blob)
      let link = document.createElement("a")
       link.href = fileURL
       link.download = "SureshPalanichamyResume.pdf"
       link.click()}
       ))
  }
  return (
    <div className='download'>
         <p>Click Below The Download Button To Download My Resume</p>
         <button onClick={handleDownload} >Download</button>
     </div>
  )
}

export default Download