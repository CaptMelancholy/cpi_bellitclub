import React, { Component } from 'react'
import AuCard from '../Components/AuCard.js';
import initialDetails from '../Data/initialDetails.js';
import AuGallery from '../Components/AuGallery.js';
import TimeLine from '../Components/TimeLine.js';
import brovTL from '../Data/brovkaInfo.js';
import YoutubeEmbed from '../Components/YoutubeEmbed.js';

export default class brovkaPage extends Component {
  render() {
    return (
      <>
        <AuCard element={initialDetails[2]} />
        <TimeLine element={brovTL} />
        <AuGallery element={initialDetails[2]} />
        <YoutubeEmbed embedId="7xHGTr4EbK4" />
      </>
    )
  }
}
