import Provider from "@go1d/go1d/build/components/Provider";
import globalCSS from '@go1d/go1d/build/foundations/globalCSS';
import Layout from '../components/Layout'

globalCSS();

function DocsSite({ Component, pageProps }) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default DocsSite

