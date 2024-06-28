import { LandingLayout } from '@/libs/layouts'
import React from 'react'

export default function BlogsPage() {
  return <div>BlogsPage</div>
}

BlogsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingLayout>{page}</LandingLayout>
}
