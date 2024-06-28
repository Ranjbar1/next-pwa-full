import React from 'react'
import Navbar from '../components/Navbar'
import { useMediaQuery, useTheme } from '@mui/material'
import BottomNavbar from '../components/BottomNavbar'

type Props = {
  children: React.ReactNode
}

export default function LandingLayout({ children }: Props) {
  const theme = useTheme()
  const isMD = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <div>
      {isMD && <Navbar />}
      LandingLayout {children}
      {!isMD && <BottomNavbar />}
    </div>
  )
}
