import React from 'react';
import { useState, useEffect } from 'react';
import './styles.scss';

const Locations = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [locations, setLocations] = useState([]);
  const url =
    'https://my-json-server.typicode.com/rizkygusna/singapore-attractions/locations';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setLocations(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='location-list'>
        {locations.map((location) => (
          <div className='location-list-item'>
            <a href='#'>{location.place}</a>
          </div>
        ))}
      </div>
    );
  }
};

export default Locations;
