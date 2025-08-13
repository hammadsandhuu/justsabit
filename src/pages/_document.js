import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect for faster DNS resolution - moved to top for priority */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Font: Kanit - Optimized with font-display swap */}
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Preload critical font variants for better performance */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/kanit/v15/nKKZ-Go6G5tXcoaSEQGodLxA.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Favicon - optimized with proper type */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/imgs/logo/favicon.png"
        />

        {/* Additional favicon sizes for better compatibility */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/imgs/logo/favicon.png"
        />

        {/* SEO & Accessibility Enhancements */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Language Tag (for global targeting) */}
        <meta httpEquiv="Content-Language" content="en" />

        {/* Resource hints for better performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
