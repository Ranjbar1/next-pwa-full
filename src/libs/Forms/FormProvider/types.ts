import { UseFormReturn } from 'react-hook-form';

export type FormProviderProps = {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: VoidFunction;
};
