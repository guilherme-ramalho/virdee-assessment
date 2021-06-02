import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

import TemperatureCard from '../../components/TemperatureCard';
import { IDailyForecastData } from '../../shared/interfaces/forecast';
import TemperatureChart from '../../components/TemperatureChart';
import ForecastCardHeader from '../../components/ForecastCardHeader';

import { Container, DailyForecastGrid, WeatherCard, ChartRow } from '../../styles/shared';
import { getWeekDayName } from '../../utils';

interface ICoordState {
  lat: number;
  long: number;
}

const Home: React.FC = () => {
  const history = useHistory();
  const [forecastData, setForecastData] = useState<IDailyForecastData>();
  const [coord, setCoord] = useState<ICoordState>();

  const getForecastData = () => {
    if (coord) {
      axios.get<IDailyForecastData>('https://api.openweathermap.org/data/2.5/onecall', {
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
      .catch((error) => {
        console.log(error);
      });
    }
  };

  const navigateToHourlyForecast = (date: Date) => {
    const weekDay = getWeekDayName(date, 'long');

    history.push({
      pathname: `/${weekDay.toLowerCase()}`,
      state: {
        date,
        coord,
      }
    });
  }

  const chartData = useMemo(() => {
    if (forecastData) {
      const data = forecastData?.hourly.map(({ temp, dt }) => {
        const date = new Date(dt * 1000);
        const dateString = date.toLocaleString();
  
        return {
          y: temp,
          x: dateString,
        }
      });
  
      return data;
    }

    return [];
  }, [forecastData]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;      

      setCoord({
        lat: latitude,
        long: longitude
      })
    });
  }, []);

  useEffect(() => {
    if (coord) {
      getForecastData();
    }
  }, [coord]);

  return (
    <Container>
      <WeatherCard>
        <ForecastCardHeader data={forecastData} />
        <TemperatureChart data={chartData} />
        <DailyForecastGrid>
          {forecastData?.daily.map(({ dt, temp, weather }) => {
            const date = new Date(dt * 1000);
            const weatherString = weather[0].main;

            return (
              <TemperatureCard 
                key={dt} 
                maxTemp={temp.max}
                minTemp={temp.min}
                weather={weatherString}
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
