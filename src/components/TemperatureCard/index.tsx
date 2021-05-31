import React from 'react';

import {
  Container, WeekDay, Temperature, ImageWrapper, WeatherImage, TemperatureRow,
} from './styles';

function TemperatureCard() {
  return (
    <Container>
      <WeekDay>Wed</WeekDay>
      <ImageWrapper>
        <WeatherImage src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png" />
      </ImageWrapper>
      <TemperatureRow>
        <Temperature accent>78º</Temperature>
        <Temperature>58º</Temperature>
      </TemperatureRow>
    </Container>
  );
}

export default TemperatureCard;
