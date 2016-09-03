import React from 'react';

const CommentItem = ({comment}) => {
  return (
    <li className='comment-item'>
      <div className="comment-data">
        <img  src={comment.user_image_url
            .replace(
              'upload/',
              'upload//c_crop,g_face/c_scale,h_40,w_40/r_30/')} />
        <ul className='column comment'>
          <li className='sidebar-playlist-name comment'>{comment.user_name}</li>
          <li className= 'sidebar-title'>{comment.time_ago} ago</li>
        </ul>
      </div>
        <div>
          <p className='triangle-isosceles top'>
            {comment.body}
          </p>
        </div>
    </li>
  );
};

export default CommentItem;
