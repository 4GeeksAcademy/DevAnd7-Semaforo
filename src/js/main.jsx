import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Luz from './components/Luz';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='semaforo d-flex flex-column justify-content-center align-items-center'>
      <div className='cajaPeq bg-black'></div>
      <div className='cajaGra bg-black d-flex flex-column p-2 gap-2'>
        <Luz
          color="red" />
          <Luz
          color="yellow" />
          <Luz
          color="green" />
      </div>
    </div>
  </React.StrictMode>,
)
