// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QJDMC5FK42"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QJDMC5FK42');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        
        {/* GoatCounter Script - Added after NextScript */}
        <script
          data-goatcounter={`https://${process.env.NEXT_PUBLIC_GOAT_COUNTER_CODE}.goatcounter.com/count`}
          data-goatcounter-settings='{"allow_local": true}'
          async
          src="//gc.zgo.at/count.js"
        />
      </body>
    </Html>
  );
}