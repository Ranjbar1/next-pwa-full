import { CustomIcon } from '@/components/base/CustomIcon';
import { Constants } from '@/core/utils';
import { useGetCaptcha } from '@/hooks/services/useCaptcha';
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { CaptchaCode } from '../../CaptchaCode';
import { RHFCaptchaProps } from './types';

const RHFCaptcha = ({ name, ...rest }: RHFCaptchaProps) => {
  const { control, setValue } = useFormContext();
  const { refetch, data, isFetching, error } = useGetCaptcha();
  useEffect(() => {
    if (error) {
      // execute your logic, you can use `myData` state
    } else if (data) {
      setValue('captchaKey', data.data.key);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, data]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <Stack direction="row" gap={2}>
            <TextField
              {...field}
              label={Constants.captchaCode}
              size="small"
              placeholder={Constants.enterOTP}
              inputProps={{ maxLength: 6 }}
              error={!!error}
              helperText={
                <Box
                  component="span"
                  alignItems="center"
                  display="flex"
                  gap={1}
                >
                  <CustomIcon icon="InfoCircleIcon" sx={{ width: '16px' }} />
                  <Typography variant="subtitle2">
                    {error && error?.message}
                  </Typography>
                </Box>
              }
              FormHelperTextProps={{
                component: 'div',
                sx: {
                  visibility: error && error?.message ? 'visible' : 'hidden',
                },
              }}
              {...rest}
              sx={{
                ...rest.sx,
                flex: 3,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CustomIcon icon="SecuritySafeIcon" />
                  </InputAdornment>
                ),
              }}
            />
            <CaptchaCode
              src={data?.data.image || ''}
              refetch={refetch}
              isLoading={isFetching}
            />
          </Stack>
        );
      }}
    />
  );
};

export default RHFCaptcha;
