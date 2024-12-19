import { FormControl, InputLabel, OutlinedInput, SxProps, Theme } from '@mui/material';
import { ChangeEvent, FC, ReactNode } from 'react';

export type BaseTextFieldProps = {
  sx?: SxProps<Theme>;
  value: string;
  label: string;
  onChange: (value: string) => void;
  placeholder?: string;
  endAdornment?: ReactNode;
};

export const BaseTextField: FC<BaseTextFieldProps> = (props) => {
  const { value, onChange, label, placeholder, sx, endAdornment } = props;

  const onInternalChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <FormControl sx={sx} size={'small'} variant="outlined" fullWidth>
      <InputLabel>{label}</InputLabel>
      <OutlinedInput
        endAdornment={endAdornment}
        value={value}
        label={label}
        onChange={onInternalChange}
        placeholder={placeholder}
      />
    </FormControl>
  );
};
