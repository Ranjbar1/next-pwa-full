import '@/styles/globals.css'
import { components, palette, typography } from '@/theme'
import createCache from '@emotion/cache'
import { CssBaseline } from '@mui/material'
import {
  AppCacheProvider,
  DocumentHeadTags,
  DocumentHeadTagsProps,
} from '@mui/material-nextjs/v13-pagesRouter'
import { Theme, ThemeProvider, createTheme } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactElement, ReactNode } from 'react'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'
declare module '@mui/material/styles' {
  interface Theme {}
  interface ThemeOptions {}
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
})
export default function App({
  Component,
  pageProps,
}: AppProps & DocumentHeadTagsProps & AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  const theme: Theme = createTheme({
    direction: 'rtl',
    typography,
    components,
    palette: palette('light'),
  })
  return (
    <>
      <Head>
        <DocumentHeadTags {...pageProps.documentHeadTags} />
        <link rel="manifest" href="/manifest.json" />
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          key="viewport"
        />
        {/* <meta name="theme-color" content="#000000" /> */}
        <link
          rel="apple-touch-icon"
          href={`/app-icon/icon-512x512.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/app-icon/icon-72x72.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/app-icon/icon-72x72.png`}
          key="icon16"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`/favicon.png`}
          key="favicon"
        />
      </Head>{' '}
      <AppCacheProvider value={cacheRtl} {...pageProps}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            {getLayout(<Component {...pageProps} />)}
            <ReactQueryDevtools />
          </QueryClientProvider>{' '}
        </ThemeProvider>
      </AppCacheProvider>
    </>
  )
}
