import { Button, Box } from '@mui/material'

interface CircleIconProperty {
  icon: React.ReactNode
  background: string
}

export default function CircleIcon(props: CircleIconProperty) {
  return (
    <Box
      sx={{
        borderRadius: '50%',
        background: props.background,
        width: '2.5rem',
        height: '2.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span>{props.icon}</span>
    </Box>
  )
}
