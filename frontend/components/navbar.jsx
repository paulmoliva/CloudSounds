import React from 'react';
import { Link } from 'react-router';

const NavBar = ({currentUser}) => {
  return (
    <nav className='navbar'>
      <div className="inner-nav">
        <div className="logo-header">

        </div>
          <a href="home">
            <div className="home-header-button">
              Home
            </div>
          </a>
        <div className="header-search">
          <input className="header-search"type="text" placeholder="Search"></input>
        </div>
          <a href="/home/upload">
            <div className="upload-header-button">
              Upload
            </div>
          </a>
        <div className="user-header-dropdown">
          <img className='circle-avatar'src={currentUser.avatar_url.replace(
             'c_crop,g_face:center,r_max,w_500/c_scale,w_129',
             'c_scale,w_26/r_30')} alt="" />
          {currentUser.username} &#9660;
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
