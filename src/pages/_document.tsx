import { documentGetInitialProps } from '@mui/material-nextjs/v13-pagesRouter'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Document.getInitialProps = async (ctx: any) => {
  const finalProps = await documentGetInitialProps(ctx, {})
  return finalProps
}
