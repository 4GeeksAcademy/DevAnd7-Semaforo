import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Luz from './components/Luz';

function Semaforo() {
  const [activeLight, setActiveLight] = useState(null);

  return (
    <div className='semaforo d-flex flex-column justify-content-center align-items-center'>
      <div className='cajaPeq bg-black'></div>
      <div className='cajaGra bg-black d-flex flex-column p-2 gap-2 rounded-4'>
        <Luz
          color="bg-danger"
          isOn={activeLight === "red"}
          onClick={() => setActiveLight(activeLight === "red" ? null : "red")}
        />

        <Luz
          color="bg-warning"
          isOn={activeLight === "yellow"}
          onClick={() => setActiveLight(activeLight === "yellow" ? null : "yellow")}
        />
        <Luz
          color="bg-success"
          isOn={activeLight === "green"}
          onClick={() => setActiveLight(activeLight === "green" ? null : "green")}
        />
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Semaforo />
  </React.StrictMode>,
)
