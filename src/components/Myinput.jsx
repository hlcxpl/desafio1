import React, { useState } from 'react'

const MyInput = () => {
  const [name, setName] = useState('')
  const [color, setColor] = useState('')

  return (
    <div style={{backgroundColor: color}}>
      <h1>Este es mi input</h1>
      <h3>Contenido del input: {name}</h3>
      <input value={name} onChange={ (ev) => setName(ev.target.value)} />
      <input onChange={(co)=> setColor(co.target.value)}/>
    </div>
  )
}
export default MyInput