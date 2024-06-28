import React from 'react'
import BottomNavbar from '../components/BottomNavbar'
type Props = {
  children: React.ReactNode
}

export default function ShopLayout({ children }: Props) {
  return (
    <>
      ShopLayout
      {children}
      <BottomNavbar />
    </>
  )
}
