import React, { Component } from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap';
import 'react-vertical-timeline-component/style.min.css';
import BgTimeLine from '../Components/Authors/Bagushevich/bagushevichTimeLine.js';
import YoutubeEmbed from '../Components/YoutubeEmbed.js';
import Home from '../Components/GoogleMap.js';
import AuCard from '../Components/AuCard.js';
import initialDetails from '../Data/initialDetails.js';

export default class bagushevichPage extends Component {
    render() {
        return (
            <>
                <AuCard element={initialDetails[0]} />
                <BgTimeLine />
                <h2 className='text-center'>Галерея</h2>
                <div className='d-flex flex-grid justify-content-between'>
                    <Carousel variant="dark" className='w-75 h-75 m-auto'>
                        <CarouselItem >
                            <img className="d-block w-75 h-75 m-auto" src='https://www.nlb.by/upload/iblock/21b/af.jpg' alt='books' />

                        </CarouselItem>
                        <CarouselItem>
                            <img className="d-block w-75 h-75 m-auto" src='https://libcat.ru/uploads/posts/pictures/187428-bahusevic_tvory_apisannie_630.jpg' alt='books' />
                        </CarouselItem>
                        <CarouselItem>
                            <img className="d-block w-75 h-75 m-auto" src='https://www.nlb.by/upload/medialibrary/7bf/bahushevich.jpg' alt='books' />
                        </CarouselItem>
                    </Carousel>
                </div>
                
                <YoutubeEmbed embedId="2SEHtuDrcQY" />
                <Home latit="54.999624257150394" longit="26.655251626304334" />
            </>

        )
    }
}
