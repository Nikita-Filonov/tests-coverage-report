import { BasePaper } from './BasePaper';
import Typography from '@mui/material/Typography';
import { FC, ReactNode } from 'react';
import { Box, Grid2, SxProps, Theme } from '@mui/material';

type WidgetViewProps = {
  sx?: SxProps<Theme>;
  title?: string | ReactNode;
  label?: ReactNode;
  children?: ReactNode;
  childrenSx?: SxProps<Theme>;
};

export const WidgetView: FC<WidgetViewProps> = (props) => {
  const { sx, title, label, children, childrenSx } = props;

  return (
    <BasePaper sx={sx}>
      <Grid2 container sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid2 sx={{ flexGrow: 1 }}>
          {title && (
            <Typography sx={{ mr: 2 }} variant={'h6'}>
              {title}
            </Typography>
          )}
        </Grid2>
        <Grid2>{label}</Grid2>
      </Grid2>
      <Box sx={childrenSx}>{children}</Box>
    </BasePaper>
  );
};
