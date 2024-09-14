import { BaseChartView, BaseChartViewProps } from './BaseChartView';
import { FC } from 'react';

type BaseGaugeChartViewProps = Pick<BaseChartViewProps, 'title' | 'children'>;

export const BaseGaugeChartView: FC<BaseGaugeChartViewProps> = (props) => {
  const { title, children } = props;

  return (
    <BaseChartView
      title={title}
      childrenSx={{ display: 'flex', justifyContent: 'center' }}
      containerSx={{ height: 250 }}>
      {children}
    </BaseChartView>
  );
};
