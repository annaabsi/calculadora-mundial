import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-N43VHLW" />
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag("js",new Date);
              gtag("config","GTM-N43VHLW");
            `
          }}>
          </script>
          {this.props.styles}
        </Head>
        <script dangerouslySetInnerHTML={{
          __html: `
          function e(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],c=document.createElement("script");c.src=e,t?c.type="module":(c.async=!0,c.type="text/javascript",c.setAttribute("nomodule",""));var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(c,n)}function t(t,c,n){var a,o,r;null!==(a=t.marfeel)&&void 0!==a||(t.marfeel={}),null!==(o=(r=t.marfeel).cmd)&&void 0!==o||(r.cmd=[]),t.marfeel.config=n,t.marfeel.config.accountId=c;var i="https://sdk.mrf.io/statics";e("".concat(i,"/marfeel-sdk.js?id=").concat(c),!0),e("".concat(i,"/marfeel-sdk.es5.js?id=").concat(c),!1)}!function(e,c){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};t(e,c,n)}(window,1693,{} /*config*/);
          `
        }}>
        </script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}