import React from 'react';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
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

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <InitialStateProvider>
        <MethodCoveragesProvider>
          <IndexRoute />
        </MethodCoveragesProvider>
      </InitialStateProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
