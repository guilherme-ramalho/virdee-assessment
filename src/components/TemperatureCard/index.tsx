import React, { MouseEventHandler } from 'react';

import {
  Container, WeekDay, Temperature, ImageWrapper, WeatherImage, TemperatureRow,
} from './styles';

import { IWeather } from '../../shared/interfaces/forecast'
import { getWeatherImage, getWeekDayName } from '../../utils';

interface ITemperatureCardProps {
  maxTemp: number;
  minTemp: number;
  weather: IWeather;
  date: Date;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const TemperatureCard: React.FC<ITemperatureCardProps> = ({
  date,
  maxTemp,
  minTemp,
  weather,
  onClick,
}) => (
    <Container onClick={onClick}>
      <WeekDay>{getWeekDayName(date, 'short')}</WeekDay>
      <ImageWrapper>
        <WeatherImage src={getWeatherImage(weather.main)} />
      </ImageWrapper>
      <TemperatureRow>
        <Temperature accent>{Math.round(maxTemp)}°F</Temperature>
        <Temperature>{Math.round(minTemp)}°F</Temperature>
      </TemperatureRow>
    </Container>
  )

export default TemperatureCard;
