import { FC } from 'react';
import { WidgetView } from '../../Components/Views/WidgetView';
import { BaseInfoRowView } from '../../Components/Views/BaseInfoRowView';
import { MethodCoverage } from '../../Models/Coverage/MethodCoverage';
import { CoveredIcons } from '../../Components/Icons/Coverage/CoveredIcons';
import { WidgetInfoRowsView } from '../../Components/Views/WidgetInfoRowsView';
import { DeprecatedIcons } from '../../Components/Icons/Coverage/DeprecatedIcons';

type MethodCoverageViewProps = {
  coverage: MethodCoverage;
};

export const MethodCoverageView: FC<MethodCoverageViewProps> = ({ coverage }) => {
  return (
    <WidgetView title={coverage.method}>
      <WidgetInfoRowsView>
        <BaseInfoRowView
          name={'Covered'}
          value={<CoveredIcons sx={{ ml: 1 }} covered={coverage.covered} />}
          allowCopy={false}
        />
        <BaseInfoRowView
          name={'Deprecated'}
          icon={<DeprecatedIcons sx={{ ml: 1 }} deprecated={coverage.deprecated} />}
          value={coverage.deprecated ? 'yes' : 'no'}
          allowCopy={false}
        />
        <BaseInfoRowView name={'Total covered cases'} value={coverage.totalCases || 0} />
      </WidgetInfoRowsView>
    </WidgetView>
  );
};
