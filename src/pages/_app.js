import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/assets/scss/master.scss"
import "@/styles/extra.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import NextTopLoader from "nextjs-toploader";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextTopLoader
        color="#c9f31d"
        showSpinner={false}
        height={3}
        crawlSpeed={200}
        easing="ease"
      />
      <Component {...pageProps} />
    </>
  );
}
