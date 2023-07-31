import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import Home from '../Components/Home/Home'
import AboutUs from '../Components/AboutUs/AboutUs'


const Router = () => {
    return (
        <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route exact path='/' element={<Home/>} />

                    <Route exact path='/sobreNosotros' element={<AboutUs/>} />
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
}


export default Router