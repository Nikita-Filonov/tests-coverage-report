import Box from '@mui/material/Box';
import { useInitialState } from '../../Providers/InitialStateProvider';
import { LogicalServiceCoverageView } from './LogicalServiceCoverageView';
import { MethodCoveragesFiltersProvider } from '../../Providers/MethodCoveragesFiltersProvider';

export const LogicalServiceCoveragesView = () => {
  const { logicalServicesCoverage } = useInitialState();

  return (
    <Box>
      {logicalServicesCoverage.map((coverage, index) => (
        <MethodCoveragesFiltersProvider key={index} coverages={coverage.methods}>
          <LogicalServiceCoverageView coverage={coverage} />
        </MethodCoveragesFiltersProvider>
      ))}
    </Box>
  );
};
