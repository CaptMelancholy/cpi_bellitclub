import React, { Component } from 'react'
import AuCard from '../Components/AuCard.js';
import initialDetails from '../Data/initialDetails.js';
import AuGallery from '../Components/AuGallery.js';
import TimeLine from '../Components/TimeLine.js';
import byadTL from '../Data/byadulyaInfo.js';

import YoutubeEmbed from '../Components/YoutubeEmbed.js';

export default class bidulyaPage extends Component {
  render() {
    return (
      <>
        <AuCard element={initialDetails[1]} />
        <TimeLine element={byadTL} />
        <AuGallery element={initialDetails[1]} />
        <YoutubeEmbed embedId="GB_rlueYscM" />
      </>

    )
  }
}
