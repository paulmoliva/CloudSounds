import React from 'react';
import CommentItem from './comment_item';
import Masonry from 'react-masonry-component';
class TrackCommentsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.generateCommentsArray = this.generateCommentsArray.bind(this);
    if (typeof this.props.comments !== 'undefined'
      && Object.keys(this.props.comments).length){
      this.id = this.props.comments[Object.keys(this.props.comments)[0]].track_id;
      this.hasComments = true;
      }
  }

  componentDidMount() {
    // let el = $(`#track-${this.id}-comments`);
    // let change = false;
    // el.className().match(/hidden/) ? change = false : change = true;
    // let showButton = $(`#track-${this.id}-show-comments`);
    // const text = showButton.text();
    // if (change)
    //   showButton.text(text.replace('show', 'hide').replace('▼', '►'));
  }

  generateCommentsArray(){
    const result = [];
    const deleteComment = this.props.deleteComment;
    const currentUser = this.props.currentUser;
    const track = this.props.track;
    for (const key in this.props.comments){
      let n = parseInt(key);

      let comment = this.props.comments[n];
      result.push(CommentItem({comment, deleteComment, currentUser, track}));
    }
    return result;
  }

  render() {
    // const commentsList = $(`#track-${this.id}-comments`);
    // let showText, carat;
    // if (commentsList.hasClass('hidden')){
    //   showText = 'show';
    //   carat = '▼';
    // } else {
    //   showText = 'hide';
    //   carat = '►';
    // }
    let that = this;
    if (this.hasComments)
    return (
      <div>
        <p className='show-comments'
          id = {`track-${this.id}-show-comments`}
          onClick={ () => {
            let el = $(`#track-${this.id}-comments`);
            el.toggleClass('hidden');
            window.masonry.layout();
            // let showButton = $(`#track-${this.id}-show-comments`);
            // const text = showButton.text();
            // if(text.match(/show/))
            //   showButton.text(text.replace('show', 'hide').replace('▼', '►'));
            // else
            //   showButton.text(text.replace('hide', 'show').replace( '►', '▼'));
            }
          }
          >
          {Object.keys(this.props.comments).length > 1 ? `${Object.keys(this.props.comments).length} comments ▼` : `1 comment ▼`}
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
