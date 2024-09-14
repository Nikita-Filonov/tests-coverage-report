import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { FC, PropsWithChildren, PropsWithoutRef } from 'react';
import { SxProps, Theme } from '@mui/material';
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

type BaseTreeViewProps = {
  sx?: SxProps<Theme>;
} & PropsWithChildren;

const ExpandIcon = (props: PropsWithoutRef<typeof AddBoxRoundedIcon>) => {
  return <AddBoxRoundedIcon {...props} sx={{ opacity: 0.8 }} />;
};

const CollapseIcon = (props: PropsWithoutRef<typeof IndeterminateCheckBoxRoundedIcon>) => {
  return <IndeterminateCheckBoxRoundedIcon {...props} sx={{ opacity: 0.8 }} />;
};

const EndIcon = (props: PropsWithoutRef<typeof DisabledByDefaultRoundedIcon>) => {
  return <DisabledByDefaultRoundedIcon {...props} sx={{ opacity: 0.3 }} />;
};

export const BaseTreeView: FC<BaseTreeViewProps> = ({ sx, children }) => {
  return (
    <SimpleTreeView
      sx={sx}
      slots={{
        expandIcon: ExpandIcon,
        collapseIcon: CollapseIcon,
        endIcon: EndIcon
      }}>
      {children}
    </SimpleTreeView>
  );
};
