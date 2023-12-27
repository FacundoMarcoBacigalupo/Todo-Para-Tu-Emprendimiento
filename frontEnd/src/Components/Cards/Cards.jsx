import React from 'react'
import axios from 'axios'
import "./cards.css"


const Cards = (prod) => {

    return (
        <section id='cards' className={prod.ClassCol}>
            <header>
                <h3>{prod.title}</h3>
            </header>
                {prod.children}
            <footer>
                <h5>{prod.description}</h5>
                <h5>{prod.price}</h5>
                <button onClick={() =>{
                    axios.post("http://localhost:8080/api/payment/create-order", {
                        title: prod.title,
                        description: prod.description,
                        price: prod.price
                    })
                    .then((res) => window.location.href = res.data.response.body.init_point)
                    .catch((error) => {
                        console.error("Error en la solicitud Axios:", error);
                    });
                }}>
                    Comprar
                </button>
            </footer>
        </section>
    )
}


export default Cards