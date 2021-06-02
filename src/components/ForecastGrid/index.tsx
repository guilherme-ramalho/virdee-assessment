import React from 'react';
import { useHistory } from 'react-router';

import { IDailyForecastData } from '../../shared/interfaces/forecast';
import TemperatureCard from '../TemperatureCard';

import { DailyForecastGrid, CardContainer } from './styles';

import { getWeekDayName } from '../../utils';
import { ICoordState } from '../../shared/interfaces/states';
import SkeletonBox from '../Skeleton';

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
      {data ? data?.daily.map(({ dt, temp, weather }) => {
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
      }) : 
        [1, 2, 3, 4, 5].map((item) => (
          <CardContainer key={`item_${item}`}>
            <SkeletonBox height="15px" width="32px" />
            <SkeletonBox height="28px" width="38px" />
            <SkeletonBox height="10px" width="40px" />
          </CardContainer>
        ))
      }
    </DailyForecastGrid>
  );
}

export default ForecastGrid;