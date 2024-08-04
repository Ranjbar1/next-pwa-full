import CollectionsIcon from '@mui/icons-material/Collections'
const name = 'دایانا'

export default function LandingNavbar() {
  return (
    <div style={{ padding: '1rem', paddingBottom: '0.5rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '13rem',
        }}
      >
        <div
          style={{
            border: '1px solid #70c670',
            borderRadius: '50%',
            color: '#70c670',
            // backgroundColor: '#fff',
            width: '4rem',
            height: '4rem',
          }}
        >
          <span>{name[0]}</span>
        </div>
        <div style={{ color: '#fff' }}>
          <p style={{ margin: 0, padding: 0 }}>دایانا</p>
          <p style={{ margin: 0, padding: 0 }}>سن : مشخص نشده</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <div style={{ width: '6rem' }}>
          <div
            style={{
              color: '#8a7f7f',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <CollectionsIcon style={{ color: '#8a7f7f' }} />
            <CollectionsIcon style={{ color: '#8a7f7f' }} />
            <CollectionsIcon style={{ color: '#8a7f7f' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
