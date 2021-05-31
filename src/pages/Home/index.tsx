import React, { useEffect } from 'react';
import axios from 'axios';

import TemperatureCard from '../../components/TemperatureCard';
import { IFiveDayForecastData } from '../../shared/interfaces/forecast';

import { Container, DailyForecastGrid, WeatherCard } from './styles';

const Home: React.FC = () => {
  const getForecastData = () => {
    axios.get<IFiveDayForecastData>('http://api.openweathermap.org/data/2.5/forecast?q=London&appid=4f032b00b5aae1e573620c389f5d742e')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getForecastData();
  }, []);

  return (
    <Container>
      <WeatherCard>
        <DailyForecastGrid>
          {Array(5).fill('').map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <TemperatureCard key={item + index} />
          ))}
        </DailyForecastGrid>
      </WeatherCard>
    </Container>
  );
};

export default Home;
