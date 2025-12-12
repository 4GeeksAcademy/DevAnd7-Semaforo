import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import LuzRoja from './components/LuzRoja';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container'></div>
    <div className='cajaPeq bg-black d-flex justify-content-center p-2'>
    <LuzRoja />
    </div>
  </React.StrictMode>,
)
