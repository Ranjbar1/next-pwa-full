import React from 'react'
import Navbar from '../components/Navbar'
import { Container, useMediaQuery, useTheme } from '@mui/material'
import BottomNavbar from '../components/BottomNavbar'
import Footer from '../components/Footer'

type Props = {
  children: React.ReactNode
}

export default function LandingLayout({ children }: Props) {
  const theme = useTheme()
  const isMD = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6 ,1fr)',
        gridTemplateRows: '100px auto 400px',
        minHeight: '100dvh',
        // gridTemplateAreas: ``,
      }}
    >
      {isMD && <Navbar />}
      {children}
      <Footer />
      {!isMD && <BottomNavbar />}
    </Container>
  )
}
