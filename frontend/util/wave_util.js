const colors = (weather_id, track_id) => {
  let colorObj = {
    waveColor: '',
    progressColor: '',
    BGColor: undefined
  };
  switch (weather_id) {
    case 1:
      colorObj.waveColor = 'rgba(126,192,238,1)';
      colorObj.progressColor = 'rgb(238,126,136)';
      break;
    default:
      colorObj.waveColor = 'aliceblue';
      colorObj.progressColor = '#bbb';
      colorObj.BGColor = '#7EC0EE';
  }
  return colorObj;
};

const WaveUtil = {
  colors: colors
};

export default WaveUtil;
