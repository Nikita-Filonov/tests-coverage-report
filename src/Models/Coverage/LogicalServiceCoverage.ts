import { MethodCoverage } from './MethodCoverage';
import { CoverageHistory } from '../History/CoverageHistory';

export interface LogicalServiceCoverage {
  methods?: MethodCoverage[];
  totalCoverage?: number;
  logicalService: string;
  totalCoverageHistory?: CoverageHistory[];
}
