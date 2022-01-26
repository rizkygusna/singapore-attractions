import React from 'react';
import { useState, useEffect } from 'react';
import './styles.scss';

const Locations = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [locations, setLocations] = useState([]);
  const [activeMenu, setActiveMenu] = useState('');

  //this endpoint is from json server
  const url =
    'https://my-json-server.typicode.com/rizkygusna/singapore-attractions/locations';

  //this AJAX call is copied from reactjs documentation.
  //you can access the documentation in this link https://reactjs.org/docs/faq-ajax.html
  useEffect(() => {
    //fetch url
    fetch(url)
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
  }, [url]);

  //if error
  if (error) {
    return <div>Error: {error.message}</div>;
    //if still fetching
  } else if (!isLoaded) {
    return <div>Loading...</div>;
    //if data fetched
  } else {
    return (
      <div className='location-list'>
        {/* output location list using map() */}
        {locations.map((location) => (
          <div className='location-list-item'>
            <a
              href='#'
              id={location.latitude}
              className={activeMenu == location.latitude ? 'active' : ''}
            >
              {location.place}
            </a>
          </div>
        ))}
      </div>
    );
  }
};

export default Locations;
