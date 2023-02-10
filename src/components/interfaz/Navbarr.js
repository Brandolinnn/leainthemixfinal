import React from 'react'

import logo from "../../assets/logo.png"
import correo from "../../assets/correo.png"
import wsp from "../../assets/wsp.png"

import { NavLink } from 'react-router-dom'

const Navbarr = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <NavLink to={"/"} className={({ isActive }) => (isActive ? "Link active" :
                        "link")}>
                        <img src={logo} className="App-logo" alt="logo" />

                    </NavLink>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink to={"/"} className={({ isActive }) => (isActive ? "nav-link" :
                                    "nav-link")} >
                                    <a className="nav-link active " aria-current="page" >
                                        Inicio
                                    </a>
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to={"/cursos"} className={({ isActive }) => (isActive ? "nav-link" :
                                    "nav-link")}>
                                    <a className="nav-link active " aria-current="page" >
                                        Cursos
                                    </a>
                                </NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink to={"/productos"} className={({ isActive }) => (isActive ? "nav-link" :
                                    "nav-link")}>
                                    <a className="nav-link active " aria-current="page" >
                                        Productos
                                    </a>
                                </NavLink>
                            </li>


                        </ul>
                        <div class="d-flex">
                            <div >
                                <a target="_blank" href="https://api.whatsapp.com/send/?phone=01126720095&text&type=phone_number&app_absent=0" ><img src={wsp} className="correo-wsp " alt="logo" /></a>
                            </div>
                            <div >
                                <a target="_blank" href="mailto:Leainthemix.c@hotmail.com" ><img src={correo} className="correo " alt="logo" /></a>
                            </div>



                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbarr