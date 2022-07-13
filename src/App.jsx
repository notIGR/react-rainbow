import React, { useState } from 'react'
import './App.css'
import ColorBlock from './colorBlock'
import ColorForm from './colorForm'

function App(){
  const [colors, setColors] = useState([
      'violet', 'blue',
      'lightblue', 'green',
      'greenyellow', 'yellow',
      'orange', 'red'
  ])

  const addColor = (newColor) => {
      setColors([...colors, newColor])
  }

  return (
<div className="App">
    {colors.map((color) => 
        <ColorBlock key={ color } color={ color } />
    )}
    <ColorForm addColor={addColor} />
</div>
  )
}



export default App