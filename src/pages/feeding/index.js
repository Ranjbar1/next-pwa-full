import { Divider } from '@mui/material'

import { Breadcrumbs } from '@/libs/layouts/Breadcrumbs'
import IconTextButton from '@/libs/components/IconTextButton'
import SwipeLeftAltIcon from '@mui/icons-material/SwipeLeftAlt'
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt'
import { LuMilk } from 'react-icons/lu'
import LocalDiningIcon from '@mui/icons-material/LocalDining'
export default function Feeding() {
  return (
    <>
      <Breadcrumbs name="Feeding" onclick="onclick" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          gridTemplateRows: 'repeat(2,1fr)',
          background: 'rgb(64 60 65)',
          gap: '1rem',
          padding: '1rem 0.8rem',
        }}
      >
        <IconTextButton
          icon={<SwipeLeftAltIcon />}
          text="چپ"
          background="yellow"
        />
        <IconTextButton
          icon={<SwipeRightAltIcon />}
          text="راست"
          background="yellow"
        />{' '}
        <IconTextButton icon={<LuMilk />} text="شیشه شیر" background="yellow" />{' '}
        <IconTextButton
          icon={<LocalDiningIcon />}
          text="غذا"
          background="yellow"
        />
      </div>
      <Divider sx={{ backgroundColor: '#8a7f7f' }} />
    </>
  )
}
