import { FormProvider } from '@/libs/Forms/FormProvider'
import { RHFTextField } from '@/libs/Forms/TextField'
import AddIcon from '@mui/icons-material/Add'

import {
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { useForm } from 'react-hook-form'

export default function SignUpPage() {
  const methods = useForm({
    mode: 'onChange',
  })
  return (
    <div style={{ backgroundColor: '#BEDCFF', height: '100vh' }}>
      <Container maxWidth="md">
        <Stack py={5 * 2} justifyContent={'center'}>
          <Paper>
            <Typography variant="h3" textAlign="center">
              ثبت نام
            </Typography>
            <FormProvider methods={methods}>
              <Stack
                direction="column"
                spacing={2}
                px={30}
                py={5}
                alignItems="center"
              >
                <RHFTextField name="email" label="ایمیل" />
                <RHFTextField name="password" label="رمز عبور" margin="dense" />
                <Button
                  variant="contained"
                  endIcon={<AddIcon />}
                  sx={{ width: '30%' }}
                >
                  تبت نام
                </Button>
                <Divider variant="fullWidth" />
                <Button
                  sx={{ width: '60%' }}
                  variant="contained"
                  endIcon={<AddIcon />}
                >
                  ثبت نام با گوگل
                </Button>

                <Button sx={{ width: '20%' }}> ورود</Button>
              </Stack>
            </FormProvider>
          </Paper>
        </Stack>
      </Container>
    </div>
  )
}
