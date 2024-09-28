import { useInitialState } from '../../Providers/InitialStateProvider';
import { BaseGaugeChartView } from '../../Components/Charts/BaseGaugeChartView';
import { BaseGaugeChart } from '../../Components/Charts/BaseGaugeChart';
import { getCoverageColor } from '../../Services/Coverage/Utils';

export const ServiceCoverageView = () => {
  const { serviceCoverage } = useInitialState();

  return (
    <BaseGaugeChartView title={'Total service coverage'}>
      <BaseGaugeChart
        value={serviceCoverage.totalCoverage || 0}
        color={getCoverageColor(serviceCoverage.totalCoverage || 0)}
        height={200}
        maxValue={100}
      />
    </BaseGaugeChartView>
  );
};
