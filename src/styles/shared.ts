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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  box-sizing: border-box;
  height: 400px;
  width: 600px;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 9px rgb(0 0 0 / 25%);
`;

export const ChartRow = styled.div`
  display: flex;
  width: 440px;
  height: 100px;
`;
