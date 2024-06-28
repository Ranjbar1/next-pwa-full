import { FormControlLabelProps } from '@mui/material';

export type RHFCheckboxProps = {
  name: string;
  helperText?: React.ReactNode;
} & Omit<FormControlLabelProps, 'control'>;

export type RHFMultiCheckboxProps = {
  name: string;
  options: { label: string; value: any }[];
  row?: boolean;
  label?: string;
  spacing?: number;
  helperText?: React.ReactNode;
} & Omit<FormControlLabelProps, 'control' | 'label'>;
