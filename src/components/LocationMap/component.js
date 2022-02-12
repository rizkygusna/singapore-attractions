import React from 'react';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { LatLngBounds } from 'leaflet';

import './styles.scss';

const LocationMap = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [locations, setLocations] = useState(null);
  const [boundCenter, setBoundCenter] = useState(null);

  const url =
    'https://my-json-server.typicode.com/rizkygusna/singapore-attractions/locations';

  const findBoundCenter = (coordinates) => {
    // find the smallest latitude
    const smallestLat = [...coordinates].reduce((currLoc, nextLoc) => {
      if (nextLoc.latitude < currLoc.latitude) {
        return nextLoc;
      } else {
        return currLoc;
      }
    });

    //find the biggest latitude
    const biggestLat = [...coordinates].reduce((currLoc, nextLoc) => {
      if (nextLoc.latitude > currLoc.latitude) {
        return nextLoc;
      } else {
        return currLoc;
      }
    });

    //initiate bound with LatLng type
    const bounds = new LatLngBounds(
      [smallestLat.latitude, smallestLat.longitude],
      [biggestLat.latitude, biggestLat.longitude]
    );

    //get center of the bounds
    const boundCenter = bounds.getCenter();
    return boundCenter;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        const boundCenter = findBoundCenter(data);
        setBoundCenter(boundCenter);
        setIsLoaded(true);
        setLocations(data);
        setError(null);
      } catch (error) {
        setError(error);
        console.log("Couldn't fetch data", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='location-map'>
      {error && <h2>{error}</h2>}
      {!isLoaded && <h2>Loading data..</h2>}
      {locations && boundCenter && (
        <MapContainer
          //bound center will be used here
          center={boundCenter}
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
