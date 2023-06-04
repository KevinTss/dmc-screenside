// https://nextjs.org/docs/advanced-features/custom-document
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { i18n } from '../../next.config';

class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const currentLocale = i18n.defaultLocale;

    return (
      <Html lang={currentLocale}>
        <Head>
          <link rel='icon' type='image/x-icon' href='favicon.ico' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;800&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <div id='portal-root' />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
