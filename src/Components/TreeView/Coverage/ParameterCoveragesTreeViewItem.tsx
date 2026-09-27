import { FC, useId } from 'react';
import { ParameterCoverage } from '../../../Models/Coverage/ParameterCoverage';
import { ParameterCoveragesTreeViewItemLabel } from './ParameterCoveragesTreeViewItemLabel';
import { BaseTreeItem } from '../BaseTreeItem';

type ParameterCoveragesTreeViewItemProps = {
  tree: string;
  coverage: ParameterCoverage;
};

export const ParameterCoveragesTreeViewItem: FC<ParameterCoveragesTreeViewItemProps> = (props) => {
  const { tree, coverage } = props;
  const itemId = useId();

  return (
    <BaseTreeItem itemId={itemId} label={<ParameterCoveragesTreeViewItemLabel tree={tree} coverage={coverage} />}>
      {coverage?.parameters?.map((coverage, index) => (
        <ParameterCoveragesTreeViewItem key={index} tree={`${tree}.${coverage.parameter}`} coverage={coverage} />
      ))}
    </BaseTreeItem>
  );
};
