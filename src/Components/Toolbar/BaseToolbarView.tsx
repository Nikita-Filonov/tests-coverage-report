import { BasePaper } from '../Views/BasePaper';
import Typography from '@mui/material/Typography';
import { Box, SxProps, Theme } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import IconButton from '@mui/material/IconButton';
import { getActionMarginRight } from '../../Services/Views/Utils';

type ToolbarAction = {
  icon?: ReactNode;
  content?: ReactNode;
  onClick?: () => void;
  label?: string;
};

type BaseToolbarViewProps = {
  icon?: ReactNode;
  title: string;
  actions?: ToolbarAction[];
  containerSx?: SxProps<Theme>;
};

export const BaseToolbarView: FC<BaseToolbarViewProps> = (props) => {
  const { icon, title, actions = [], containerSx } = props;

  const getMarginRight = (index: number): number => getActionMarginRight({ index, actions, margin: 2 });

  return (
    <BasePaper sx={containerSx}>
      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', rowGap: 1 }}>
        {icon && <Box sx={{ mr: 2 }}>{icon}</Box>}
        <Typography variant={'h6'}>{title}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        {actions.map((action, index) =>
          action.icon ? (
            <IconButton
              aria-label={action.label}
              key={index}
              sx={{ mr: getMarginRight(index) }}
              onClick={action.onClick}>
              {action.icon}
            </IconButton>
          ) : (
            <Box key={index} sx={{ mr: getMarginRight(index) }}>
              {action.content}
            </Box>
          )
        )}
      </Box>
    </BasePaper>
  );
};
