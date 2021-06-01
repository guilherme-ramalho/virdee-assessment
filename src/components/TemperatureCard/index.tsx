import React, { MouseEventHandler } from 'react';

import {
  Container, WeekDay, Temperature, ImageWrapper, WeatherImage, TemperatureRow,
} from './styles';

import { getWeatherImage, getWeekDayName } from '../../utils';

interface ITemperatureCardProps {
  maxTemp: number;
  minTemp: number;
  weather: string;
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
        <WeatherImage src={getWeatherImage(weather)} />
      </ImageWrapper>
      <TemperatureRow>
        <Temperature accent>{Math.round(maxTemp)}°F</Temperature>
        <Temperature>{Math.round(minTemp)}°F</Temperature>
      </TemperatureRow>
    </Container>
  )

export default TemperatureCard;
