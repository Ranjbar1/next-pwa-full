import { LandingLayout } from '@/libs/layouts'
import { useTheme } from '@mui/material'

export default function Page() {
  const theme = useTheme()
  console.log(theme)

  return <LandingLayout>asd</LandingLayout>
}
