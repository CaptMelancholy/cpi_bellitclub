import React, { Component } from 'react'
import AuCard from '../Components/AuCard.js';
import initialDetails from '../Data/initialDetails.js';
import AuGallery from '../Components/AuGallery.js';
import TimeLine from '../Components/TimeLine.js';
import bogdTL from '../Data/bogdanovichInfo.js';
import YoutubeEmbed from '../Components/YoutubeEmbed.js';

export default class bogdanovichPage extends Component {
  render() {
    return (
      <>
        <AuCard element={initialDetails[3]} />
        <TimeLine element={bogdTL} />
        <AuGallery element={initialDetails[3]} />
        <YoutubeEmbed embedId="ASaN7iVmR2I" />
        
      </>
    )
  }
}
