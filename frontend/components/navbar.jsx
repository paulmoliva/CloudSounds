import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

const NavBar = ({currentUser, logout}) => {
  function gotoHome(){
    hashHistory.push('/home');
  }

  function gotoUpload(){
    hashHistory.push('/home/upload');
  }

  function toggleDropdown(){
    $('.dropdown').toggleClass('hidden');
  }

  return (
    <nav className='navbar'>
      <div className="inner-nav">
        <div className="logo-header">

        </div>

          <div className="home-header-button" onClick={gotoHome}>
            Home
          </div>

        <div className="header-search">
          <input className="header-search"type="text" placeholder="Search"></input>
        </div>

          <div className="upload-header-button" onClick={gotoUpload}>
            Upload
          </div>

        <div className="user-header-dropdown" onClick={toggleDropdown}>
          <img className='circle-avatar'src={currentUser.avatar_url.replace(
             'c_crop,g_face:center,r_max,w_500/c_scale,w_129',
             'c_scale,w_26/r_30')} alt="" />
          {currentUser.username} &#9660;
          <ul className='hidden dropdown'>
            <li onClick={logout}>Logout</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
