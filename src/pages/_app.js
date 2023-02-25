import '@/styles/globals.css'
import Layout from "../../components/layout";
import {appWithTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

function App({ Component, pageProps }) {
    const { t } = useTranslation()
  return (
      <Layout
          navbar_text={t("navbar", { returnObjects: true})}
          footer_text={t("footer", { returnObjects: true})}
      >
        <Component {...pageProps} />
      </Layout>
  )
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}
export default appWithTranslation(App)
