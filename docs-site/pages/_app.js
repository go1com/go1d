import Link from "@go1d/go1d/build/components/Link";
import Provider from "@go1d/go1d/build/components/Provider";
import Text from "@go1d/go1d/build/components/Text"
import View from "@go1d/go1d/build/components/View"
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
          <main>
            <Component {...pageProps} />
          </main>
        </MDXProvider>
        <footer>
          <View flexDirection="row" justifyContent="center" marginY="1em" flexWrap="wrap">
            <Link href="https://www.go1.com/" marginRight="1em">
              <Text color="successLow" element="p">© Go1</Text>
            </Link>
            <Link href="https://www.go1.com/en-au/terms/privacy-policy">
              <Text color="successLow" element="p">Privacy</Text>
            </Link>
          </View>
        </footer>
      </Layout>
    </Provider>
  )
}

export default DocsSite

