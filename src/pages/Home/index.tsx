import React, { useEffect } from 'react';

import TemperatureCard from '../../components/TemperatureCard';

import { Container, DailyForecastGrid, WeatherCard } from './styles';

const Home: React.FC = () => {
  useEffect(() => {

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
