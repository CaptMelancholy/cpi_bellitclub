import React, { useMemo } from 'react';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

var center
export default function Home(latit, longit) {
    center = { lat: 54.999624257150394, lng: 26.655251626304334 };
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBcGCRX6kYq-fQW3ZAYGoPX9ecRmK45cxI",
    });
    if (!isLoaded) return <div>Loading...</div>;
    return <Map />
}


function Map() {
    return (
        <>
            <h2 className='text-center'>Место рождения</h2>
            <GoogleMap zoom={13} center={center} mapContainerClassName="map-container">
                <Marker position={center} />
            </GoogleMap>
        </>
    )
}