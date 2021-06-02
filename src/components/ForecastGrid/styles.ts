import styled from 'styled-components';

export const DailyForecastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  width: 100%;
`;

export const CardContainer = styled.div`
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
`;
