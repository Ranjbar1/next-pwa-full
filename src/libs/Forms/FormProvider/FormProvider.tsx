import { FormProvider as Form } from 'react-hook-form'
import { FormProviderProps } from './types'
import { styled } from '@mui/material'
const BaseForm = styled('form')({})
export default function FormProvider({
  children,
  onSubmit,
  methods,
}: FormProviderProps) {
  return (
    <Form {...methods}>
      <BaseForm onSubmit={onSubmit}>{children}</BaseForm>
    </Form>
  )
}
