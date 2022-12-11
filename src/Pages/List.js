import React, { Component } from 'react'
import Search from '../Components/SearchComp';
import initialDetails from '../Data/initialDetails';

export default class List extends Component {
  render() {
    return (
      <div className='d-inlineblock justify-content-center'>
        <Search details={initialDetails} />
      </div>
    )
  }
}
