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
        </Head>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default SiteDocsDocument
