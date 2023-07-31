import React from 'react'
import logoTipo from '../../Img/Todo-Para-Tu-Emprendimiento.jpg'
import imgIG from '../../Img/INSTAGRAM.png'
import imgFB from '../../Img/FACEBOOK.png'
import { Link } from 'react-router-dom'
import "./footer.css"


const Footer = () => {
    return (
        <footer className="containerFooter">
            <Link to={'/'}><img src={logoTipo} className="fotoFooter" alt="Imagen logotipo" /></Link>

            <div className="redesFooter">
                <p className="puertoFooter">Seguinos en las Redes</p>

                <a href="https://www.instagram.com/todoparatuemprendimient0/" id="ig"><img src={imgIG} alt="Instagram" /></a>

                <a href="https://web.facebook.com/people/Todo-Para-Tu-Emprendimiento/100095354197270/" id="fb"><img src={imgFB} alt="Facebook" /></a>
            </div>

            <p className="copyrightFooter">Argentina, Buenos Aires ©2023 Todo Para Tu Emprendimiento. Todos los derechos reservados. By Facundo Marco Bacigalupo</p>
        </footer>
    )
}


export default Footer