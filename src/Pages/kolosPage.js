import React, { Component } from 'react'
import AuCard from '../Components/AuCard.js';
import initialDetails from '../Data/initialDetails.js';
import AuGallery from '../Components/AuGallery.js';
import TimeLine from '../Components/TimeLine.js';
import klTL from '../Data/kolosInfo.js';
import YoutubeEmbed from '../Components/YoutubeEmbed.js';
import Home from '../Components/GoogleMap.js';

export default class kolosPage extends Component {
  render() {
    return (
      <>
        <AuCard element={initialDetails[4]} />
        <TimeLine element={klTL} />
        <AuGallery element={initialDetails[4]} />
        <YoutubeEmbed embedId="HxFeWGZspJQ" />
        <Home coord={initialDetails[4]} />
      </>
    )
  }
}
