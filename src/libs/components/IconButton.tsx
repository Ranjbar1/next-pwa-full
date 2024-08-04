import { Button, Box } from '@mui/material'
import Link from 'next/link'

interface IconButtonProperty {
  icon: React.ReactNode
  background: string
  path: string
}

export default function IconButton(props: IconButtonProperty) {
  return (
    <Box
      sx={{
        borderRadius: '0.5rem',
        background: props.background,
        width: '22%',
        height: '5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link href={props.path}>
        <span>{props.icon}</span>
      </Link>
    </Box>
  )
}
