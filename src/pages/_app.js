import '@/styles/globals.css'
import Layout from "../../components/layout";
import useTranslation from "next-translate/useTranslation";
import {Analytics} from "@vercel/analytics/react";

function App({ Component, pageProps }) {
    const { t } = useTranslation("common")

  return (
      <Layout
          navbar_text={t("navbar", { }, {returnObjects: true})}
          footer_text={t("footer", { }, {returnObjects: true})}
      >
        <Component {...pageProps} />
          <Analytics/>
      </Layout>
  )
}

export default App

