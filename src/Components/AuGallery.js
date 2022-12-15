import React, { Component } from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap';

const AuGallery = ({ element }) => (
    <>
        <h2 className='text-center'>Галерея</h2>
        <div className='d-flex flex-grid justify-content-between'>
            <Carousel variant="dark" className='w-75 h-75 m-auto'>
                <CarouselItem >
                    <img className="d-block w-75 h-75 m-auto" src={element.img1} alt='books' />

                </CarouselItem>
                <CarouselItem>
                    <img className="d-block w-75 h-75 m-auto" src={element.img2} alt='books' />
                </CarouselItem>
                <CarouselItem>
                    <img className="d-block w-75 h-75 m-auto" src={element.img3} alt='books' />
                </CarouselItem>
            </Carousel>
        </div>
    </>
)

export default AuGallery;