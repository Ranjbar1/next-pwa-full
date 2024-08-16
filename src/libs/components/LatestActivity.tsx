import CircleIcon from './CircleIcon'
import NotificationsPausedIcon from '@mui/icons-material/NotificationsPaused'
import OpacityIcon from '@mui/icons-material/Opacity'

export default function LatestActivity() {
  return (
    <div
      style={{
        color: '#fff',
        backgroundColor: '#5d5757',
        borderRadius: '0.7rem',
        padding: '5px 18px',
      }}
    >
      <h2
        style={{
          fontSize: '14px',
          //   border: '1px solid red',
          margin: '0',
          padding: '0',
        }}
      >
        آخرین فعالیت ها
      </h2>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          margin: '0',
          padding: '0',
        }}
      >
        <CircleIcon
          icon={<OpacityIcon style={{ height: '1rem' }} />}
          background="#357777"
        />
        <p style={{ marginRight: '0.5rem', fontSize: '0.8rem' }}>
          1 بار ، 4 ثانیه
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          margin: '0',
          padding: '0',
        }}
      >
        <CircleIcon
          icon={<NotificationsPausedIcon style={{ height: '1rem' }} />}
          background="purple"
        />
        <p style={{ marginRight: '0.5rem', fontSize: '0.8rem' }}>
          3 بار ، 4 ثانیه
        </p>
      </div>
    </div>
  )
}
