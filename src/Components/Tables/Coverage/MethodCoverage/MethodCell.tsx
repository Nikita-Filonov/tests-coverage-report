import { BaseTableCell } from '../../BaseTableCell';
import { MethodCoverage } from '../../../../Models/Coverage/MethodCoverage';
import { FC } from 'react';
import { DeprecatedIcons } from '../../../Icons/Coverage/DeprecatedIcons';

type MethodCellProps = {
  coverage: MethodCoverage;
};

export const MethodCell: FC<MethodCellProps> = ({ coverage }) => {
  return (
    <BaseTableCell
      text={coverage.deprecated ? `${coverage.method} (deprecated)` : coverage.method}
      icon={<DeprecatedIcons sx={{ ml: 1.5 }} deprecated={coverage.deprecated} />}
    />
  );
};
