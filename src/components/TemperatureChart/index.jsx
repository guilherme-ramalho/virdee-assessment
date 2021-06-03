import { ResponsiveLine } from '@nivo/line'
import { useMemo } from 'react';
import { format } from 'date-fns';
import { Container, NoDataMessage } from './styles';
import SkeletonBox from '../Skeleton';

const TemperatureChart = ({ data }) => {
  const chartData = useMemo(() => {
    if (data) {
      const forecastData = data?.hourly.map(({ temp, dt }) => {
        const date = new Date(dt * 1000);
        const dateString = date.toLocaleString();
  
        return {
          y: temp,
          x: dateString,
        }
      });

      if (forecastData.length > 12) {
        forecastData.length = 12;
      }
      
      return {
        length: forecastData.length,
        dataArray: [{
          id: 'temp',
          data: forecastData,
        }]
      };
    }

    return undefined;
  }, [data]);

  const getExceptionComponent = () => chartData ? (
      <NoDataMessage>No forecast data available</NoDataMessage>
    ) : (
      <SkeletonBox height="130px" />
    )

  return (
    <Container>
      {chartData && data?.hourly.length > 0 ? (
        <ResponsiveLine
          data={chartData.dataArray}
          curve="cardinal"
          enableArea
          margin={{ top: 20, right: 20, bottom: 30, left: 20 }}
          colors={['#c7a930', '#363636']}
          isInteractive
          lineWidth={2}
          enableGridX={false}
          enableGridY={false}
          enablePointLabel
          pointLabel={({ y }) => `${y.toFixed(0)}°F`}
          axisLeft={false}
          animate
          motionStiffness={95}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            format: (value) => format(new Date(value), 'kaaa')
          }}
        />
      ) : getExceptionComponent()}
    </Container>
  )
};

export default TemperatureChart;
