import Document, { Html, Head, Main, NextScript } from 'next/document'
import foundations from '@go1d/go1d/build/foundations/';

class SiteDocsDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="https://www.go1.com/static/favicon-32x32.png" />
        </Head>
        <body style={{backgroundColor: foundations.colors.faint}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default SiteDocsDocument

