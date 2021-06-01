import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';

import { Container, DailyForecastGrid, WeatherCard } from '../../styles/shared';
import { IDailyForecastData } from '../../shared/interfaces/forecast';

interface IHourlyForecast {
  date: Date;
  coord: {
    lat: number;
    long: number;
  };
}

const HourlyForecast: React.FC = () => {
  const [forecastData, setForecastData] = useState<IDailyForecastData>();
  const { state: { date, coord } } = useLocation<IHourlyForecast>();

  const getForecastData = () => {
    axios.get<IDailyForecastData>('https://api.openweathermap.org/data/2.5/onecall', {
      params: {
        lat: coord.lat,
        lon: coord.long,
        exclude: 'current,minutely,daily,alerts',
        appid: '4f032b00b5aae1e573620c389f5d742e',
        units: 'imperial'
      }
    })
      .then(({ data, status }) => {
        if (status === 200) {
          const finalData = data;          
          finalData.hourly.length = 24;

          setForecastData(finalData);
        } else {
          alert('Error getting forecast data');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(getForecastData, []);

  return (
    <Container>
      <WeatherCard>
        {/* <DailyForecastGrid>

        </DailyForecastGrid> */}
        <h1>teste</h1>
      </WeatherCard>
    </Container>
  );
};

export default HourlyForecast;
