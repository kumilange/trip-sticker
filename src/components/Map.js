import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import PropTypes from 'prop-types';

import './Map.css';
import star from '../img/star.png'
import fancyMapStyles from "./fancyMapStyles.json";

const MyMap = withGoogleMap(props => {
  return (
    <GoogleMap
      defaultZoom = {2}
      defaultCenter = {
        { lat: 3.681167, lng: 155.767052 }
      }
      defaultOptions={{
        styles: fancyMapStyles,
      }}
      onClick={(e)=> {props.onMapClick(e.latLng)}}
    >
    {props.stickers.map((sticker, idx) => (
      <Marker
        key = {idx}
        position = {{lat : sticker.lat, lng: sticker.lng }}
        icon = {star}
      />
    ))}
    </GoogleMap>
  )}
);

class Map extends Component {
  render () {
    return (
      <MyMap
        containerElement={
          <div
            className='mapContainer'
            style={{ height: `800px`}}
          />
        }
        mapElement={
          <div
            className='mapElement'
            style={{ height: `800px`}}
          />
        }
        stickers={this.props.stickers}
        onMapClick={this.props.clickSpot}
      />
    )
  }
}

Map.propTypes = {
  stickers: PropTypes.array.isRequired
};

export default Map;