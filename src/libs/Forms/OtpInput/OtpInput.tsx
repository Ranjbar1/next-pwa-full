import { Controller, useFormContext } from 'react-hook-form';
import OTPInput from 'react-otp-input';
import { OtpFieldInput } from './OtpField.styled';
import { RHFOtpInputProps } from './types';
import { Box, Typography } from '@mui/material';
import { CustomIcon } from '@/components/base/CustomIcon';

const RHFOtpInput = ({
  name,
  helperText,
  type,
  ...other
}: RHFOtpInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box>
          <OTPInput
            {...field}
            shouldAutoFocus
            inputType="number"
            numInputs={6}
            containerStyle={{
              direction: 'ltr',
              display: 'flex',
              justifyContent: 'space-between',
              margin: 'auto',
              width: '98%',
            }}
            renderInput={(props) => (
              <OtpFieldInput sx={{ minWidth: '15%' }} {...props} />
            )}
          />
          {error && error?.message && (
            <Box
              component="span"
              alignItems="center"
              display="flex"
              gap={1}
              mt={2}
              color={(theme) => theme.palette.danger.main}
            >
              <CustomIcon icon="InfoCircleIcon" />
              <Typography> {error && error?.message}</Typography>
            </Box>
          )}
        </Box>
      )}
    />
  );
};
export default RHFOtpInput;
