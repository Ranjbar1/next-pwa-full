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
        width: '2rem',
        height: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {props.icon}
      </span>
    </Box>
  )
}
