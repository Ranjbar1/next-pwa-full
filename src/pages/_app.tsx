import '@/styles/globals.css';
import { components, palette, typography } from '@/theme';
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import { Theme, ThemeProvider, createTheme } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { CssBaseline } from '@mui/material';
declare module '@mui/material/styles' {
  interface Theme {}
  interface ThemeOptions {}
}
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme: Theme = createTheme({
  direction: 'rtl',
  typography,
  components,
  palette,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider value={cacheRtl} {...pageProps}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
}
