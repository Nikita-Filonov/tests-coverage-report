export interface ParameterCoverage {
  covered: boolean;
  parameter: string;
  parameters?: ParameterCoverage[];
  deprecated: boolean;
}
