import SideBar from './components/SideBar';
import SideBarMenu from './components/SideBarMenu';
import Header from './components/Header';

import './scss/App.scss';

function App() {
  return (
    <div className='App'>
      <SideBar></SideBar>
      <SideBarMenu></SideBarMenu>
      <div className='App-map'>
        <Header></Header>
        {/* map component*/}
      </div>
    </div>
  );
}

export default App;
