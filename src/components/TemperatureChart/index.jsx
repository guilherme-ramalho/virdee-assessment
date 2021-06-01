import React from 'react';
import { ResponsiveLine } from '@nivo/line'

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
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      isInteractive
      lineWidth={2}
      enableGridX={false}
      enableGridY={false}
      enablePointLabel
      pointLabel={({ y }) => `${y.toFixed(1)}`}
      axisLeft={false}
      axisBottom={false}
    />
  );
};

export default TemperatureChart;