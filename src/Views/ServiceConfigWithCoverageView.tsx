import { Grid2 } from '@mui/material';
import { ConfigView } from './Config/ConfigView';
import { ServiceCoverageView } from './Coverage/ServiceCoverageView';

export const ServiceConfigWithCoverageView = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <ConfigView />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <ServiceCoverageView />
      </Grid2>
    </Grid2>
  );
};
