import React from 'react';
import setting from '../../images/setting.png';
import question from '../../images/question.png';
import close from '../../images/close.png';

import './styles.scss';

const Header = () => {
  return (
    <div className='Header'>
      <h1>top-rated tourist attractions in singapore</h1>
      <div className='control'>
        <a href='#'>
          <img src={setting} alt='setting' />
        </a>
        <a href='#'>
          <img src={question} alt='setting' />
        </a>
        <a href='#'>
          <img src={close} alt='setting' />
        </a>
      </div>
    </div>
  );
};

export default Header;
