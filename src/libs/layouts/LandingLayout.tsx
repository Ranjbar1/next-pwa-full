import React from 'react'
import Navbar from '../components/Navbar'

type Props = {
  children: React.ReactNode
}

export default function LandingLayout({ children }: Props) {
  return (
    <div>
      <Navbar />
      LandingLayout {children}
    </div>
  )
}
