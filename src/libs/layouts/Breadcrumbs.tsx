import AddIcon from '@mui/icons-material/Add'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Divider, IconButton } from '@mui/material'
import Link from 'next/link'

interface BreadcrumbsProps {
  name: string
  onclick: string
}
export function Breadcrumbs(props: BreadcrumbsProps) {
  return (
    <>
      <div style={{ background: 'rgb(64 60 65)', color: '#fff' }}>
        <div style={{ padding: '0.5rem', paddingBottom: '0' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              //   border: '1px solid red',
              height: '1.5rem',
            }}
          >
            <IconButton
              aria-label="add"
              sx={{ color: '#fff' }}
              onClick={() => {
                console.log()
              }}
            >
              <AddIcon />
            </IconButton>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                // border: '1px solid red',
              }}
            >
              <p style={{ marginLeft: '0.5rem' }}>{props.name}</p>

              <Link href="/app-baby-care">
                <ArrowBackIcon />
              </Link>
            </div>
          </div>
        </div>
        <Divider sx={{ backgroundColor: '#8a7f7f' }} />
      </div>
    </>
  )
}
