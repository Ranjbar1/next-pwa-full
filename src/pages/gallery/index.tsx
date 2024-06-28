import { LandingLayout } from '@/libs/layouts'
import React from 'react'

export default function GalleryPage() {
  return <div>GalleryPage</div>
}

GalleryPage.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingLayout>{page}</LandingLayout>
}
