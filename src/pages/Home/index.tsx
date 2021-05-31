import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TemperatureCard from '../../components/TemperatureCard';
import { IDailyForecastData } from '../../shared/interfaces/forecast';

import { Container, DailyForecastGrid, WeatherCard } from './styles';

const Home: React.FC = () => {
  const [forcastData, setForecastData] = useState<IDailyForecastData>();

  const getForecastData = () => {
    axios.get<IDailyForecastData>('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=current,minutely,hourly,alerts&appid=4f032b00b5aae1e573620c389f5d742e&units=imperial')
      .then(({ data, status }) => {
        if (status === 200) {
          const finalData = data;
          finalData.daily.length = 5;

          setForecastData(finalData);
        } else {
          alert('Error getting forecast data');
        }
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
          {forcastData?.daily.map(({ dt, temp, weather }) => {
            const { max, min } = temp;
            const { main } = weather;
            const date = new Date(dt * 1000);

            return (
              <TemperatureCard 
                key={dt} 
                maxTemp={max}
                minTemp={min}
                weather={main}
                date={date}
              />
            );
          })}
          {/* {Array(5).fill('').map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <TemperatureCard key={item + index} />
          ))} */}
        </DailyForecastGrid>
      </WeatherCard>
    </Container>
  );
};

export default Home;
