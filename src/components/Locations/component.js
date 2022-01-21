import React from 'react';
import { useState, useEffect } from 'react';
import './styles.scss';

const Locations = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [locations, setLocations] = useState([]);
  const [activeMenu, setActiveMenu] = useState('1.286920');

  //this endpoint is from json server
  const url =
    'https://my-json-server.typicode.com/rizkygusna/singapore-attractions/locations';

  //this AJAX call is copied from reactjs documentation.
  //you can access the documentation in this link https://reactjs.org/docs/faq-ajax.html
  useEffect(() => {
    //fetch url
    fetch(url)
      //convert response to json
      .then((res) => res.json())
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
  }, []);

  // const activeHandler = (menuId) => {
  //   if (activeMenu === '') {
  //     document.getElementById(menuId).classList.add('active');
  //     setActiveMenu(menuId);
  //   } else {
  //     document.getElementById(activeMenu).classList.remove('active');
  //     document.getElementById(menuId).classList.add('active');
  //     setActiveMenu(menuId);
  //   }
  //   console.log(document.getElementById(menuId), activeMenu);
  // };

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
