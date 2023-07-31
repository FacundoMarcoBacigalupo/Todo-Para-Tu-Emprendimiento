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

import "./home.css"
import Carrousel from '../Carrousel/Carrousel'



const Home = () => {
    return (
        <Fragment>
        <div className="container-fluid p-5 text-center containerBackground">
            <h1>Todo Para Tu Emprendimiento</h1>
            <h5>📊Todo para tu emprendimiento💸 Bolsas, etiquetas para zapatillas y más👟 tu clave al éxito ¡Impulsa tu marca! 🛍️ Cañuelas, Buenos Aires📍</h5> 
        </div>
            
        <div className="container mt-5">
            <div className="row">
                <Cards ClassCol="col-sm-6" title="Bolsa riñón X10 $900" image="bolsasRiñonAdidas" description="Bolsas de tamaño para zapatillas o ropa"><Carrousel img1={bolsasRiñonAdidas} img2={bolsasRiñonNike} img3={bolsasRiñonConverse} /></Cards>

                <Cards ClassCol="col-sm-6" title="Bolsas transparentes X10 $700" image="" description="Las bolsas transparentes son autoadhesivas"><Carrousel img1={bolsasTransAdidas} img2={bolsasTransNike} img3={bolsasTransConverse} img4={bolsasTransSinMarca} /></Cards>

                <Cards ClassCol="col-sm-6" title="Cartón por X10 $600" image="" description="Carton doblabe"><Carrousel img1={cartonAdidas1} img2={cartonAdidas2} img3={cartonNike1} img4={cartonNike2} /></Cards>

                <Cards ClassCol="col-sm-6" title="Bolsa riñón, bolsas transparentes, Cartón X10 $2200" image="" description="Pack completo, todo en uno"><Carrousel img1={comboAdidas} img2={comboNike} img3={comboConverse}  /></Cards>
            </div>
        </div>
        </Fragment>
    )
}



export default Home