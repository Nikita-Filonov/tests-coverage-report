import { BaseProgress } from '../BaseProgress';
import { FC } from 'react';
import { getCoverageColor } from '../../../Services/Coverage/Utils';

type LogicalServiceCoverageProgressProps = {
  value: number;
};

export const LogicalServiceCoverageProgress: FC<LogicalServiceCoverageProgressProps> = (props) => {
  const { value } = props;

  return <BaseProgress value={value} color={getCoverageColor(value)} />;
};
