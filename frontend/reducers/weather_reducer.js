import { WeatherConstants } from '../actions/weather_actions';
import merge from 'lodash/merge';

const WeatherReducer = function(state = {}, action) {
  switch (action.type) {
    case WeatherConstants.RECEIVE_WEATHER:
      const weather = action.weather;
      return merge({}, state, weather);
    default:
      return state;
  }
};

export default WeatherReducer;
