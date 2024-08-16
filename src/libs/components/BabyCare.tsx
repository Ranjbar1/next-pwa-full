import IconButton from './IconButton'

import { LuMilk } from 'react-icons/lu'
import NotificationsPausedIcon from '@mui/icons-material/NotificationsPaused'
import OpacityIcon from '@mui/icons-material/Opacity'
import ChildFriendlySharpIcon from '@mui/icons-material/ChildFriendlySharp'

const actions = [
  {
    background: 'yellow',
    path: '/feeding',
    icon: <LuMilk style={{ height: '3rem' }} />,
  },
  {
    background: '#5d5da7',
    path: '/diapers',
    icon: <OpacityIcon style={{ height: '3rem' }} />,
  },
  {
    background: 'purple',
    path: '/blogs',
    icon: <NotificationsPausedIcon style={{ height: '3rem' }} />,
  },
  {
    background: 'cyan',
    path: '/leisure',
    icon: <ChildFriendlySharpIcon style={{ height: '3rem' }} />,
  },
] as const
export default function BabyCare() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {actions.map((item, i) => (
          <IconButton
            key={`icon-button-${i}`}
            background={item.background}
            path={item.path}
            icon={item.icon}
          />
        ))}
      </div>
    </>
  )
}
