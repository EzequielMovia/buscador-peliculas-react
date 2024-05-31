import React from 'react'
import ReactDOM from 'react-dom/client'
import { BuscadorPeliculas } from './BuscadorPeliculas'
import './Style.css';
import { Imagenes } from './Imagenes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BuscadorPeliculas />
   <Imagenes></Imagenes>
  </React.StrictMode>

)
