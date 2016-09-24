const colors = (weather_id, track_id) => {
  let colorObj = {
    waveColor: '',
    progressColor: '',
    BGColor: undefined
  };
  switch (weather_id) {
    case 3:
      colorObj.waveColor = 'aliceblue';
      colorObj.progressColor = '#bbb';
      colorObj.BGColor = '#7EC0EE';
      break;
    default:
      colorObj.waveColor = 'rgba(126,192,238,1)';
      colorObj.progressColor = 'rgb(238,126,136)';
  }
  return colorObj;
};

const WaveUtil = {
  colors: colors
};

export default WaveUtil;
