import React from 'react';
import CommentItem from './comment_item';
class TrackCommentsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.generateCommentsArray = this.generateCommentsArray.bind(this);
  }

  generateCommentsArray(){
    const result = [];
    for (const key in this.props){
      let n = parseInt(key);

      let comment = this.props[n];
      result.push(CommentItem({comment}));
      console.log(result);
    }
    return result;
  }

  render() {
    return (
      <ul className="commentlist">
        {this.generateCommentsArray()}
      </ul>
    );
  }

}

export default TrackCommentsIndex;
