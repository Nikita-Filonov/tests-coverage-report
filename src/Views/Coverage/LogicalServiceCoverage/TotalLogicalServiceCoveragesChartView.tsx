import { BaseChartView } from '../../../Components/Charts/BaseChartView';
import { BasePieChart } from '../../../Components/Charts/BasePieChart';
import { getServiceLabel } from '../../../Services/Charts/Utils';
import { useInitialState } from '../../../Providers/InitialStateProvider';

export const TotalLogicalServiceCoveragesChartView = () => {
  const { logicalServicesCoverage } = useInitialState();

  return (
    <BaseChartView title={'Total logical service coverages'}>
      <BasePieChart
        series={logicalServicesCoverage.map((coverage) => ({
          label: getServiceLabel(coverage.logicalService),
          value: coverage.totalCoverage || 0
        }))}
      />
    </BaseChartView>
  );
};
