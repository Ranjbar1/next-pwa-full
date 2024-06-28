import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CollectionsIcon from '@mui/icons-material/Collections'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import WidgetsIcon from '@mui/icons-material/Widgets'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'
const routes = [
  {
    label: 'اپلیکیشن',
    path: '/app',
    icon: <WidgetsIcon />,
  },
  {
    label: 'گالری',
    path: '/gallery',
    icon: <CollectionsIcon />,
  },
  {
    label: 'مقالات',
    path: '/blogs',
    icon: <RssFeedIcon />,
  },
  {
    label: 'فروشگاه',
    path: '/shop',
    icon: <ShoppingBasketIcon />,
  },
  {
    label: 'پروفایل',
    path: '/profile',
    icon: <AccountCircleIcon />,
  },
] as const

export default function BottomNavbar() {
  const [value, setValue] = useState('/')
  const router = useRouter()
  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={router.pathname}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        {routes.map((item, i) => (
          <BottomNavigationAction
            key={`bottom-nav-${i}`}
            label={item.label}
            value={item.path}
            icon={item.icon}
            onClick={() => router.push(item.path)}
          />
        ))}
      </BottomNavigation>
    </Paper>
  )
}
