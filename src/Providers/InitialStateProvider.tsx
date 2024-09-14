import React, { Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useEffect, useState } from 'react';
import { InitialState, loadInitialState } from '../State/Controllers';
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
  const [state, setState] = useState<InitialState>(loadInitialState());
  const [service, setService] = useState<Service>({ name: '', host: '', repository: '' });

  useEffect(() => {
    loadState();
  }, []);

  const loadState = () => {
    const initialState = loadInitialState();
    for (const service of initialState.config.services || []) {
      const serviceCoverage = initialState.serviceCoverages[service.host];
      serviceCoverage.totalCoverage > 0 && setService(service);
    }

    setState(initialState);
  };

  return (
    <InitialStateContext.Provider
      value={{
        service,
        services: state.config.services || [],
        createdAt: state.createdAt,
        setService,
        serviceCoverage: state.serviceCoverages[service.host] || { totalCoverage: 0 },
        logicalServicesCoverage: state.logicalServiceCoverages[service.host] || []
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
