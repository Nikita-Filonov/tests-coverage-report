import { BaseTableHeader } from '../../BaseTableHeader';
import { FC } from 'react';
import { OrderDirection } from '../../../../Services/Tables/Sorting';

type LogicalServiceCoveragesTableHeaderProps = {
  orderBy: string | null;
  setOrderBy: (orderBy: string | null) => void;
  orderDirection: OrderDirection;
  setOrderDirection: (direction: OrderDirection) => void;
};

export const LogicalServiceCoveragesTableHeader: FC<LogicalServiceCoveragesTableHeaderProps> = (props) => {
  const { orderBy, setOrderBy, orderDirection, setOrderDirection } = props;

  return (
    <BaseTableHeader
      cells={[
        { value: 'Logical service', orderKey: 'logicalService' },
        { value: 'Total methods/Covered', orderKey: 'totalMethods' },
        { value: 'Total coverage', orderKey: 'totalCoverage' },
        { value: undefined, align: 'right' }
      ]}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      orderDirection={orderDirection}
      setOrderDirection={setOrderDirection}
    />
  );
};
