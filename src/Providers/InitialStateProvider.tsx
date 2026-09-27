import React, { Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useState } from 'react';
import { DEFAULT_SERVICE, InitialState, loadInitialState } from '../State/Controllers';
import { ServiceCoverage } from '../Models/Coverage/ServiceCoverage';
import { LogicalServiceCoverage } from '../Models/Coverage/LogicalServiceCoverage';
import { Service } from '../Models/Config/Config';

export type InitialStateContextProps = {
  service: Service;
  services: Service[];
  createdAt: string;
  setService: Dispatch<SetStateAction<Service>>;
  serviceCoverage: ServiceCoverage;
  logicalServicesCoverage: LogicalServiceCoverage[];
};

const InitialStateContext = React.createContext<InitialStateContextProps | null>(null);

const InitialStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state] = useState<InitialState>(loadInitialState);
  const [service, setService] = useState<Service>(
    () =>
      state.config.services.find((service) => (state.serviceCoverages[service.key]?.totalCoverage || 0) > 0) ||
      DEFAULT_SERVICE
  );

  return (
    <InitialStateContext.Provider
      value={{
        service,
        services: state.config.services,
        createdAt: state.createdAt,
        setService,
        serviceCoverage: state.serviceCoverages[service.key] || { totalCoverage: 0 },
        logicalServicesCoverage: state.logicalServiceCoverages[service.key] || []
      }}>
      {children}
    </InitialStateContext.Provider>
  );
};

const useInitialState = () => {
  const event = useContext(InitialStateContext);
  if (event == null) {
    throw new Error('useInitialState() called outside of a InitialStateProvider?');
  }
  return event;
};

export { InitialStateProvider, useInitialState };
