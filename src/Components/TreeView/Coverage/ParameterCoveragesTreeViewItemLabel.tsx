import Typography from '@mui/material/Typography';
import { CoveredIcons } from '../../Icons/Coverage/CoveredIcons';
import { Box } from '@mui/material';
import { ParameterCoverage } from '../../../Models/Coverage/ParameterCoverage';
import { FC } from 'react';
import { DeprecatedIcons } from '../../Icons/Coverage/DeprecatedIcons';

type ParameterCoveragesTreeViewItemLabelProps = {
  coverage: ParameterCoverage;
};

export const ParameterCoveragesTreeViewItemLabel: FC<ParameterCoveragesTreeViewItemLabelProps> = (props) => {
  const { coverage } = props;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography>{coverage.deprecated ? `${coverage.parameter} (deprecated)` : coverage.parameter}</Typography>
      <CoveredIcons sx={{ ml: 1 }} covered={coverage.covered} />
      <DeprecatedIcons sx={{ ml: 1 }} deprecated={coverage.hasUncoveredParameters} />
    </Box>
  );
};
