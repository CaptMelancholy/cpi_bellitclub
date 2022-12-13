import React, { Component } from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap';
import 'react-vertical-timeline-component/style.min.css';
import BgTimeLine from '../Components/Authors/Bagushevich/bagushevichTimeLine.js';

export default class bagushevichPage extends Component {
    render() {
        return (
        <>
           <BgTimeLine /> 
           <Carousel variant="dark" className='w-75 d-flex t-center'>
                <CarouselItem >
                    <img className="d-block w-75 m-auto" src='https://www.nlb.by/upload/iblock/21b/af.jpg' alt='books' />
                    
                </CarouselItem>
                <CarouselItem>
                <img className="d-block w-75 m-auto" src='https://libcat.ru/uploads/posts/pictures/187428-bahusevic_tvory_apisannie_630.jpg' alt='books' />
                </CarouselItem>
                <CarouselItem>
                <img className="d-block w-75 m-auto" src='https://www.nlb.by/upload/medialibrary/7bf/bahushevich.jpg' alt='books' />
                </CarouselItem>
           </Carousel>
        </>
            
        )
    }
}
