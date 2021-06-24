import Provider from "@go1d/go1d/build/components/Provider";
import globalCSS from '@go1d/go1d/build/foundations/globalCSS';
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../components/Layout'
import mdxComponents from '../utils/mdx-components'
import '../styles/global.css'

globalCSS();

function DocsSite({ Component, pageProps }) {
  return (
    <Provider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Go1d docs-site</title>
      </Head>
      <Layout>
        <MDXProvider components={mdxComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </Layout>
    </Provider>
  )
}

export default DocsSite

