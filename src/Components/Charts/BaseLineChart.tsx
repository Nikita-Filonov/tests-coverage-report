import { AreaPlot, LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import {
  ChartsAxisHighlight,
  ChartsGrid,
  ChartsLegend,
  ChartsTooltip,
  ChartsXAxis,
  ChartsYAxis,
  ResponsiveChartContainer
} from '@mui/x-charts';
import { AxisValueFormatterContext } from '@mui/x-charts/internals';

export interface LineChartYAxis {
  data: (null | number)[];
  label: string;
  color?: string;
}

export interface LineChartXAxis<T> {
  data: T[];
  scaleType: 'time' | 'band';
  valueFormatter?: (value: T, context: AxisValueFormatterContext) => string;
}

type BaseLineChartProps<T> = {
  xAxis: LineChartXAxis<T>[];
  yAxis: LineChartYAxis[];
};

export const BaseLineChart = <T,>({ xAxis, yAxis }: BaseLineChartProps<T>) => {
  return (
    <ResponsiveChartContainer xAxis={xAxis} series={yAxis.map((axis) => ({ ...axis, type: 'line' }))}>
      <MarkPlot />
      <LinePlot />
      <AreaPlot />
      <ChartsGrid vertical={true} horizontal={true} />
      <ChartsXAxis />
      <ChartsYAxis />
      <ChartsLegend />
      <ChartsTooltip />
      <ChartsAxisHighlight x={'line'} />
    </ResponsiveChartContainer>
  );
};
