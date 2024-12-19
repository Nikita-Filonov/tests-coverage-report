import { FC } from 'react';
import { TotalCoverageIcons } from '../../../Icons/Coverage/TotalCoverageIcons';
import { BaseTableCell } from '../../BaseTableCell';
import { LogicalServiceCoverage } from '../../../../Models/Coverage/LogicalServiceCoverage';

type LogicalServiceMethodsCoverageCellProps = {
  coverage: LogicalServiceCoverage;
};

export const LogicalServiceMethodsCoverageCell: FC<LogicalServiceMethodsCoverageCellProps> = (props) => {
  const { coverage } = props;

  return (
    <BaseTableCell
      text={`${coverage.totalMethods || 0} / ${coverage.totalCoveredMethods || 0} — ${coverage?.totalCoverage || 0}%`}
      icon={<TotalCoverageIcons totalCoverage={coverage?.totalCoverage || 0} />}
    />
  );
};
