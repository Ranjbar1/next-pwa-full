import BabyCare from '@/libs/components/BabyCare'
import LandingNavbar from '@/libs/components/LandingNavbar'
import LatestActivity from '@/libs/components/LatestActivity'
import SummaryBox from '@/libs/components/SummaryBox'
import { AppLayout } from '@/libs/layouts'
import { Button, Divider } from '@mui/material'
import React from 'react'

export default function AppPage() {
  return (
    <div
      style={{ background: 'rgb(64 60 65)', height: '100vh', width: '100vw' }}
    >
      <LandingNavbar />
      <Divider sx={{ backgroundColor: '#8a7f7f' }} />
      <div style={{ padding: '0.5rem' }}>
        {' '}
        <BabyCare />{' '}
      </div>
      <Divider sx={{ backgroundColor: '#8a7f7f' }} />
      <div style={{ padding: '0.5rem' }}>
        <LatestActivity />

        <SummaryBox />
        <Button
          sx={{
            backgroundColor: '#70c670',
            borderRadius: '0.7rem',
            color: '#0d0e0e',
            width: '100%',
            marginTop: '0.5rem',
            fontSize: '14px',
          }}
        >
          ذخیره شده ها
        </Button>
      </div>
    </div>
  )
}
