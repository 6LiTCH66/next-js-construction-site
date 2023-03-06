import styles from "@/styles/Offer.module.css"
import ContactForm from "../../../components/contact_form/ContactForm";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

export default function Offer(props) {
    const {t} = useTranslation()
    return (
        <div className={styles.offerBox}>

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
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}

