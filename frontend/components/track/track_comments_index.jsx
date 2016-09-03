import React from 'react';
import CommentItem from './comment_item';
class TrackCommentsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.generateCommentsArray = this.generateCommentsArray.bind(this);
    //debugger;
    if (this.props){
      this.id = this.props[Object.keys(this.props)[0]].track_id;
      this.hasComments = true;
      }
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
    let that = this;
    if (this.hasComments)
    return (
      <div>
        <p className='show-comments'
          id = {`track-${this.id}-show-comments`}
          onClick={ () => {
            let el = $(`#track-${this.id}-comments`);
            el.toggleClass('hidden');
            let showButton = $(`#track-${this.id}-show-comments`);
            const text = showButton.text();
            if(text.match(/show/))
              showButton.text(text.replace('show', 'hide').replace('▼', '►'));
            else
              showButton.text(text.replace('hide', 'show').replace( '►', '▼'));
            }
          }
          >
          Click to show comments ▼
        </p>
        <ul className="commentlist hidden" id={`track-${this.id}-comments`}>
          {this.generateCommentsArray()}
        </ul>
      </div>
    );
    else {
      return (<p className='show-comments'>No comments to show.</p>);
    }
  }

}

export default TrackCommentsIndex;
