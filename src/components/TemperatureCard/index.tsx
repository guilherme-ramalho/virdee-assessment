import React, { MouseEventHandler } from 'react';

import {
  Container, WeekDay, Temperature, ImageWrapper, WeatherImage, TemperatureRow,
} from './styles';

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
}) => {
  const getWeekDayName = () => date.toLocaleDateString('en', {
    weekday: 'short',
  });

  const getWeatherImage = () => {
    if (weather) {
      return 'https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png';
    }

    return 'https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png';
  }

  return (
    <Container onClick={onClick}>
      <WeekDay>{getWeekDayName()}</WeekDay>
      <ImageWrapper>
        <WeatherImage src={getWeatherImage()} />
      </ImageWrapper>
      <TemperatureRow>
        <Temperature accent>{Math.round(maxTemp)}°F</Temperature>
        <Temperature>{Math.round(minTemp)}°F</Temperature>
      </TemperatureRow>
    </Container>
  );
}

export default TemperatureCard;
