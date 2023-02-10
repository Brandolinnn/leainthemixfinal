import React from 'react'
import Redes from '../interfaz/Redes'
import Footer from '../interfaz/Footer'
import Formulario from "../interfaz/Formulario"

import personaje from "../../assets/personaje.png"


const Productos = () => {
  return (
    <>

      <h3 className='titulo-proximamente'>PRÓXIMAMENTE...</h3>



      <div className='productos'>
        <div className='producto'>

          <a >
            <div className='producto_img'>
              <img src={personaje} className="personaje" alt="personaje" />
            </div>
          </a>
          <div className='producto_footer'>
            <h1>Próximamente</h1>

            <p className='precio'>?</p>
          </div>

          <div className='buttom'>
            <button className='btn' >Próximamente</button>
            <div >
              <a className='btn'  >Próximamente</a>
            </div>
          </div>
        </div>

        <div className='producto'>

          <a >
            <div className='producto_img'>
              <img src={personaje} className="personaje" alt="personaje" />
            </div>
          </a>
          <div className='producto_footer'>
            <h1>Próximamente</h1>

            <p className='precio'>?</p>
          </div>

          <div className='buttom'>
            <button className='btn' >Próximamente</button>
            <div >
              <a className='btn'  >Próximamente</a>
            </div>
          </div>
        </div>

        <div className='producto'>

          <a >
            <div className='producto_img'>
              <img src={personaje} className="personaje" alt="personaje" />
            </div>
          </a>
          <div className='producto_footer'>
            <h1>Próximamente</h1>

            <p className='precio'>?</p>
          </div>

          <div className='buttom'>
            <button className='btn' >Próximamente</button>
            <div >
              <a className='btn'  >Próximamente</a>
            </div>
          </div>
        </div>





      </div>
      <Redes />
      <Footer />
      <Formulario />

    </>
  )
}

export default Productos;