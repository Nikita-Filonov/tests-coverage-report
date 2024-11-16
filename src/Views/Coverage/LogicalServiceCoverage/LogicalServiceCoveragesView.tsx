import Box from '@mui/material/Box';
import { useInitialState } from '../../../Providers/InitialStateProvider';
import { LogicalServiceCoverageView } from './LogicalServiceCoverageView';
import { MethodCoveragesFiltersProvider } from '../../../Providers/MethodCoveragesFiltersProvider';
import { EmptyView } from '../../../Components/Views/EmptyView';

export const LogicalServiceCoveragesView = () => {
  const { logicalServicesCoverage } = useInitialState();

  return (
    <Box>
      {logicalServicesCoverage.length === 0 && (
        <EmptyView
          containerSx={{ mt: 7, mb: 7 }}
          title={'Empty logical services'}
          description={'There is no logical services to display'}
        />
      )}
      {logicalServicesCoverage.map((coverage, index) => (
        <MethodCoveragesFiltersProvider key={index} coverages={coverage.methods || []}>
          <LogicalServiceCoverageView coverage={coverage} />
        </MethodCoveragesFiltersProvider>
      ))}
    </Box>
  );
};
