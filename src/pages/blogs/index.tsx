import { LandingLayout } from '@/libs/layouts'
import Blogs from '@/sections/Blogs/Blogs'
import { Box, Container } from '@mui/material'
import React from 'react'

export default function BlogsPage() {
  return (
    <Container maxWidth="xl">
      <Blogs />
    </Container>
  )
}

BlogsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingLayout>{page}</LandingLayout>
}
