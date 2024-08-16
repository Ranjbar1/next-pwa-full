import { Divider } from '@mui/material'

import { Breadcrumbs } from '@/libs/layouts/Breadcrumbs'
import IconTextButton from '@/libs/components/IconTextButton'
import GrainIcon from '@mui/icons-material/Grain'
import WaterIcon from '@mui/icons-material/Water'
import BlurCircularIcon from '@mui/icons-material/BlurCircular'

export default function Diapers() {
  return (
    <>
      <Breadcrumbs name="Diapers" onclick="onclick" />

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
          icon={<WaterIcon />}
          text="ادرار"
          background="#5d5da7"
        />
        <IconTextButton
          icon={<GrainIcon />}
          text="مدفوع"
          background="#5d5da7"
        />{' '}
        <IconTextButton
          icon={<BlurCircularIcon />}
          text="ادرار و مدفوع "
          background="#5d5da7"
        />{' '}
      </div>
      <Divider sx={{ backgroundColor: '#8a7f7f' }} />
    </>
  )
}
