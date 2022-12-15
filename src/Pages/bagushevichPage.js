import React, { Component } from 'react'
import 'react-vertical-timeline-component/style.min.css';
import YoutubeEmbed from '../Components/YoutubeEmbed.js';
import Home from '../Components/GoogleMap.js';
import AuCard from '../Components/AuCard.js';
import initialDetails from '../Data/initialDetails.js';
import AuGallery from '../Components/AuGallery.js';
import TimeLine from '../Components/TimeLine.js';
import bgTL from '../Data/bagushevichInfo.js';

export default class bagushevichPage extends Component {
    render() {
        return (
            <>
                <AuCard element={initialDetails[0]} />
                <TimeLine element={bgTL} />
                <AuGallery element={initialDetails[0]} />
                <YoutubeEmbed embedId="2SEHtuDrcQY" />
                <Home latit="54.999624257150394" longit="26.655251626304334" />
            </>
        )
    }
}
