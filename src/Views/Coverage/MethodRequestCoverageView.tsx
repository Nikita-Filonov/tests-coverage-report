import { MethodRequestCoverage } from '../../Models/Coverage/MethodCoverage';
import { FC } from 'react';
import { ParameterCoveragesTreeView } from '../../Components/TreeView/Coverage/ParameterCoveragesTreeView';
import { WidgetView } from '../../Components/Views/WidgetView';
import { WidgetInfoRowsView } from '../../Components/Views/WidgetInfoRowsView';
import { BaseInfoRowView } from '../../Components/Views/BaseInfoRowView';
import { TotalCoverageIcons } from '../../Components/Icons/Coverage/TotalCoverageIcons';

type MethodRequestCoverageViewProps = {
  coverage: MethodRequestCoverage;
};

export const MethodRequestCoverageView: FC<MethodRequestCoverageViewProps> = (props) => {
  const { coverage } = props;

  return (
    <WidgetView sx={{ mt: 3 }} title={coverage.name}>
      <WidgetInfoRowsView>
        <BaseInfoRowView name={'Total parameters'} value={`${coverage.totalParameters}`} />
        <BaseInfoRowView name={'Total covered parameters'} value={`${coverage.totalCoveredParameters}`} />
        <BaseInfoRowView
          name={'Total coverage'}
          icon={<TotalCoverageIcons totalCoverage={coverage.totalCoverage} />}
          value={`${coverage.totalCoverage}%`}
          allowCopy={false}
        />
      </WidgetInfoRowsView>
      {coverage.parametersCoverage && <ParameterCoveragesTreeView coverages={coverage.parametersCoverage} />}
    </WidgetView>
  );
};
