import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import PropTypes from 'prop-types';

import './Map.css';
import fancyMapStyles from "./fancyMapStyles.json";
// import fancyMapStyles from "./fancyMapStyles.color.json";

const MyMap = withGoogleMap(props => {
  return (
    <GoogleMap
      defaultZoom = {2}
      defaultCenter = {
        { lat: -2.681167, lng: 155.767052 }
      }
      defaultOptions={{
        styles: fancyMapStyles
      }}
      >
    </GoogleMap >
  )}
);

const Map = ()=> {
  return (
    <MyMap
      containerElement={
        <div 
          className='mapContainer'
          style={{ height: `800px`}} />
      }
      mapElement={
        <div
        className='mapElement'
        style={{ height: `800px`}} />
      }>
    </MyMap>
  )
}

Map.propTypes = {
};

export default Map;