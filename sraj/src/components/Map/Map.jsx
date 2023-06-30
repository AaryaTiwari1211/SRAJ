import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useState } from 'react'
import ReactMapGL, { NavigationControl, Source, Layer, Marker } from 'react-map-gl'
import locationpin from '../../assets/locationpin.png'
const Map = () => {
    const [viewport, setViewPort] = useState({
        latitude: 19.033400,
        longitude: 73.019000,
        zoom: 15
    })
    const [marker, setMarker] = useState({
        latitude: 19.033400,
        longitude: 73.019000,
    });
    return (
        <div>
            <ReactMapGL
                initialViewState={viewport}
                mapboxAccessToken='pk.eyJ1IjoiYWFyeWF0aXdhcmkiLCJhIjoiY2xnZDZhZmxwMDVlYTNncWZwc2ViNThnbiJ9.b5gkUgo-Im8y5Isc_D2pSg'
                mapStyle={"mapbox://styles/mapbox/streets-v11"}
                style={{
                    width: '300px',
                    height: '300px',
                    margin:'30px'
                }}
            >
                <NavigationControl />
                <Marker
                    latitude={marker.latitude}
                    longitude={marker.longitude}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <img
                        src={locationpin}
                        alt="Marker"
                        style={{ width: '30px', height: '30px' }}
                    />
                </Marker>
            </ReactMapGL>
        </div>
    )
}

export default Map