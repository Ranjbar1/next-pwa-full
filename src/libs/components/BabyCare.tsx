import IconButton from './IconButton'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CollectionsIcon from '@mui/icons-material/Collections'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import WidgetsIcon from '@mui/icons-material/Widgets'

const actions = [
  {
    background: '#c89942',
    path: '/app',
    icon: <WidgetsIcon style={{ height: '3rem' }} />,
  },
  {
    background: '#5d5da7',
    path: '/gallery',
    icon: <CollectionsIcon style={{ height: '3rem' }} />,
  },
  {
    background: 'purple',
    path: '/blogs',
    icon: <RssFeedIcon style={{ height: '3rem' }} />,
  },
  {
    background: 'cyan',
    path: '/leisure',
    icon: <ShoppingBasketIcon style={{ height: '3rem' }} />,
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
