import React, { Fragment } from 'react'
import Cards from '../Cards/Cards'
import bolsasRiñonAdidas from '../../Img/ADIDAS/bolsas riñon ADIDAS.jpg'
import bolsasRiñonNike from '../../Img/NIKE/Bolsas riñon NIKE.jpg'
import bolsasRiñonConverse from '../../Img/CONVERSE/bolsas riñon CONVERSE.jpg'

import bolsasTransAdidas from '../../Img/ADIDAS/bolsas transparentes ADIDAS.jpg'
import bolsasTransNike from '../../Img/NIKE/bolsas transparentes NIKE.jpg'
import bolsasTransConverse from '../../Img/CONVERSE/bolsas transparentes CONVERSE.jpg'
import bolsasTransSinMarca from '../../Img/SIN MARCA/SIN MARCA.jpg'

import cartonAdidas1 from '../../Img/ADIDAS/carton ADIDAS.jpg'
import cartonAdidas2 from '../../Img/ADIDAS/carton ADIDAS (2).jpg'
import cartonNike1 from '../../Img/NIKE/carton NIKE.jpg'
import cartonNike2 from '../../Img/NIKE/carton NIKE (2).jpg'

import comboAdidas from '../../Img/ADIDAS/combo ADIDAS.jpg'
import comboNike from '../../Img/NIKE/combo NIKE.jpg'
import comboConverse from '../../Img/CONVERSE/combo CONVERSE.jpg'

import tarjeta1 from '../../Img/tarjeta.png'
import tarjeta2 from '../../Img/tarjeta (2).png'
import tarjeta3 from '../../Img/tarjeta (3).png'


import "./home.css"
import Carrousel from '../Carrousel/Carrousel'



const Home = () => {
    return (
        <Fragment>
        <div className="container-fluid p-5 text-center containerBackground">
            <h1>Papelera Cañuelas</h1>
            <h5>🛍️ Bolsas, etiquetas para zapatillas y más 👟 tu clave al éxito ¡Impulsa tu marca! 📊 Cañuelas, Buenos Aires📍</h5> 
        </div>
            
        <div className="container mt-5">
            <div className="row">
                <Cards ClassCol="col-sm-6" title="Bolsa riñón X10 $900" description="Bolsas de tamaño para zapatillas o ropa" price="900"><Carrousel img1={bolsasRiñonAdidas} img2={bolsasRiñonNike} img3={bolsasRiñonConverse} /></Cards>

                <Cards ClassCol="col-sm-6" title="Bolsas transparentes X10 $700" description="Las bolsas transparentes son autoadhesivas" price="700"><Carrousel img1={bolsasTransAdidas} img2={bolsasTransNike} img3={bolsasTransConverse} img4={bolsasTransSinMarca} /></Cards>

                <Cards ClassCol="col-sm-6" title="Cartón por X10 $600" description="Carton doblabe" price="600"><Carrousel img1={cartonAdidas1} img2={cartonAdidas2} img3={cartonNike1} img4={cartonNike2} /></Cards>

                <Cards ClassCol="col-sm-6" title="Bolsa riñón, bolsas transparentes, Cartón X10 $2200" description="Pack completo, todo en uno" price="2200"><Carrousel img1={comboAdidas} img2={comboNike} img3={comboConverse}  /></Cards>

                <Cards ClassCol="col-sm-6" title="Tarjeta 100% personalizada" description="Te hacemos tu tarjeta 100% personalizada y te la llevamos directo a tu local (Cañuelas). Compra mínima de 50 unidades" price="6000"><Carrousel img1={tarjeta1} img2={tarjeta2} img3={tarjeta3}  /></Cards>

            </div>
        </div>
        </Fragment>
    )
}   



export default Home