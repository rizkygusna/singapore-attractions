import React from 'react';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';

import './styles.scss';

const LocationMap = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [locations, setLocations] = useState([]);

  const url =
    'https://my-json-server.typicode.com/rizkygusna/singapore-attractions/locations';

  useEffect(() => {
    async function fetchData() {
      //fetch url
      await fetch(url)
        .then((res) => {
          //if response is not okay
          if (!res.ok) {
            setIsLoaded(true);
            setError('Error 404 data not found');
            // if response is ok convert data to json
          } else return res.json();
        })
        //assign the converted data to locations state
        .then(
          (data) => {
            setIsLoaded(true);
            setLocations(data);
          },
          //error handling
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
    fetchData();
  }, [url]);

  return (
    <div className='location-map'>
      {error && <h2>{error}</h2>}
      {!isLoaded && <h2>Loading data..</h2>}
      {locations && (
        <MapContainer
          center={[1.28692, 103.85457]}
          zoom={15}
          scrollWheelZoom={false}
          zoomControl={false}
        >
          <ZoomControl position='bottomright'></ZoomControl>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {/* display all point of locations */}
          {locations.map((location) => (
            <Marker
              position={[location.latitude, location.longitude]}
              key={location.latitude}
            >
              <Popup>
                <h2>{location.place}</h2>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default LocationMap;
