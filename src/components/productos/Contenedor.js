import React from 'react'

import Historia from '../interfaz/Historia'
import Body from "../interfaz/Body"
import Fotos from '../interfaz/Fotos'
import Escucha from '../interfaz/Escucha'
import Redes from '../interfaz/Redes'
import Footer from '../interfaz/Footer'
import Formulario from '../interfaz/Formulario'


const Contenedor = () => {
  return (
    <>
      
      <Body />
      <Historia />
      <Fotos />
      <Escucha />
      <Redes />
      
      <Footer />
      <Formulario />

    </>
  )
}

export default Contenedor;