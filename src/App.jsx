import React from 'react'
import { useState } from 'react'
import "./App.css"

const btnStyle = {
  padding: "10px 20px",
  margin: "10px",
  borderRadius: "5px",
  border: "none",
  color: "black"
}





const App = () => {
  const [color, setColor] = useState("grey")



  return (
    <div style={{ backgroundColor: color, width: "100vw", height: '100vh' }}>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} className='btnContainer'>



        <button onClick={() => { setColor("green") }} style={btnStyle} >Green</button>
        <button onClick={() => { setColor("yellowgreen") }} style={btnStyle}>Yellow</button>
        <button onClick={() => { setColor("orange") }} style={btnStyle}>Orange</button>
        <button onClick={() => { setColor("purple") }} style={btnStyle}>Purple</button>
        <button onClick={() => { setColor("violet") }} style={btnStyle}>Voilet</button>
        <button onClick={() => { setColor("red") }} style={btnStyle}>Red</button>
        <button onClick={() => { setColor("rosybrown") }} style={btnStyle}>Rose Brown</button>
        <button onClick={() => { setColor("blue") }} style={btnStyle}>Blue</button>
        <button onClick={() => { setColor("olive") }} style={btnStyle}>Olive</button>
        <button onClick={() => { setColor("lavender") }} style={btnStyle}>Lavender</button>
        <button onClick={() => { setColor("Black") }} style={btnStyle}>Black</button>
        <button onClick={() => { setColor("pink") }} style={btnStyle}>Pink</button>






      </div>




    </div>
  )
}

export default App