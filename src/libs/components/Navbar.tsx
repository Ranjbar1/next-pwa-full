import { AppBar, Button, Container, Stack, Toolbar } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Navbar() {
  const router = useRouter()
  return (
    <AppBar>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack direction={'row'} gap={5}>
            <Link href={'/app'}> اپلیکیشن</Link>
            <Link href={'/gallery'}> گالری</Link>
            <Link href={'/blogs'}> مقالات</Link>
            <Link href={'/shop'}> فروشگاه</Link>
            <Link href={'/about-us'}> درباره ما</Link>
          </Stack>
          <Stack direction={'row'} gap={3}>
            <Button
              variant="outlined"
              onMouseDown={() => router.push('/auth/login')}
            >
              ورود
            </Button>
            <Button
              variant="contained"
              onMouseDown={() => router.push('/auth/signUp')}
            >
              ثبت نام
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
