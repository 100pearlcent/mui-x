import * as React from 'react';
import { BarChart, BarChartProps } from '@mui/x-charts/BarChart';
import { addLabels, balanceSheet } from './netflixsBalanceSheet';

export default function StackBars() {
  return (
    <BarChart
      dataset={balanceSheet}
      series={addLabels([
        { dataKey: 'currAss', stack: 'assets' },
        { dataKey: 'nCurrAss', stack: 'assets' },
        { dataKey: 'curLia', stack: 'liability' },
        { dataKey: 'nCurLia', stack: 'liability' },
        { dataKey: 'capStock', stack: 'equity' },
        { dataKey: 'retEarn', stack: 'equity' },
        { dataKey: 'treas', stack: 'equity' },
      ])}
      xAxis={[{ dataKey: 'year' }]}
      yAxis={[{ width: 80 }]}
      {...config}
    />
  );
}

const config: Partial<BarChartProps> = {
  height: 350,
  margin: { left: 40 },
  hideLegend: true,
};
