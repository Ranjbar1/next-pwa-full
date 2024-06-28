import { RadioGroupProps } from '@mui/material';

export type RHFRadioGroupProps = RadioGroupProps & {
  name: string;
  options: { label: string; value: any }[];
  label?: string;
  spacing?: number;
  helperText?: React.ReactNode;
};
