import React from 'react'
import LogoTipo from "../../Img/Todo-Para-Tu-Emprendimiento.jpg"
import { NavLink } from 'react-router-dom'
import navBarImg from '../../Img/menu-hamburguesa.png'
import "./navbar.css"


const NavBar = () => {
    return (
        <nav id='stylesNavBar' className="navbar navbar-expand-sm">
            <div className="container-fluid">
                <NavLink to={'/'} className="navbar-brand"><img src={LogoTipo} alt='LogoTipo' id='ImgLogoNavBar' /></NavLink>

                <button style={{height:"40px", width:"80px", padding:"0px"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span  class="navbar-toggler"><img style={{height:"30px", margin:"auto"}} src={navBarImg} alt="img" /></span>
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