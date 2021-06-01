import React from 'react';
import { IDailyForecastData } from '../../shared/interfaces/forecast';
import { getWeatherImage } from '../../utils';

import { Container, TempGrid, Temp, ImageWrapper, ForecastImage, WindRow, WindText, LocationRow, LocationText, WeatherDescription } from './styles';

interface IForecastCardHeader {
  data: IDailyForecastData | undefined;
}

const ForecastCardHeader: React.FC<IForecastCardHeader> = ({ data }) => {
  const weather = data?.current?.weather[0].main || '';

  return (
    <Container>
      <TempGrid>
        <ImageWrapper>
          <ForecastImage src={getWeatherImage(weather, 64)} />
        </ImageWrapper>
        <Temp>
          {data?.current?.temp.toFixed(0)}
        </Temp>
        <WindRow>
          <WindText>Chuva: </WindText>
          <WindText>Umidity: {data?.current.humidity}%</WindText>
          <WindText>Wind speed: {data?.current.wind_speed}mph</WindText>
        </WindRow>
      </TempGrid>
      <LocationRow>
        <LocationText>{data?.timezone}</LocationText>
        <WeatherDescription>{data?.current.weather[0].description}</WeatherDescription>
      </LocationRow>
    </Container>
  );
}

export default ForecastCardHeader;