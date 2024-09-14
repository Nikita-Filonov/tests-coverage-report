import Box from '@mui/material/Box';
import { useInitialState } from '../../Providers/InitialStateProvider';
import { LogicalServiceCoverageView } from './LogicalServiceCoverageView';

export const LogicalServiceCoveragesView = () => {
  const { logicalServicesCoverage } = useInitialState();

  return (
    <Box>
      {logicalServicesCoverage.map((coverage, index) => (
        <LogicalServiceCoverageView key={index} coverage={coverage} />
      ))}
    </Box>
  );
};
