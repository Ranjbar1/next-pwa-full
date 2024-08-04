import { Divider } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ChildFriendlySharpIcon from '@mui/icons-material/ChildFriendlySharp'
import { Breadcrumbs } from '@/libs/layouts/Breadcrumbs'
import IconTextButton from '@/libs/components/IconTextButton'

export default function Leisure() {
  return (
    <>
      <Breadcrumbs name="Leisure" onclick="onclick" />

      <div
      // style={{ background: 'rgb(64 60 65)', height: '100vh', width: '100vw' }}
      >
        <IconTextButton
          icon={<ChildFriendlySharpIcon />}
          text="بیرون رفتن"
          background="cyan"
        />
      </div>
    </>
  )
}
