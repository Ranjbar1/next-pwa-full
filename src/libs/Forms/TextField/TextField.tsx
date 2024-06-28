// import { CustomIcon } from '@/components/base/CustomIcon';
import {
  Box,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { RHFTextFieldProps } from './types'

const RHFTextField = ({
  name,
  helperText,
  type,
  ...other
}: RHFTextFieldProps) => {
  const { control } = useFormContext()
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        console.log(field, 'field')
        return (
          <>
            <TextField
              {...field}
              fullWidth
              type={type === 'password' ? (showPassword ? 'text' : type) : type}
              value={type === 'number' && field.value === 0 ? '' : field.value}
              onChange={(event) => {
                if (type === 'number') {
                  field.onChange(Number(event.target.value))
                } else {
                  field.onChange(event.target.value)
                }
              }}
              autoComplete="current-password"
              error={!!error}
              helperText={
                <Box
                  component="span"
                  alignItems="center"
                  display="flex"
                  gap={1}
                >
                  {/* <CustomIcon icon="InfoCircleIcon" sx={{ width: '16px' }} /> */}
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
              {...other}
              InputProps={{
                ...other.InputProps,
                endAdornment: type === 'password' && (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {/* <CustomIcon
                        icon={showPassword ? 'EyeIcon' : 'EyeSlashIcon'}
                      /> */}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </>
        )
      }}
    />
  )
}
export default RHFTextField
