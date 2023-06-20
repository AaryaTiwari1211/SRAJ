import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import saree1 from '../../assets/saree1.jpg'
import saree2 from '../../assets/saree2.jpg'
import slider1 from '../../assets/slider1.png'
import slider2 from '../../assets/slider2.png'
import slider3 from '../../assets/slider3.png'
import slider4 from '../../assets/slider4.png'
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const CarouselComp = () => {
    return (
        <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out" 
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            <div><img src={slider1} /></div>
            <div><img src={slider2} /></div>
            <div><img src={slider3} /></div>
            <div><img src={slider4} /></div>
        </Carousel>
    )
}

export default CarouselComp;