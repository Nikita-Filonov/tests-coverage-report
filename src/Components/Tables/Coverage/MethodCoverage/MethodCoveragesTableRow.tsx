import { BaseTableRow } from '../../BaseTableRow';
import { FC } from 'react';
import { MethodCoverage } from '../../../../Models/Coverage/MethodCoverage';
import IconButton from '@mui/material/IconButton';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { TotalRequestParametersCompareCell } from './TotalRequestParametersCompareCell';
import { CoveredIcons } from '../../../Icons/Coverage/CoveredIcons';
import { MethodCell } from './MethodCell';

type MethodCoveragesTableRowProps = {
  coverage: MethodCoverage;
  onMethodCoverageDetails: (coverage: MethodCoverage) => void;
};

export const MethodCoveragesTableRow: FC<MethodCoveragesTableRowProps> = (props) => {
  const { coverage, onMethodCoverageDetails } = props;

  const onDetails = () => onMethodCoverageDetails(coverage);

  return (
    <BaseTableRow
      cells={[
        { value: <MethodCell coverage={coverage} /> },
        { value: <CoveredIcons covered={coverage.covered} /> },
        { value: coverage.totalCases },
        { value: <TotalRequestParametersCompareCell coverage={coverage.requestCoverage} /> },
        { value: <TotalRequestParametersCompareCell coverage={coverage.responseCoverage} /> },
        {
          align: 'right',
          value: (
            <IconButton size={'small'} onClick={onDetails} disabled={!coverage.covered}>
              <ArticleOutlinedIcon fontSize={'small'} />
            </IconButton>
          )
        }
      ]}
    />
  );
};
