import { FC } from 'react';
import { MethodRequestCoverage } from '../../../../Models/Coverage/MethodCoverage';
import { TotalCoverageIcons } from '../../../Icons/Coverage/TotalCoverageIcons';
import { BaseTableCell } from '../../BaseTableCell';

type TotalRequestParametersCompareCellProps = {
  coverage: MethodRequestCoverage;
};

export const TotalRequestParametersCompareCell: FC<TotalRequestParametersCompareCellProps> = (props) => {
  const { coverage } = props;

  return (
    <BaseTableCell
      text={`${coverage.totalParameters} / ${coverage.totalCoveredParameters} — ${coverage.totalCoverage}%`}
      icon={<TotalCoverageIcons totalCoverage={coverage.totalCoverage} />}
    />
  );
};
