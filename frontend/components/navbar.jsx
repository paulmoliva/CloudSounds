import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import SearchIndex from './search/searchindex';
import {SearchItem} from './search/searchitem';

const NavBar = ({currentUser, logout, results, receiveSearchResults}) => {
  function gotoHome(){
    hashHistory.push('/home');
  }

  function gotoUpload(){
    hashHistory.push('/home/upload');
  }

  function toggleDropdown(){
    $('.dropdown').toggleClass('hidden');
  }

  function makeSearchResults(){
    if(results)return (<SearchIndex results={results}/>);
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
          <input className="header-search"
            autoComplete="nope"
            type="text"
            placeholder="Search"
            onChange={ e => {
              $('.search-results').empty();
              $('.search-results').append(<li>Loading...<img src="https://res.cloudinary.com/cloud-sounds/image/upload/c_scale,w_40/v1473033713/loading5_kluvdv.gif"></img></li>);
              $.get('/api/search?' + $(e.target).val(), (sResults) => receiveSearchResults(sResults) );

              $(document).on('click', function (eve) {
                if($(eve.target).closest('.header-search').length === 0) {
                  $('.header-search').val('');
                  receiveSearchResults({});
                }
              });
            }}>
          </input>
          {makeSearchResults()}
        </div>

          <div className="upload-header-button" onClick={gotoUpload}>
            Upload
          </div>

        <div className="user-header-dropdown" onClick={toggleDropdown}>
          <img className='circle-avatar'src={currentUser.avatar_url.replace(
             'upload/',
             'upload//c_crop,g_face/c_scale,h_26,w_26/r_30/')} alt="" />
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
