export interface IForecastItem {
  dt: number;
  dt_txt: string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  },
  weather: Array<{
    main: string;
    description: string;
  }>
}

export interface IFiveDayForecastData {
  cod: string;
  cnt: number;
  list: Array<IForecastItem>;
}

export interface IDailyForecastItem {
  dt: number;
  temp: {
    day: number;
    min: number;
    max: number;
  };
  weather: Array<{
    id: number;
    main: string;
    icon: string;
  }>;
}

export interface IHourlyForecastItem {
  dt: number;
  temp: number;
  humidity: number;
  weather: Array<{
    id: number;
    main: string;
    icon: string;
    description: string;
  }>;
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
  feels_like: number;
}

export interface IDailyForecastData {
  timezone: string;
  daily: Array<IDailyForecastItem>;
  hourly: Array<IHourlyForecastItem>;
  current: IHourlyForecastItem
}
