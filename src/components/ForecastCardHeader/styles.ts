import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  height: 60px;
  background-color: #c1c1c130;
`;

export const TempGrid = styled.div`
  display: grid;
  grid-template-columns: 70px 70px auto;
`;

export const Temp = styled.span`
  display: flex;
  align-items: center;
  font-size: 46px;
  font-weight: normal;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ForecastImage = styled.img``;

export const TempUnity = styled.span`
  font-weight: 16px !important;
`;

export const WindRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LocationRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const WindText = styled.span`
  color: #70757a;
  font-size: 12px;
  font-weight: normal;
`;

export const LocationText = styled.span`
  font-size: 22px;
`;

export const WeatherDescription = styled.span`
  font-size: 16px;
  color: #70757a;
`;
