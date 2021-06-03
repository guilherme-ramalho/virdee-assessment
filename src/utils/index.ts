import { toast, ToastOptions } from "react-toastify";

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

export const alert = (message: string, error?: boolean) => {
  const config: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
  }

  if (error) {
    toast.error(message, config)
  } else {
    toast(message, config);
  }
}

export const getDateFromWeekDayName = (weekDayName: string) => {
	const date = new Date();
	const now = date.getDay();
	const weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
	const weekDayIndex = weekDays.indexOf(weekDayName.toLowerCase());

  let diff = weekDayIndex - now;
	diff = diff < 1 ? 7 + diff : diff;

	const nextDayTimestamp = date.getTime() + (1000 * 60 * 60 * 24 * diff);

	return new Date(nextDayTimestamp);
};
