import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => (
  <div style={{
    color: 'white',
    backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/e/ed/Map_pin_icon.svg)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '50px',
    height: '50px',
    display: 'inline-flex',
    alignItems: 'center',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 16,
  };

  render() {
    const { props: { location } } = this;
    console.log(location);

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAuf_OHJWTlUcpsMUV4yqi3TBeLq0JhVAU' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={location}
        >
          <Marker
            lat={location.lat}
            lng={location.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
