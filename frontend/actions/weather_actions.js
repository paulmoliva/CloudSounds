export const WeatherConstants = {
  RECEIVE_WEATHER: "RECEIVE_WEATHER"
};

export const receiveWeather = weather => ({
  type: WeatherConstants.RECEIVE_WEATHER,
  weather
});
