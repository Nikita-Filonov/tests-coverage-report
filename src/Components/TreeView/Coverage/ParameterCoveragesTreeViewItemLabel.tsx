import Typography from '@mui/material/Typography';
import { CoveredIcons } from '../../Icons/Coverage/CoveredIcons';
import { Box } from '@mui/material';
import { ParameterCoverage } from '../../../Models/Coverage/ParameterCoverage';
import { FC, MouseEvent, useState } from 'react';
import { DeprecatedIcons } from '../../Icons/Coverage/DeprecatedIcons';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

type Props = {
  tree: string;
  coverage: ParameterCoverage;
};

const Container = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center'
}));

export const ParameterCoveragesTreeViewItemLabel: FC<Props> = (props) => {
  const { tree, coverage } = props;
  const [allowCopy, setAllowCopy] = useState(false);

  const onCopyTree = async (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    await navigator.clipboard.writeText(tree);
  };

  const onAllowCopy = () => setAllowCopy(true);

  const onDisallowCopy = () => setAllowCopy(false);

  return (
    <Container onMouseEnter={onAllowCopy} onMouseLeave={onDisallowCopy}>
      <Typography>{coverage.deprecated ? `${coverage.parameter} (deprecated)` : coverage.parameter}</Typography>
      <CoveredIcons sx={{ ml: 1 }} covered={coverage.covered} />
      <DeprecatedIcons sx={{ ml: 1 }} deprecated={coverage.hasUncoveredParameters} />
      {allowCopy && (
        <IconButton sx={{ ml: 1, p: 0.4 }} size="small" onClick={onCopyTree}>
          <ContentCopyIcon sx={{ fontSize: 17 }} />
        </IconButton>
      )}
    </Container>
  );
};
