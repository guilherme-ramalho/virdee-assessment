import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';

import { isEqual } from 'date-fns';
import { Container, WeatherCard } from '../../styles/shared';
import { IDailyForecastData } from '../../shared/interfaces/forecast';
import ForecastCardHeader from '../../components/ForecastCardHeader';
import TemperatureChart from '../../components/TemperatureChart';
import { alert, getDateFromWeekDayName } from '../../utils';

interface IHourlyForecast {
  date?: Date;
  coord?: {
    lat: number;
    long: number;
  };
}

const HourlyForecast: React.FC = () => {
  const [forecastData, setForecastData] = useState<IDailyForecastData>();
  const { state, pathname } = useLocation<IHourlyForecast>();
  const pathWeekDay = pathname.substring(1);
  const weekDayDate = getDateFromWeekDayName(pathWeekDay);
  const selectedDate = state?.date || weekDayDate;

  const getForecastData = () => {
    const lat = state?.coord?.lat || 51.509865;
    const lon = state?.coord?.long || -0.118092;

    axios.get<IDailyForecastData>('https://api.openweathermap.org/data/2.5/onecall', {
      params: {
        lat,
        lon,
        exclude: 'minutely,alerts',
        appid: '4f032b00b5aae1e573620c389f5d742e',
        units: 'imperial'
      }
    })
      .then(({ data, status }) => {
        if (status === 200) {
          setForecastData(data);
        } else {
          alert('Error getting forecast data');
        }
      })
      .catch(() => {
        alert('Could\'t get forecast data from the server');
      });
  };

  const formattedHourlyForecast = useMemo(() => {
    if (forecastData) {
      const data = forecastData;
      data.hourly = forecastData.hourly.filter(({ dt }) => {
        const currentItemDate = new Date(dt * 1000).setHours(0, 0, 0, 0);
        const currentDate = selectedDate.setHours(0, 0, 0, 0);
        
        return isEqual(currentItemDate, currentDate);
      });

      return data;
    }

    return undefined;
  }, [forecastData, selectedDate]);
  
  useEffect(getForecastData, []);

  return (
    <Container>
      <WeatherCard>
        <ForecastCardHeader data={forecastData} />
        <TemperatureChart data={formattedHourlyForecast} />
      </WeatherCard>
    </Container>
  );
};

export default HourlyForecast;
