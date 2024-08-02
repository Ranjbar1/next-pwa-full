import CircleIcon from './CircleIcon'
import WidgetsIcon from '@mui/icons-material/Widgets'
const Summarys = [{}]

export default function SummaryBox() {
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
          fontSize: '18px',
          //   border: '1px solid red',
          margin: '0',
          padding: '0',
        }}
      >
        خلاصه ای از امروز
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
          icon={<WidgetsIcon style={{ height: '3rem' }} />}
          background="#357777"
        />
        <p style={{ marginRight: '0.5rem' }}>1 بار ، 4 ثانیه</p>
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
          icon={<WidgetsIcon style={{ height: '3rem' }} />}
          background="purple"
        />
        <p style={{ marginRight: '0.5rem' }}>3 بار ، 4 ثانیه</p>
      </div>
    </div>
  )
}
