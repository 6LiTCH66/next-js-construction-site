import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from "../../components/header/Header";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

export default function Home() {
    const { t } = useTranslation()

  return (
    <>
      <Header
          header_title={t("header.header_title")}
          header_description={t("header.header_description")}
          header_button={t("header.header_button")}
      />

    </>
  )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}
