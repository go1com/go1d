import Provider from "@go1d/go1d/build/components/Provider";
import globalCSS from '@go1d/go1d/build/foundations/globalCSS';

globalCSS();

function DocsSite({ Component, pageProps }) {
  return <Provider><Component {...pageProps} /></Provider>
}

export default DocsSite

