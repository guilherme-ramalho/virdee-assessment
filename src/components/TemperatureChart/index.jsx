import React from 'react';
import { ResponsiveLine } from '@nivo/line'
import { format } from 'date-fns';

const TemperatureChart = ({ data }) => {
  const tempData = data;
  tempData.length = 12;

  const chartData = [
    {
      id: 'temp',
      color: "hsl(178, 70%, 50%)",
      data: tempData,
    }
  ];

  return (
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
  );
};

export default TemperatureChart;