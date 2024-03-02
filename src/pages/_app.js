import '@/styles/globals.css'
import Layout from "../../components/layout";
import { useTranslation } from 'next-i18next';
import {Analytics} from "@vercel/analytics/react";
import Head from "next/head"

import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }) {
    const { t } = useTranslation("common")

  return (
      <Layout
          navbar_text={t("navbar", {returnObjects: true})}
          footer_text={t("footer", {returnObjects: true})}
      >
          <Head>
              <meta name="google-site-verification" content="2eBmX1VpUOVF3kh4vNmhl6V7q8J9ABP4-iuLJX2WEy8" />
          </Head>
        <Component {...pageProps} />
          <Analytics/>
      </Layout>
  )
}

export default appWithTranslation(App)

