import { FC } from 'react';
import { BaseTable } from '../../BaseTable';
import { MethodCoverage } from '../../../../Models/Coverage/MethodCoverage';
import { MethodCoveragesTableRow } from './MethodCoveragesTableRow';
import { MethodCoveragesTableHeader } from './MethodCoveragesTableHeader';
import { useTableSorting } from '../../../../Services/Tables/Sorting';

type MethodCoveragesTableProps = {
  coverages: MethodCoverage[];
  onMethodCoverageDetails: (coverage: MethodCoverage) => void;
};

export const MethodCoveragesTable: FC<MethodCoveragesTableProps> = (props) => {
  const { coverages, onMethodCoverageDetails } = props;
  const { sortedItems, orderBy, setOrderBy, orderDirection, setOrderDirection } = useTableSorting({ items: coverages });

  return (
    <BaseTable
      containerSx={{ mt: 3 }}
      header={
        <MethodCoveragesTableHeader
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          orderDirection={orderDirection}
          setOrderDirection={setOrderDirection}
        />
      }>
      {sortedItems.map((coverage, index) => (
        <MethodCoveragesTableRow key={index} coverage={coverage} onMethodCoverageDetails={onMethodCoverageDetails} />
      ))}
    </BaseTable>
  );
};
