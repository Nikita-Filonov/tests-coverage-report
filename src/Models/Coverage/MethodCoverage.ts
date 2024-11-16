import { ParameterCoverage } from './ParameterCoverage';
import { CoverageHistory } from '../History/CoverageHistory';

export interface MethodRequestCoverage {
  name: string;
  totalCoverage?: number;
  totalParameters?: number;
  parametersCoverage?: ParameterCoverage[];
  totalCoverageHistory?: CoverageHistory[];
  totalCoveredParameters?: number;
}

export interface MethodCoverage {
  method: string;
  covered?: boolean;
  totalCases?: number;
  deprecated?: boolean;
  requestCoverage?: MethodRequestCoverage;
  responseCoverage?: MethodRequestCoverage;
}
