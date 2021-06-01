import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import axios from 'axios';

import TemperatureCard from '../../components/TemperatureCard';
import { IDailyForecastData } from '../../shared/interfaces/forecast';

import { Container, DailyForecastGrid, WeatherCard } from '../../styles/shared';

const Home: React.FC = () => {
  const history = useHistory();
  const [forcastData, setForecastData] = useState<IDailyForecastData>();
  const [coord, setCoord] = useState({
    lat: 33.44,
    long: -94.04
  });

  const getForecastData = () => {
    axios.get<IDailyForecastData>('https://api.openweathermap.org/data/2.5/onecall', {
      params: {
        lat: -9.59,
        lon: -35.75,
        exclude: 'current,minutely,alerts',
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
      .catch((error) => {
        console.log(error);
      });
  };

  const navigateToHourlyForecast = (date: Date) => {
    const weekDay = date.toLocaleDateString('en', {
      weekday: 'long'
    });

    history.push({
      pathname: `/${weekDay.toLowerCase()}`,
      state: {
        date,
        coord,
      }
    });
  }

  const chartData = useMemo(() => {
    const data = forcastData?.hourly.map(({ temp, dt }) => {
      const date = new Date(dt * 1000);
      const dateString = date.toLocaleString();

      return {
        x: temp,
        y: dateString,
      }
    });

    return data;
  }, [forcastData]);

  console.log(chartData);  

  useEffect(() => {
    getForecastData();
  }, []);

  return (
    <Container>
      <WeatherCard>
        <DailyForecastGrid>
          {forcastData?.daily.map(({ dt, temp, weather }) => {
            const date = new Date(dt * 1000);

            return (
              <TemperatureCard 
                key={dt} 
                maxTemp={temp.max}
                minTemp={temp.min}
                weather={weather.main}
                date={date}
                onClick={() => navigateToHourlyForecast(date)}
              />
            );
          })}
        </DailyForecastGrid>
      </WeatherCard>
    </Container>
  );
};

export default Home;
