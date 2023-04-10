import '@/styles/globals.css'
import Layout from "../../components/layout";
import useTranslation from "next-translate/useTranslation";

function App({ Component, pageProps }) {
    const { t } = useTranslation("common")

  return (
      <Layout
          navbar_text={t("navbar", { }, {returnObjects: true})}
          footer_text={t("footer", { }, {returnObjects: true})}
      >
        <Component {...pageProps} />
      </Layout>
  )
}

export default App

