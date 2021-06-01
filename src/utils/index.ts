export const getWeatherImage = (weather: string, picSize?: number) => {   
  const size = picSize || 48;
  
  switch (weather) {
    case 'Rain':
      return `https://ssl.gstatic.com/onebox/weather/${size}/rain_s_cloudy.png`;
    case 'Clouds':
      return `https://ssl.gstatic.com/onebox/weather/${size}/partly_cloudy.png`;
    case 'Sun':
      return `https://ssl.gstatic.com/onebox/weather/${size}/sunny.png`;
    case 'Snow':
      return `https://ssl.gstatic.com/onebox/weather/${size}/snow.png`;
    default:
      return `https://ssl.gstatic.com/onebox/weather/${size}/partly_cloudy.png`;
  }
}

export const getWeekDayName = (
  date: Date, 
  type: 'short' | 'long' | 'narrow' | undefined
) => date.toLocaleDateString('en', {
  weekday: type,
});