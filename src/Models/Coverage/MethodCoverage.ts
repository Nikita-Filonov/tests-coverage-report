import { ParameterCoverage } from './ParameterCoverage';

export interface MethodRequestCoverage {
  name: string;
  totalCoverage: number;
  totalParameters: number;
  parametersCoverage?: ParameterCoverage[];
  totalCoveredParameters: number;
}

export interface MethodCoverage {
  method: string;
  covered: boolean;
  totalCases: number;
  deprecated: boolean;
  requestCoverage: MethodRequestCoverage;
  responseCoverage: MethodRequestCoverage;
}
