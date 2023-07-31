import React from 'react'
import Button from '../Button/Button'
import "./cards.css"

const Cards = ({ClassCol, title, children, description}) => {
    return (
        <section id='cards' className={ClassCol}>
            <header>
                <h3>{title}</h3>
            </header>
                {children}
            <footer>
                <h5>{description}</h5>
                <Button />
            </footer>
        </section>
    )
}


export default Cards