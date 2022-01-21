import SideBar from './components/SideBar';
import SideBarMenu from './components/SideBarMenu';
import Header from './components/Header';
import LocationMap from './components/LocationMap';

import './scss/App.scss';

function App() {
  return (
    <div className='App'>
      <SideBar></SideBar>
      <SideBarMenu></SideBarMenu>
      <div className='App-map'>
        <Header></Header>
        <LocationMap></LocationMap>
      </div>
    </div>
  );
}

export default App;
