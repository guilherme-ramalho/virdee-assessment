import { MouseEventHandler } from 'react';
import styled from 'styled-components';

interface ITemperatureProps {
  accent?: boolean | undefined;
}

interface IContainerProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 95px;
  width: 100%;
  background-color: #fff;
  transition: transform 250ms;
  cursor: pointer;
  padding: 5px 0;
  box-sizing: border-box;

  :hover {
    background-color: #fcfcfc;
    transform: translateY(-5px);
    border: 1px solid #c1c1c150;
  }
`;

export const WeekDay = styled.span`
  color: #bababa;
  font-size: medium;
  font-weight: normal;
`;

export const ImageWrapper = styled.div``;

export const WeatherImage = styled.img``;

export const TemperatureRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Temperature = styled.span<ITemperatureProps>`
  color: ${({ accent }) => (accent ? '#202124' : '#878787')};
  font-size: 13px;
  font-weight: normal;
  margin: 0 5px;
`;
