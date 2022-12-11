import React, { Component } from 'react'
import Search from '../Components/SearchComp';
import initialDetails from '../Data/initialDetails';

export default class List extends Component {
  render() {
    return (
      <div className="tc bg-green ma0 pa4 min-vh-100">
        <Search details={initialDetails} />
      </div>
    )
  }
}
