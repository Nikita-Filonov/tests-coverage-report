import { ParameterCoverage } from '../../../Models/Coverage/ParameterCoverage';
import { FC } from 'react';
import { BaseTreeView } from '../BaseTreeView';
import { ParameterCoveragesTreeViewItem } from './ParameterCoveragesTreeViewItem';
import { BoxView } from '../../Views/BoxView';

type ParameterCoveragesTreeViewProps = {
  coverages: ParameterCoverage[];
};

export const ParameterCoveragesTreeView: FC<ParameterCoveragesTreeViewProps> = (props) => {
  const { coverages } = props;

  return (
    <BoxView title={'Parameters coverage'}>
      <BaseTreeView sx={{ mt: 2 }}>
        {coverages.map((coverage, index) => (
          <ParameterCoveragesTreeViewItem key={index} coverage={coverage} />
        ))}
      </BaseTreeView>
    </BoxView>
  );
};
