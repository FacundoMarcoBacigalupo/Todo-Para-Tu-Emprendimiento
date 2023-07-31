import React from 'react'
import LogoTipo from "../../Img/Todo-Para-Tu-Emprendimiento.jpg"
import { NavLink } from 'react-router-dom'
import "./navbar.css"


const NavBar = () => {
    return (
        <nav id='stylesNavBar' className="navbar navbar-expand-sm">
            <div className="container-fluid">
                <NavLink to={'/'} className="navbar-brand"><img src={LogoTipo} alt='LogoTipo' id='ImgLogoNavBar' /></NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink to={'/'} className="nav-link">Inicio</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to={'/sobreNosotros'} className="nav-link">Sobre nosotros</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default NavBar