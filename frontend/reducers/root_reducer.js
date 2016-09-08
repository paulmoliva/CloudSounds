import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import TrackReducer from './track_reducer';
import WeatherReducer from './weather_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  tracks: TrackReducer,
  weather: WeatherReducer,
  results: SearchReducer
});

export default RootReducer;
