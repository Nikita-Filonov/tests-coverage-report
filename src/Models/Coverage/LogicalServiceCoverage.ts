import { MethodCoverage } from './MethodCoverage';

export interface LogicalServiceCoverage {
  methods: MethodCoverage[];
  totalCoverage: number;
  logicalService: string;
}
