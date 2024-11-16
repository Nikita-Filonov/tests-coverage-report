import { MethodRequestCoverage } from '../../../Models/Coverage/MethodCoverage';
import { FC } from 'react';
import { ParameterCoveragesTreeView } from '../../../Components/TreeView/Coverage/ParameterCoveragesTreeView';
import { WidgetView } from '../../../Components/Views/WidgetView';
import { WidgetInfoRowsView } from '../../../Components/Views/WidgetInfoRowsView';
import { BaseInfoRowView } from '../../../Components/Views/BaseInfoRowView';
import { TotalCoverageIcons } from '../../../Components/Icons/Coverage/TotalCoverageIcons';
import { BaseTabs } from '../../../Components/Tabs/BaseTabs';
import { CoverageHistoryChartView } from '../../History/CoverageHistoryChartView';
import { EmptyView } from '../../../Components/Views/EmptyView';

type MethodRequestCoverageViewProps = {
  coverage?: MethodRequestCoverage;
};

export const MethodRequestCoverageView: FC<MethodRequestCoverageViewProps> = (props) => {
  const { coverage } = props;

  return (
    <WidgetView sx={{ mt: 3 }} title={coverage?.name}>
      <WidgetInfoRowsView>
        <BaseInfoRowView name={'Total parameters'} value={`${coverage?.totalParameters || 0}`} />
        <BaseInfoRowView name={'Total covered parameters'} value={`${coverage?.totalCoveredParameters || 0}`} />
        <BaseInfoRowView
          name={'Total coverage'}
          icon={<TotalCoverageIcons totalCoverage={coverage?.totalCoverage || 0} />}
          value={`${coverage?.totalCoverage || 0}%`}
          allowCopy={false}
        />
      </WidgetInfoRowsView>
      <BaseTabs
        tabs={[
          {
            label: 'Coverage',
            content: coverage?.parametersCoverage ? (
              <ParameterCoveragesTreeView coverages={coverage.parametersCoverage} />
            ) : (
              <EmptyView title={'Empty parameters'} description={'This entity has no parameters to be covered'} />
            )
          },
          {
            label: 'History',
            content: (
              <CoverageHistoryChartView
                title={'Parameters total coverage history'}
                history={coverage?.totalCoverageHistory || []}
              />
            )
          }
        ]}
      />
    </WidgetView>
  );
};
