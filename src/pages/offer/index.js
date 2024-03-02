import styles from "@/styles/Offer.module.css"
import ContactForm from "../../../components/contact_form/ContactForm";
import { useTranslation } from 'next-i18next';
import {NextSeo} from "next-seo";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export default function Offer(props) {
    const {t} = useTranslation("common")


    const seoData = {
        title: t("offer.title"),
        description: t("contact_form.contact_info"),
        openGraph: {
            title: t("offer.title"),
            description: t("contact_form.contact_info"),

        },
    };

    return (
        <div className={styles.offerBox}>
            <NextSeo {...seoData}/>
            <div className={styles.offerHeader}>
                <div className={styles.offerHeaderWrapper}>
                    <p className={styles.offerTitle}>
                        {t("offer.title")}
                    </p>


                </div>

            </div>
            <div className={styles.offerContainer}>
                <div className={styles.offerWrapper}>
                    <ContactForm contact_object={t("contact_form", {returnObjects: true})} display_select_menu={true}/>
                </div>

            </div>

        </div>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}

