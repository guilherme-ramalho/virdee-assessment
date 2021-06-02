import React from 'react';
import { IDailyForecastData } from '../../shared/interfaces/forecast';
import { getWeatherImage } from '../../utils';
import SkeletonBox from '../Skeleton';

import { 
  Container,
  TempGrid,
  TempValue,
  TempUnity,
  ImageWrapper,
  ForecastImage,
  WindRow,
  WindText,
  LocationRow,
  LocationText,
  WeatherDescription,
  TempWrapper} from './styles';

interface IForecastCardHeader {
  data: IDailyForecastData | undefined;
}

const ForecastCardHeader: React.FC<IForecastCardHeader> = ({ data }) => {
  const weather = data?.current?.weather[0].main || '';

  return (
    <Container>
      {data ? (
        <>
          <TempGrid>
            <ImageWrapper>
              <ForecastImage src={getWeatherImage(weather, 64)} />
            </ImageWrapper>
            <TempWrapper>
              <TempValue>
                {data?.current?.temp.toFixed(0)}
              </TempValue>
              <TempUnity>°F</TempUnity>
            </TempWrapper>
            <WindRow>
              <WindText>Feels like: {data?.current.feels_like.toFixed(0)}°F</WindText>
              <WindText>Humidity: {data?.current.humidity}%</WindText>
              <WindText>Wind speed: {data?.current.wind_speed}mph</WindText>
            </WindRow>
          </TempGrid>
          <LocationRow>
            <LocationText>{data?.timezone}</LocationText>
            <WeatherDescription>{data?.current.weather[0].description}</WeatherDescription>
          </LocationRow>
        </>
      ) : (
        <>
          <TempGrid>
            <SkeletonBox height="70px" />
            <SkeletonBox height="70px" />
            <WindRow>
              <SkeletonBox height="15px" width="80px" count={3}/>
            </WindRow>
          </TempGrid>
          <LocationRow>
            <SkeletonBox height="26px" width="160px" />
            <SkeletonBox height="18px" width="100px" />
          </LocationRow>
        </>
      )}
    </Container>
  );
}

export default ForecastCardHeader;