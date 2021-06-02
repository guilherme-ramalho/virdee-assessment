import React from 'react';
import { useHistory } from 'react-router';

import { IDailyForecastData } from '../../shared/interfaces/forecast';
import TemperatureCard from '../TemperatureCard';

import { DailyForecastGrid } from './styles';

import { getWeekDayName } from '../../utils';
import { ICoordState } from '../../shared/interfaces/states';

interface IForecastGridProps {
  data: IDailyForecastData | undefined;
  coord: ICoordState | undefined;
}

const ForecastGrid: React.FC<IForecastGridProps> = ({ data, coord }) => {
  const history = useHistory();

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

  return (
    <DailyForecastGrid>
      {data?.daily.map(({ dt, temp, weather }) => {
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
  );
}

export default ForecastGrid;