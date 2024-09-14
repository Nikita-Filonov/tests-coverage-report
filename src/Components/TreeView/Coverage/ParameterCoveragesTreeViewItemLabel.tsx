import Typography from '@mui/material/Typography';
import { CoveredIcons } from '../../Icons/Coverage/CoveredIcons';
import { Box } from '@mui/material';
import { ParameterCoverage } from '../../../Models/Coverage/ParameterCoverage';
import { FC } from 'react';

type ParameterCoveragesTreeViewItemLabelProps = {
  coverage: ParameterCoverage;
};

export const ParameterCoveragesTreeViewItemLabel: FC<ParameterCoveragesTreeViewItemLabelProps> = (props) => {
  const { coverage } = props;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography>{coverage.deprecated ? `${coverage.parameter} (deprecated)` : coverage.parameter}</Typography>
      <CoveredIcons sx={{ ml: 1 }} covered={coverage.covered} />
    </Box>
  );
};
