import React from 'react';
import {SearchItem} from './searchitem';
import Masonry from 'react-masonry-component';

export class SearchIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    debugger;
    if (!Object.keys(this.props.results).length){
      return(<ul></ul>);
    } else {
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
