import { useState } from 'react'

function App() {
  return (
      <div>
      <h1>Bien Vinido!</h1>
      <p>Esta é a exemplificação do segundo exercício!</p>
      <Button/>
      </div>
  )
}

function Button() {
  function click() {
    alert('Você clicked no button!');
  }
  return(
    <button style={{padding:'10px 20px', fontSize:'16px', cursor:'pointer'}} onClick={()=>click()}>Click here!</button>

  )
}

export default App
