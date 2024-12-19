import { BaseTableRow } from '../../BaseTableRow';
import { FC } from 'react';
import { LogicalServiceCoverage } from '../../../../Models/Coverage/LogicalServiceCoverage';
import { LogicalServiceCoverageProgress } from '../../../Progress/Coverage/LogicalServiceCoverageProgress';
import IconButton from '@mui/material/IconButton';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { LogicalServiceMethodsCoverageCell } from './LogicalServiceMethodsCoverageCell';
import { getLogicalServiceCoverageWidgetId } from '../../../../Services/Coverage/Utils';

type LogicalServiceCoveragesTableRowProps = {
  coverage: LogicalServiceCoverage;
};

export const LogicalServiceCoveragesTableRow: FC<LogicalServiceCoveragesTableRowProps> = (props) => {
  const { coverage } = props;

  const scrollToService = () => {
    const element = document.getElementById(getLogicalServiceCoverageWidgetId(coverage.logicalService));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <BaseTableRow
      cells={[
        { value: coverage.logicalService },
        { value: <LogicalServiceMethodsCoverageCell coverage={coverage} /> },
        { value: <LogicalServiceCoverageProgress value={coverage.totalCoverage || 0} /> },
        {
          align: 'right',
          value: (
            <IconButton size={'small'} onClick={scrollToService}>
              <ArrowDownwardIcon fontSize={'small'} />
            </IconButton>
          )
        }
      ]}
    />
  );
};
