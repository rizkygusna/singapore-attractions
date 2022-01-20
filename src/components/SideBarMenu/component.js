import React from 'react';
import './styles.scss';

import Locations from '../Locations/component';

const SideBarMenu = () => {
  return (
    <div className='SideBarMenu'>
      <div className='filter'>
        <select>
          <option value='favorite'>Filter by favorite</option>
          <option value='time'>Filter by time</option>
        </select>
      </div>
      <Locations></Locations>
    </div>
  );
};

export default SideBarMenu;
