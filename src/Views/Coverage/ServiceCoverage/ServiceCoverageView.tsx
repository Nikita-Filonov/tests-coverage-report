import { useInitialState } from '../../../Providers/InitialStateProvider';
import { BaseGaugeChart } from '../../../Components/Charts/BaseGaugeChart';
import { getCoverageColor } from '../../../Services/Coverage/Utils';
import { BaseChartView } from '../../../Components/Charts/BaseChartView';

export const ServiceCoverageView = () => {
  const { serviceCoverage } = useInitialState();

  return (
    <BaseChartView title={'Total service coverage'}>
      <BaseGaugeChart
        value={serviceCoverage.totalCoverage || 0}
        color={getCoverageColor(serviceCoverage.totalCoverage || 0)}
        height={200}
        maxValue={100}
      />
    </BaseChartView>
  );
};
