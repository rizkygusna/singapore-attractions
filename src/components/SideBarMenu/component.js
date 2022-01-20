import React from 'react';
import './styles.scss';

const SideBarMenu = () => {
  return (
    <div className='SideBarMenu'>
      <div className='filter'>
        <select>
          <option value='favorite'>Filter by favorite</option>
          <option value='time'>Filter by time</option>
        </select>
      </div>
    </div>
  );
};

export default SideBarMenu;
