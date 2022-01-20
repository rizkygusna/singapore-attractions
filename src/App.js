import { useState, useEffect } from 'react';
import SideBar from './components/SideBar';
import SideBarMenu from './components/SideBarMenu';
import './scss/App.scss';

function App() {
  return (
    <div className='App'>
      <SideBar></SideBar>
      <SideBarMenu></SideBarMenu>
    </div>
  );
}

export default App;
