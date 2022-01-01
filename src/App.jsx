import { useState } from 'react'
import QRCode from "react-qr-code";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <div style={{marginBottom: '20px'}}>
          <h2 className='title'>¡¡Feliz Navidad y Prospero Año Nuevo!! 🎁🎄</h2>
          <p style={{fontWeight: 'bolder', color: "#989C9A"}}>¿Que esperas? ¡Scanealo! <span style={{color: 'black'}}>📷 👉👈</span></p>
        </div>
        <div>
          <QRCode value="https://surprise-ten.vercel.app/surprise/maybel" />
        </div>
      </div>
    </div>
  )
}

export default App
