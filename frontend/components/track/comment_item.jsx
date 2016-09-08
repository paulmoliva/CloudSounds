import React from 'react';
import { Link, hashHistory } from 'react-router';

const CommentItem = ({comment, deleteComment, currentUser, track}) => {
  const that = this;
  function deleteThisComment() {
    deleteComment(comment.id);
  }
  function makeDeleteButton(){
    if (currentUser &&
        (comment.user_id === currentUser.user.id
        || track.user_id === currentUser.user.id) //&&
        //this.props.location.pathname.match(/home/)
       ) {
        return (
          <button className='track-delete'
            onClick={deleteThisComment}>
          </button>
        );
      }
  }
  return (
    <li key={comment.id} className='comment-item'>
      <div className="comment-data">
        <img  src={comment.user_image_url
            .replace(
              'upload/',
              'upload//c_crop,g_face/c_scale,h_40,w_40/r_30/')} />
        <ul className='column comment'>
          <li className='sidebar-playlist-name comment'
            onClick={() => hashHistory.push('/users/' + comment.user_id)}>{comment.user_name}</li>
          <li className= 'sidebar-title'>{comment.time_ago} ago</li>
        </ul>
      </div>
        <div className='column flex-start'>
          <p className='triangle-isosceles top'>
            {comment.body}
          </p>
          {makeDeleteButton()}
        </div>
    </li>
  );
};

export default CommentItem;
