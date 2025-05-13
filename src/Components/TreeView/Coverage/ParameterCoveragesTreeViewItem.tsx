import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ParameterCoverage } from '../../../Models/Coverage/ParameterCoverage';
import { ParameterCoveragesTreeViewItemLabel } from './ParameterCoveragesTreeViewItemLabel';
import { BaseTreeItem } from '../BaseTreeItem';

type ParameterCoveragesTreeViewItemProps = {
  tree: string;
  coverage: ParameterCoverage;
};

export const ParameterCoveragesTreeViewItem: FC<ParameterCoveragesTreeViewItemProps> = (props) => {
  const { tree, coverage } = props;

  return (
    <BaseTreeItem itemId={uuidv4()} label={<ParameterCoveragesTreeViewItemLabel tree={tree} coverage={coverage} />}>
      {coverage?.parameters?.map((coverage, index) => (
        <ParameterCoveragesTreeViewItem key={index} tree={`${tree}.${coverage.parameter}`} coverage={coverage} />
      ))}
    </BaseTreeItem>
  );
};
