import { useFormContext, Controller } from 'react-hook-form';
// @mui
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';
import { RHFCheckboxProps } from './types';
import { Box } from '@mui/material';

const RHFCheckbox = ({ name, helperText, ...other }: RHFCheckboxProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box>
          <FormControlLabel
            control={<Checkbox {...field} checked={field.value} />}
            {...other}
          />

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>
              {error ? error?.message : helperText}
            </FormHelperText>
          )}
        </Box>
      )}
    />
  );
};
export default RHFCheckbox;
