import { LogicalServiceCoverage } from '../Models/Coverage/LogicalServiceCoverage';
import { Config, Service } from '../Models/Config/Config';
import { ServiceCoverage } from '../Models/Coverage/ServiceCoverage';

export interface InitialState {
  config: Config & { services: Service[] };
  createdAt: string;
  serviceCoverages: { [x: string]: ServiceCoverage };
  logicalServiceCoverages: { [x: string]: LogicalServiceCoverage[] };
}

export const DEFAULT_SERVICE: Service = {
  key: '',
  name: '',
  host: '',
  tags: [],
  repository: ''
};

export const DEFAULT_INITIAL_STATE: InitialState = {
  config: { services: [] },
  createdAt: '',
  serviceCoverages: {},
  logicalServiceCoverages: {}
};

export const loadInitialState = (): InitialState => {
  const stateElement = document.getElementById('state');
  if (stateElement === null) {
    return DEFAULT_INITIAL_STATE;
  }

  try {
    const state = JSON.parse(stateElement.textContent || '') as InitialState | null;
    if (!state || typeof state !== 'object' || Array.isArray(state)) return DEFAULT_INITIAL_STATE;
    return {
      config: { services: Array.isArray(state.config?.services) ? state.config.services : [] },
      createdAt: typeof state.createdAt === 'string' ? state.createdAt : '',
      serviceCoverages: state.serviceCoverages || {},
      logicalServiceCoverages: state.logicalServiceCoverages || {}
    };
  } catch {
    return DEFAULT_INITIAL_STATE;
  }
};
