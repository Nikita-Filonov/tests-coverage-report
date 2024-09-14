import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ParameterCoverage } from '../../../Models/Coverage/ParameterCoverage';
import { ParameterCoveragesTreeViewItemLabel } from './ParameterCoveragesTreeViewItemLabel';
import { BaseTreeItem } from '../BaseTreeItem';

type ParameterCoveragesTreeViewItemProps = {
  coverage: ParameterCoverage;
};

export const ParameterCoveragesTreeViewItem: FC<ParameterCoveragesTreeViewItemProps> = (props) => {
  const { coverage } = props;

  return (
    <BaseTreeItem itemId={uuidv4()} label={<ParameterCoveragesTreeViewItemLabel coverage={coverage} />}>
      {coverage?.parameters?.map((coverage, index) => (
        <ParameterCoveragesTreeViewItem key={index} coverage={coverage} />
      ))}
    </BaseTreeItem>
  );
};
