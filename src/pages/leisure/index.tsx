import { Divider } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ChildFriendlySharpIcon from '@mui/icons-material/ChildFriendlySharp'
import { Breadcrumbs } from '@/libs/layouts/Breadcrumbs'
import IconTextButton from '@/libs/components/IconTextButton'
import ShowerIcon from '@mui/icons-material/Shower'
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball'
import AirlineSeatFlatAngledIcon from '@mui/icons-material/AirlineSeatFlatAngled'

export default function Leisure() {
  return (
    <>
      <Breadcrumbs name="Leisure" onclick="onclick" />

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
          icon={<AirlineSeatFlatAngledIcon />}
          text=" گردن گرفتن"
          background="cyan"
        />
        <IconTextButton
          icon={<SportsVolleyballIcon />}
          text="بازی کردن"
          background="cyan"
        />{' '}
        <IconTextButton
          icon={<ChildFriendlySharpIcon />}
          text="بیرون رفتن"
          background="cyan"
        />{' '}
        <IconTextButton
          icon={<ShowerIcon />}
          text="حمام کردن"
          background="cyan"
        />
      </div>
      <Divider sx={{ backgroundColor: '#8a7f7f' }} />
    </>
  )
}
