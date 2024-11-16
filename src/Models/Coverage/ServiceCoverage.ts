import { CoverageHistory } from '../History/CoverageHistory';

export interface ServiceCoverage {
  totalCoverage?: number;
  totalCoverageHistory?: CoverageHistory[];
}
