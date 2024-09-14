import { FC } from 'react';
import { BaseTable } from '../../BaseTable';
import { MethodCoverage } from '../../../../Models/Coverage/MethodCoverage';
import { MethodCoveragesTableRow } from './MethodCoveragesTableRow';
import { MethodCoveragesTableHeader } from './MethodCoveragesTableHeader';

type MethodCoveragesTableProps = {
  coverages: MethodCoverage[];
  onMethodCoverageDetails: (coverage: MethodCoverage) => void;
};

export const MethodCoveragesTable: FC<MethodCoveragesTableProps> = (props) => {
  const { coverages, onMethodCoverageDetails } = props;

  return (
    <BaseTable containerSx={{ mt: 3 }} header={<MethodCoveragesTableHeader />}>
      {coverages.map((coverage, index) => (
        <MethodCoveragesTableRow key={index} coverage={coverage} onMethodCoverageDetails={onMethodCoverageDetails} />
      ))}
    </BaseTable>
  );
};
