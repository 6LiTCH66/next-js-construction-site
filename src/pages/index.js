import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import Header from "../../components/header/Header";
import OurServices from "../../components/our_services/OurServices";
import Projects from "../../components/projects/Projects";
import ContactForm from "../../components/contact_form/ContactForm";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
    const { t } = useTranslation('common')


  return (
    <>
      <Header
          header_title={t("header.header_title")}
          header_description={t("header.header_description")}
          header_button={t("header.header_button")}
      />
        <OurServices our_services_object={t("our_services", { }, {returnObjects: true})}/>
        <Projects
            project_title={t("our_projects.title")}
            projects_button={t("our_projects.button_title")}
        />
        <ContactForm contact_object={t("contact_form", {}, {returnObjects: true})} display_select_menu={true}/>

    </>
  )
}

