export function determineWeatherID(string){
  if (string.match(/(sun|clear)/)) return 1;
  else if (string.match(/(rainy|shower|drizzle)/)) return 2;
  else if (string.match(/(cloud|overcast)/)) return 3;
  else if (string.match(/(fog|mist)/)) return 4;
  else if (string.match(/storm/)) return 5;
  else return 5;
}

export function getLocation(that, callback, fetchTracksCallback) {
  let location;

  navigator.geolocation.getCurrentPosition((pos) => {
      location = {lat: pos.coords.latitude, long: pos.coords.longitude};
      callback(location, that, fetchTracksCallback);
    }, errors => {
      location = {lat: 37.803, long: -122.397};
      callback(location, that, fetchTracksCallback);
    });
}

export function requestData(location, that, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', `https://api.worldweatheronline.com/premium/v1/weather.ashx?q=${location.lat},${location.long}&includelocation=yes&format=json&key=8e4eeea070554e7481a01401160209`, true);

  request.onload = () => {
  if (request.status >= 200 && request.status < 400) {
    let weatherJSON = $.parseJSON(request.responseText);
    let data = weatherJSON.data.current_condition[0];
    let city;
    if (weatherJSON.data.nearest_area[0].areaName[0].value === 'North Beach')
      city = 'San Francisco';
    else
      city = weatherJSON.data.nearest_area[0].areaName[0].value;
    let desc = data.weatherDesc[0].value.toLowerCase();
    if (desc.match(/cloudy/)) desc = 'cloudy';
    let weatherObj = {temp: data.temp_F,
      desc: desc,
      city: city,
      weatherID: determineWeatherID(desc)
    };
      that.setState({weather: weatherObj});
      that.props.receiveWeather(weatherObj);
      if (callback) callback({'weather_id': weatherObj.weatherID});
    }
  };
  request.send();
}
