import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { SpeedInsights } from "@vercel/speed-insights/next";
import config from "../lib/config";

export default class Document extends NextDocument {
    render() {
        return (
          <Html lang="en">
            <Head>
              <title>{config.title}</title>
              <meta name="description" content={config.description} />
              <meta property="og:url" content="https://synthicy.com" />
              <meta property="og:type" content="website" />
              <meta property="og:description" content={config.description} />
              <meta property="og:title" content={config.title} />
              <meta property="og:image" content={config.author.image} />

              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content={config.author.twitter} />
              <meta name="twitter:title" content={config.title} />
              <meta name="twitter:description" content={config.description} />
              <meta name="twitter:image" content={config.author.image} />

              <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
              <link href="/static/favicons/site.webmanifest" rel="manifest" />
              <link
                href="/static/favicons/apple-touch-icon.png"
                rel="apple-touch-icon"
                sizes="180x180"
              />
              <link
                href="/static/favicons/favicon-32x32.png"
                rel="icon"
                sizes="32x32"
                type="image/png"
              />
              <link
                href="/static/favicons/favicon-16x16.png"
                rel="icon"
                sizes="16x16"
                type="image/png"
              />
              <link
                color="#4a9885"
                href="/static/favicons/safari-pinned-tab.svg"
                rel="mask-icon"
              />
              <meta content="#F9A8D4" name="theme-color" />
              <meta content="#000000" name="msapplication-TileColor" />
              <meta
                content="/static/favicons/browserconfig.xml"
                name="msapplication-config"
              />
            </Head>
            <body>
              <Main />
              <SpeedInsights />
              <NextScript />
            </body>
          </Html>
        );
    }
}