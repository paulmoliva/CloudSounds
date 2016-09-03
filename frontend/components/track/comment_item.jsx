import React from 'react';

const CommentItem = ({comment}) => {
  return (
    <li className='sidebar-list-item'>
      <div className="sidebar-track-data">
        <img  src='http://placekitten.com/40/40' />
        <ul className='column comment'>
          <li className='sidebar-playlist-name comment'>{comment.user_name}</li>
          <li className= 'sidebar-title'>{comment.time_ago}</li>
        </ul>
        <p className='comment'>
          {comment.body}
        </p>
      </div>
    </li>
  );
};

export default CommentItem;
