import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { IForecastData } from '../../shared/interfaces/forecast';
import { ICoordState } from '../../shared/interfaces/states';
import TemperatureChart from '../../components/TemperatureChart';
import ForecastCardHeader from '../../components/ForecastCardHeader';

import { Container, WeatherCard } from '../../styles/shared';
import ForecastGrid from '../../components/ForecastGrid';
import { alert } from '../../utils';

const Home: React.FC = () => {
  const [forecastData, setForecastData] = useState<IForecastData>();
  const [coord, setCoord] = useState<ICoordState>();

  const getForecastData = () => {
    if (coord) {
      axios.get<IForecastData>('https://api.openweathermap.org/data/2.5/onecall', {
      params: {
        lat: coord.lat,
        lon: coord.long,
        exclude: 'minutely,alerts',
        appid: '4f032b00b5aae1e573620c389f5d742e',
        units: 'imperial'
      }
    })
      .then(({ data, status }) => {
        if (status === 200) {
          const finalData = data;
          finalData.daily.length = 5;

          setForecastData(finalData);
        } else {
          alert('Error getting forecast data');
        }
      })
      .catch(() => {
        alert('Could\'t get forecast data from the server');
      });
    }
  };

  const getClientPosition = () => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {      
      const { latitude, longitude } = coords;      

      setCoord({
        lat: latitude,
        long: longitude
      })
    },
    () => {
      alert('Couldn\'t get yout location. Setting the default to London.');

      setCoord({
        lat: 51.509865,
        long: -0.118092
      })
    },
    {
      timeout: 3000,
    });
  }

  useEffect(getClientPosition, []);

  useEffect(() => {
    if (coord) {
      getForecastData();
    }
  }, [coord]);

  return (
    <Container>
      <WeatherCard>
        <ForecastCardHeader data={forecastData} />
        <TemperatureChart data={forecastData} />
        <ForecastGrid data={forecastData} coord={coord} />
      </WeatherCard>
    </Container>
  );
};

export default Home;
