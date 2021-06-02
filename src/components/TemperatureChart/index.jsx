import { ResponsiveLine } from '@nivo/line'
import { useMemo } from 'react';
import { format } from 'date-fns';
import { Container } from './styles';
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

      forecastData.length = 12;
      
      return [{
        id: 'temp',
        data: forecastData,
      }];
    }

    return undefined;
  }, [data]);

  return (
    <Container>
      {chartData ? (
        <ResponsiveLine
          data={chartData}
          curve="cardinal"
          enableArea
          margin={{ top: 20, right: 20, bottom: 30, left: 20 }}
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
      ) : (
        <SkeletonBox height="100px" />
      )}
    </Container>
  )
};

export default TemperatureChart;