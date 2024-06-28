import { FormProvider } from '@/libs/Forms/FormProvider'
import { RHFTextField } from '@/libs/Forms/TextField'
import { getAllWeeks, postNewWeek } from '@/services/weeks'
import { Box, Button, Container, List, ListItem, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function ContentForm() {
  const [weeks, setWeeks] = useState<any>()
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    getAllWeeks()
      .then((res) => setWeeks(res))
      .catch((err) => console.log(err))
  }, [isLoading])
  const methods = useForm({ defaultValues: {} })

  const createContent = methods.handleSubmit(async (data) => {
    setIsLoading(true)
    postNewWeek(data)
      .then((res) => {
        methods.reset(() => {})

        alert('OK')
      })
      .catch((err) => {
        alert(err.message)
      })
      .finally(() => setIsLoading(false))
  })

  return (
    <Container maxWidth="md">
      <Stack my={10}>
        <FormProvider methods={methods} onSubmit={createContent}>
          <RHFTextField name="title" label="Title" />
          <RHFTextField name="description" label="description" />
          <RHFTextField name="sameAs" label="sameAs" />
          <RHFTextField name="week" label="week" type="number" />
          <RHFTextField name="likes" label="Likes" type="number" />
          <RHFTextField name="height" label="Height" type="number" />
          <RHFTextField name="minWeight" label="minWeight" type="number" />
          <RHFTextField name="maxWeight" label="maxWeight" type="number" />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {' '}
            <Button type="submit">Submit</Button>
            <Button
              type="reset"
              color="error"
              onClick={() => {
                methods.reset(() => {})
              }}
            >
              reset
            </Button>
          </Stack>
        </FormProvider>
      </Stack>
      <List>
        {weeks &&
          weeks.map((week: any) => (
            <ListItem key={week.id}>
              {`${week.id} - ${week.title} - ${week.description} - ${week.sameAs} - ${week.week} - ${week.likes} - ${week.height} - ${week.minWeight} - ${week.maxWeight}
`}
            </ListItem>
          ))}
      </List>
    </Container>
  )
}
