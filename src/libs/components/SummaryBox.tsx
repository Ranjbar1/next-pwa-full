import CircleIcon from './CircleIcon'
import OpacityIcon from '@mui/icons-material/Opacity'
import ChildFriendlySharpIcon from '@mui/icons-material/ChildFriendlySharp'
const Summarys = [{}]

export default function SummaryBox() {
  return (
    <div
      style={{
        color: '#fff',
        backgroundColor: '#5d5757',
        borderRadius: '0.7rem',
        padding: '5px 18px',
        marginTop: '0.5rem ',
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
          icon={<ChildFriendlySharpIcon style={{ height: '1rem' }} />}
          background="purple"
        />
        <p style={{ marginRight: '0.5rem', fontSize: '0.8rem' }}>
          3 بار ، 4 ثانیه
        </p>
      </div>
    </div>
  )
}
