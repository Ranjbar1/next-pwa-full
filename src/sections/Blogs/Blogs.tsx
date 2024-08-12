import { Box } from '@mui/material'
import React from 'react'
import BlogCard from './BlogCard'

export default function Blogs() {
  return (
    <Box
      display={'grid'}
      gridTemplateColumns={{
        xl: 'repeat(3,1fr)',
        md: 'repeat(2,1fr)',
        xs: 'repeat(1,1fr)',
      }}
    >
      {new Array(10).map((item) => (
        <BlogCard key={item} />
      ))}
    </Box>
  )
}
