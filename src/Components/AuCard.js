import React, { Component } from 'react'

const AuCard = ({ element }) => (
    <div style={ {display: 'flex', justifyContent: 'center', textAlign: 'center'} }>
        <div className='card-author w-50'>
            <img className='card-image' src={element.imgPath}></img>
            <h1>{element.name}</h1>
            <h2>{element.date}</h2>
            <p>{element.details}</p>
        </div>

    </div>
)

export default AuCard;