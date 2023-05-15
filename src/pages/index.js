import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import Header from "../../components/header/Header";
import OurServices from "../../components/our_services/OurServices";
import Projects from "../../components/projects/Projects";
import ContactForm from "../../components/contact_form/ContactForm";
import useTranslation from "next-translate/useTranslation";
import {NextSeo} from "next-seo";

export default function Home() {
    const { t } = useTranslation('common')
    const title_data = t("our_services", { }, {returnObjects: true});
    const header_des = t("header.header_description")

    const data = JSON.parse(JSON.stringify(title_data));
    const titles = Object.values(data).filter(obj => obj.title).map(obj => obj.title);

    console.log(header_des)

    const seoData = {
        title: `Semarim - ${titles.toString()}`,
        description: `Semarim${header_des}`,
        openGraph: {
            title: `Semarim - ${titles.toString()}`,
            description: `Semarim${header_des}`,
            // images: [
            //     {
            //         url: 'https://example.com/terrace-construction.jpg', // Replace with the actual image URL
            //         alt: 'Terrace Construction',
            //     },
            // ],
        },
        keywords: titles.toString()
    };

  return (
    <>
        <NextSeo {...seoData}/>
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

