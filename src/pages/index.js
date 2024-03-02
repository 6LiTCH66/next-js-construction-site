import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { NextSeo } from "next-seo";
import styles from '@/styles/Home.module.css';

// Import your components
import Header from "../../components/header/Header";
import OurServices from "../../components/our_services/OurServices";
import Projects from "../../components/projects/Projects";
import ContactForm from "../../components/contact_form/ContactForm";

export default function Home() {
    // Use the useTranslation hook from next-i18next
    const { t } = useTranslation('common');
    const title_data = t("our_services", { returnObjects: true });
    const header_des = t("header.header_description");

    const titles = Object.values(title_data).filter(obj => obj.title).map(obj => obj.title);

    const seoData = {
        title: `Semarim - ${titles.join(', ')}`,
        description: `Semarim${header_des}`,
        openGraph: {
            title: `Semarim - ${titles.join(', ')}`,
            description: `Semarim${header_des}`,
        }
    };

    return (
        <>
            <NextSeo {...seoData}/>

            <Header
                header_title={t("header.header_title")}
                header_description={header_des}
                header_button={t("header.header_button")}
            />
            <OurServices our_services_object={title_data}/>
            <Projects
                project_title={t("our_projects.title")}
                projects_button={t("our_projects.button_title")}
            />
            <ContactForm contact_object={t("contact_form", { returnObjects: true })} display_select_menu={true}/>
        </>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}
