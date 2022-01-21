import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './styles.scss';

const LocationMap = () => {
  return (
    <div className='location-map'>
      <MapContainer center={[1.28692, 103.85457]} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[1.28692, 103.85457]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
