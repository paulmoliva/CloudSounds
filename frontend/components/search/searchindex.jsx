import React from 'react';
import {SearchItem} from './searchitem';
import Masonry from 'react-masonry-component';

export class SearchIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    if (!Object.keys(this.props.results).length){
      return(<ul className='search-results'></ul>);
    } else if (this.props.loading) {
      return (
      <Masonry className='search-results'
        elementType={'ul'}
        >
        <li>
          Loading results
          <img src="https://res.cloudinary.com/cloud-sounds/image/upload/w_40/v1473033713/loading5_kluvdv.gif" />
        </li>
      </Masonry>);
    }
    else {
      let results = [];
      for(let key in this.props.results){
        results.push(this.props.results[key]);
      }
      return (
        <Masonry className='search-results'
          elementType={'ul'}
          >
          {results.map ( track => {
            return (
              <SearchItem
                key={track.id}
                track={track}
                />
            );
          })
        }
      </Masonry>);
    }
  }
}

export default SearchIndex;
