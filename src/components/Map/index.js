import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Container } from './styles'



const Map = ({ mapStyles = { height: '100%', width: '100%'}, zoom = 15.5, center, mapProps, ...otherProps}) => {

  return (
    <Container {...otherProps}>
      <LoadScript
        googleMapsApiKey="AIzaSyBytgbwOGWK6HKMeyrGOEAUpwDQSLplonQ"
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={zoom}
          center={center}
          {...mapProps}
        >
          <Marker position={center}/>
          <></>
        </GoogleMap>
      </LoadScript>
    </Container>
  )
}

export default Map
