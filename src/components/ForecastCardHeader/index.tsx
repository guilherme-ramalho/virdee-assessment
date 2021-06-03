import { isEqual, format } from 'date-fns';
import React, { useMemo } from 'react';
import { IForecastData } from '../../shared/interfaces/forecast';
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
  TempWrapper,
  DateText,
} from './styles';

interface IForecastCardHeader {
  data: IForecastData | undefined;
  currentDate?: Date;
}

const ForecastCardHeader: React.FC<IForecastCardHeader> = ({ data, currentDate }) => {
  const date = currentDate || new Date()

  const forecast = useMemo(() => {
    if (data?.daily) {
      const foundForecast = data.daily.find(({ dt }) => {
        const forecastDate = new Date(dt * 1000).setHours(0, 0, 0, 0);
        const selectedDate = date.setHours(0, 0, 0, 0);

        return isEqual(forecastDate, selectedDate);
      })

      return foundForecast || undefined;
    }

    return undefined;
  }, [data]);

  return (
    <Container>
      {forecast ? (
        <>
          <TempGrid>
            <ImageWrapper>
              <ForecastImage src={getWeatherImage(forecast.weather[0].main, 64)} />
            </ImageWrapper>
            <TempWrapper>
              <TempValue>
                {forecast.temp.day.toFixed(0)}
              </TempValue>
              <TempUnity>°F</TempUnity>
            </TempWrapper>
            <WindRow>
              <WindText>Rain: {forecast.rain * 100}%</WindText>
              <WindText>Humidity: {forecast.humidity.toFixed(0)}%</WindText>
              <WindText>Wind speed: {forecast.wind_speed.toFixed(0)}mph</WindText>
            </WindRow>
          </TempGrid>
          <LocationRow>
            <LocationText>{data?.timezone}</LocationText>
            <DateText>{format(date, 'MMMM do')}</DateText>
            <WeatherDescription>{forecast.weather[0].description}</WeatherDescription>
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
            <SkeletonBox height="14px" width="100px" />
          </LocationRow>
        </>
      )}
    </Container>
  );
}

export default ForecastCardHeader;