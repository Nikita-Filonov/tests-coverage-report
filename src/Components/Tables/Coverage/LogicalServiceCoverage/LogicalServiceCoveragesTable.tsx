import { FC } from 'react';
import { BaseTable } from '../../BaseTable';
import { useTableSorting } from '../../../../Services/Tables/Sorting';
import { LogicalServiceCoveragesTableHeader } from './LogicalServiceCoveragesTableHeader';
import { LogicalServiceCoverage } from '../../../../Models/Coverage/LogicalServiceCoverage';
import { LogicalServiceCoveragesTableRow } from './LogicalServiceCoveragesTableRow';

type LogicalServiceCoveragesTableProps = {
  coverages: LogicalServiceCoverage[];
};

export const LogicalServiceCoveragesTable: FC<LogicalServiceCoveragesTableProps> = (props) => {
  const { coverages } = props;
  const { sortedItems, orderBy, setOrderBy, orderDirection, setOrderDirection } = useTableSorting({ items: coverages });

  return (
    <BaseTable
      containerSx={{ mt: 3 }}
      header={
        <LogicalServiceCoveragesTableHeader
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          orderDirection={orderDirection}
          setOrderDirection={setOrderDirection}
        />
      }>
      {sortedItems.map((coverage, index) => (
        <LogicalServiceCoveragesTableRow key={index} coverage={coverage} />
      ))}
    </BaseTable>
  );
};
