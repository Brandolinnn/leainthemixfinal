import React from 'react'
import banner from "../../assets/BANNER.jpg"
import Redes from '../interfaz/Redes'
import Footer from '../interfaz/Footer'

import Body from '../interfaz/Body'
import Formulario from '../interfaz/Formulario'

const cursos = () => {
    return (
        <>
            <h3 className='titulo-proximamente'>PRÓXIMAMENTE...</h3>
            
            
            <div className='foto-cursos'>
                <img src={banner} className="foto-banner-curso" alt="fotoLean" />

            </div>


            

            <Redes />
            <Footer />
            <Formulario />



        </>
    )
}

export default cursos