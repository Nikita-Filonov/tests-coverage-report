import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { FC } from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';

type DeprecatedIconsProps = {
  sx?: SxProps<Theme>;
  deprecated?: boolean;
};

export const DeprecatedIcons: FC<DeprecatedIconsProps> = ({ sx, deprecated }) => {
  return deprecated ? <WarningAmberIcon sx={sx} fontSize={'small'} color={'warning'} /> : null;
};
