import { useState, useEffect } from 'react';
import SideBar from './components/SideBar';
import './scss/App.scss';

function App() {
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
  return (
    <div className='App'>
      <SideBar></SideBar>
    </div>
  );
}

export default App;
