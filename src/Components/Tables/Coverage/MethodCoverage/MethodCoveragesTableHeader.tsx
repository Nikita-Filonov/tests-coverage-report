import { BaseTableHeader } from '../../BaseTableHeader';

export const MethodCoveragesTableHeader = () => {
  return (
    <BaseTableHeader
      cells={[
        { value: 'Method' },
        { value: 'Covered?' },
        { value: 'Total cases' },
        { value: 'Total request parameters/Covered' },
        { value: 'Total response parameters/Covered' },
        { value: undefined, align: 'right' }
      ]}
    />
  );
};
