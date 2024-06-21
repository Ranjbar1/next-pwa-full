import { Html, Head, Main, NextScript } from 'next/document';
import {
  DocumentHeadTags,
  documentGetInitialProps,
} from '@mui/material-nextjs/v13-pagesRouter';
import type { DocumentHeadTagsProps } from '@mui/material-nextjs/v13-pagesRouter';

export default function Document(props: DocumentHeadTagsProps) {
  return (
    <Html lang="fa" dir="rtl">
      <Head>
        <DocumentHeadTags {...props} />
        <link rel="manifest" href="/manifest.json" />
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          key="viewport"
        />
        <meta name="theme-color" content="#000000" />
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: any) => {
  const finalProps = await documentGetInitialProps(ctx, {});
  return finalProps;
};
