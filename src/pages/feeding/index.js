import { Divider } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ChildFriendlySharpIcon from '@mui/icons-material/ChildFriendlySharp'
import { Breadcrumbs } from '@/libs/layouts/Breadcrumbs'
import IconTextButton from '@/libs/components/IconTextButton'

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
          icon={<ChildFriendlySharpIcon />}
          text="چپ"
          background="yellow"
        />
        <IconTextButton
          icon={<ChildFriendlySharpIcon />}
          text="راست"
          background="yellow"
        />{' '}
        <IconTextButton
          icon={<ChildFriendlySharpIcon />}
          text="شیشه شیر"
          background="yellow"
        />{' '}
        <IconTextButton
          icon={<ChildFriendlySharpIcon />}
          text="غذا"
          background="yellow"
        />
      </div>
      <Divider sx={{ backgroundColor: '#8a7f7f' }} />
    </>
  )
}
