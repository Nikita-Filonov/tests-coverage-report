import { LogicalServiceCoverage } from '../Models/Coverage/LogicalServiceCoverage';
import { Config, Service } from '../Models/Config/Config';
import { ServiceCoverage } from '../Models/Coverage/ServiceCoverage';

export interface InitialState {
  config: Config;
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
    return JSON.parse(stateElement.textContent || '');
  } catch {
    return DEFAULT_INITIAL_STATE;
  }
};
