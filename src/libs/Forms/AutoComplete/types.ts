import { AutocompleteProps } from '@mui/material';

export type AutoCompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
> = {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: React.ReactNode;
} & AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>;
