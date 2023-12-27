import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imagenNotFound from '../../Img/imagenNotFound.jpg'


const Carrousel = ({img1=imagenNotFound, img2=imagenNotFound, img3=imagenNotFound, img4=imagenNotFound}) => {
    return (
        <Carousel>
            <Carousel.Item>
            <img height={500} src={img1} alt="img" />
            </Carousel.Item>
            
            <Carousel.Item>
                <img height={500} src={img2} alt="img" />
            </Carousel.Item>
            
            <Carousel.Item>
                <img height={500} src={img3} alt="img" />
            </Carousel.Item>
            
            <Carousel.Item>
                <img height={500} src={img4} alt="img" />
            </Carousel.Item>
        </Carousel>
    )
}


export default Carrousel