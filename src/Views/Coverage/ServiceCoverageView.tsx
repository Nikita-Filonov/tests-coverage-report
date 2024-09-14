import { useInitialState } from '../../Providers/InitialStateProvider';
import { BaseGaugeChartView } from '../../Components/Charts/BaseGaugeChartView';
import { BaseGaugeChart } from '../../Components/Charts/BaseGaugeChart';
import { getCoverageColor } from '../../Services/Coverage/Utils';

export const ServiceCoverageView = () => {
  const { serviceCoverage } = useInitialState();

  return (
    <BaseGaugeChartView title={'Total service coverage'}>
      <BaseGaugeChart
        value={serviceCoverage.totalCoverage}
        color={getCoverageColor(serviceCoverage.totalCoverage)}
        height={200}
        maxValue={100}
      />
    </BaseGaugeChartView>
  );
};
