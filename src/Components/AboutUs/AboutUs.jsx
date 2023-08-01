import React, { Fragment } from 'react'
import imgIG from '../../Img/INSTAGRAM.png'
import imgFB from '../../Img/FACEBOOK.png'
import "./aboutUs.css"


const AboutUs = () => {
    return (
        <Fragment>
        <main className="container-fluid p-5 text-center containerBackgroundUs">
            <h1>¿Quienes somos?</h1>
            <h5>Somos proveedores minoristas. Actualmente, nos dedicamos a la venta de bolsas y etiquetas para zapatillas, pero en un futuro cercano planeamos expandirnos a más indumentaria. Nos ubicamos en Cañuelas, Buenos Aires, Argentina.</h5>
        </main>

        <section className='sectionUs'>
            <h3>Seguinos en nuestras Redes Sociales</h3>

            <a href="https://www.instagram.com/papelera_canuelas/" id="igUs"><img src={imgIG} alt="Instagram" /></a>
            <a href="https://www.facebook.com/papeleracanuelass/" id="fbUs"><img src={imgFB} alt="Facebook" /></a>
        </section>
        </Fragment>
    )
}


export default AboutUs