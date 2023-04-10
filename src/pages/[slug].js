import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import styles from "@/styles/DynamicServices.module.css"
import ContactForm from "../../components/contact_form/ContactForm";
import Link from "next/link"
import {useRouter} from "next/router";
export default function DynamicServices({servicesType}){
    const {t} = useTranslation();
    const router = useRouter();
    const replacedSlug = router.query.slug.replaceAll("-", "_")
    const typesOfWorkArray = Array.from(t(`services.${servicesType}.type_of_work_links`, {returnObjects: true}));

    return(
        <div className={styles.constructionBox}>
            <div className={styles.constructionHeader}>
                <div className={styles.constructionHeaderWrapper}>
                    <p className={styles.constructionHeaderTitle}>
                        {t(`services.${servicesType}.service_title`)}
                    </p>
                    <hr/>
                    <p className={styles.constructionHeaderDescription}>
                        {t(`services.${servicesType}.service_description`)}
                    </p>
                </div>

            </div>

            <div className={styles.constructionContainer}>
                <div className={styles.constructionWrapper}>
                    <div className={styles.workTypesContainer}>
                        <p className={styles.workTypesTitle}>

                            {t(`services.${servicesType}.type_of_work_title`)}
                        </p>
                        <ul className={styles.workTypes}>

                            {typesOfWorkArray.map((link, id) =>{
                                return(
                                    <li key={id}>
                                        <Link href={link.link_url}>
                                            {link.link_title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className={styles.workInfoContainer}>
                        <p className={styles.workInfoTitle}>
                            {t(`services.${servicesType}.${replacedSlug}.title`)}
                        </p>

                        <p className={styles.workInfoText}>

                            {t(`services.${servicesType}.${replacedSlug}.content.cost_title`)}
                        </p>
                        <ul>
                            <li className={styles.workInfoText}>
                                {t(`services.${servicesType}.${replacedSlug}.content.cost_description`)}
                            </li>
                        </ul>
                        <p className={styles.workInfoText} id={styles.workDescription}>
                            {t(`services.${servicesType}.${replacedSlug}.content.content_description`)}
                        </p>
                        <ContactForm contact_object={t("contact_form", {returnObjects: true})} display_select_menu={false}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths({ locales }) {
    const slugsArray = [
        "terrace-construction",
        "canopy-construction",
        "pergola-construction",
        "extensions-construction",
        "woodsheds-construction",
        "warp-bed-construction",
        "floor-resurfacing",
        "renovation-of-wooden-facades",
        "maintenance-repair-terraces",
        "consultation"
    ]

    let paramsArray = []

    locales.map((locale) => {
        slugsArray.map((slug) => {
            paramsArray.push({params: { slug: slug }, locale: locale})
        })
    })

    return {
        paths: paramsArray,
        fallback: false,
    }
}
function getServicesType(pagePath){
    const constructionArray = [
        "terrace-construction",
        "canopy-construction",
        "pergola-construction",
        "extensions-construction",
        "woodsheds-construction",
        "warp-bed-construction"
    ]

    const repairArray = [
        "floor-resurfacing",
        "renovation-of-wooden-facades",
        "maintenance-repair-terraces"
    ]

    const consultationArray = [
        "consultation"
    ]

    if (constructionArray.includes(pagePath)){
        return "construction"
    }
    if (repairArray.includes(pagePath)){
        return "repair"
    }
    if (consultationArray.includes(pagePath)){
        return "consultation"
    }

}
export async function getStaticProps({ locale, params }) {
    const pagePath = params.slug;
    const serviceType = getServicesType(pagePath)

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            servicesType: serviceType
        },
    };
}