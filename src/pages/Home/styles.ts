import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const DailyForecastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

export const WeatherCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c1c1c180;
  border-radius: 5px;
  box-sizing: border-box;
  height: 400px;
  width: 600px;
`;
