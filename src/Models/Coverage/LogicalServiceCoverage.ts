import { MethodCoverage } from './MethodCoverage';
import { CoverageHistory } from '../History/CoverageHistory';

export interface LogicalServiceCoverage {
  methods?: MethodCoverage[];
  totalMethods?: number;
  totalCoverage?: number;
  logicalService: string;
  totalCoveredMethods?: number;
  totalCoverageHistory?: CoverageHistory[];
}
