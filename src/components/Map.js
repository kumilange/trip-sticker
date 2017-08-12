import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
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
        onClick={() => props.onMarkerClick(sticker)}
      >
        { sticker.isInfoWindowOpen
          ? <InfoWindow onCloseClick={() => props.onMarkerClose(sticker)}>
            <div>{ 'testtest' }</div>
          </InfoWindow>
          : null
        }
      </Marker>
    ))}
    </GoogleMap>
  )}
);

class Map extends Component {
  componentDidMount() {
    this.props.fetchStickers()
  }

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
        onMapClick={this.props.openModal}
        onMarkerClick={this.props.openInfoWindow}
        onMarkerClose={this.props.closeInfoWindow}
      />
    )
  }
}

Map.propTypes = {
  stickers: PropTypes.array.isRequired
};

export default Map;