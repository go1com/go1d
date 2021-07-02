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
        <header>
          <Link href="https://go1d.go1.com/">
            <Text
              color="accent"
              element="p"
              marginTop={5}
              marginBottom={2}
              fontFamily="sansSerif"
              fontSize={2}
              fontWeight="medium"
              lineHeight="display"
              display="flex"
              css={{alignItems: "center"}}
            >
              <img
                src="https://cdn.go1static.com/assets/go1d-static-assets/images/Go1d%20logo.png"
                alt="Go1d logo"
                style={{width: "1em", height: "1em", marginRight: "0.5em"}}
              />
              Go1d docs-site
            </Text>
          </Link>
        </header>
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

