import merge from 'lodash/merge';


const SearchReducer = function(state ={}, action){
  switch(action.type){
    case "RECEIVE_SEARCH_RESULTS":
    let results = action.results;
    return merge({}, results);
  default:
    return state;
  }
};



export default SearchReducer;
