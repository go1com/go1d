import Document, { Html, Head, Main, NextScript } from 'next/document'

class SiteDocsDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <body>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="https://www.go1.com/static/favicon-32x32.png" />
        </Head>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default SiteDocsDocument
