import { InitialStateProvider } from './Providers/InitialStateProvider';
import { MainLayout } from './Components/Layouts/MainLayout';
import { LogicalServiceCoveragesView } from './Views/Coverage/LogicalServiceCoverage/LogicalServiceCoveragesView';
import { MethodCoveragesProvider } from './Providers/MethodCoveragesProvider';
import { TotalLogicalServiceCoveragesView } from './Views/Coverage/LogicalServiceCoverage/TotalLogicalServiceCoveragesView';
import { ThemeProvider } from './Providers/ThemeProvider';
import { AppToolbarView } from './Components/Toolbar/AppToolbarView';
import { ConfigView } from './Views/Config/ConfigView';
import { ServiceView } from './Views/Coverage/ServiceCoverage/ServiceView';

const IndexRoute = () => {
  return (
    <MainLayout>
      <AppToolbarView />
      <ConfigView />
      <ServiceView />
      <TotalLogicalServiceCoveragesView />
      <LogicalServiceCoveragesView />
    </MainLayout>
  );
};

export const App = () => (
  <ThemeProvider>
    <InitialStateProvider>
      <MethodCoveragesProvider>
        <IndexRoute />
      </MethodCoveragesProvider>
    </InitialStateProvider>
  </ThemeProvider>
);
