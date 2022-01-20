import React from 'react';
import './styles.scss';
import browse from '../../images/browse.png';
import merlion from '../../images/merlion.png';
import videos from '../../images/videos.png';
import blog from '../../images/blog.png';
import about from '../../images/about.png';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <a className='active' href='#'>
        <img src={browse} alt='earth' /> Browse
      </a>
      <a href='#'>
        <img src={merlion} alt='merlion' /> Suggest <br /> Attraction
      </a>
      <a href='#'>
        <img src={videos} alt='videos' /> Videos
      </a>
      <a href='#'>
        <img src={blog} alt='blog' /> Blog
      </a>
      <a href='#'>
        <img src={about} alt='about' /> About
      </a>
    </div>
  );
};

export default SideBar;
