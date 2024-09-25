import { BaseTableHeader } from '../../BaseTableHeader';
import { FC } from 'react';
import { OrderDirection } from '../../../../Services/Tables/Sorting';

type MethodCoveragesTableHeaderProps = {
  orderBy: string | null;
  setOrderBy: (orderBy: string | null) => void;
  orderDirection: OrderDirection;
  setOrderDirection: (direction: OrderDirection) => void;
};

export const MethodCoveragesTableHeader: FC<MethodCoveragesTableHeaderProps> = (props) => {
  const { orderBy, setOrderBy, orderDirection, setOrderDirection } = props;

  return (
    <BaseTableHeader
      cells={[
        { value: 'Method', orderKey: 'method' },
        { value: 'Covered?', orderKey: 'covered' },
        { value: 'Total cases', orderKey: 'totalCases' },
        { value: 'Total request parameters/Covered', orderKey: 'requestCoverage.totalCoverage' },
        { value: 'Total response parameters/Covered', orderKey: 'responseCoverage.totalCoverage' },
        { value: undefined, align: 'right' }
      ]}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      orderDirection={orderDirection}
      setOrderDirection={setOrderDirection}
    />
  );
};
