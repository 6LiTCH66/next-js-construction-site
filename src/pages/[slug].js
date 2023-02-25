import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import styles from "@/styles/DynamicServices.module.css"
import ContactForm from "../../components/contact_form/ContactForm";
import Link from "next/link"
import {useRouter} from "next/router";
export default function DynamicServices(){
    const {t} = useTranslation();
    const router = useRouter();
    const replacedSlug = router.query.slug.replace("-", "_")
    const typesOfWorkArray = Array.from(t(`services.${replacedSlug}.type_of_work_links`, {returnObjects: true}));

    return(
        <div className={styles.constructionBox}>
            <div className={styles.constructionHeader}>
                <div className={styles.constructionHeaderWrapper}>
                    <p className={styles.constructionHeaderTitle}>
                        {/*{props.service_title}*/}
                        {t(`services.${replacedSlug}.service_title`)}
                    </p>
                    <hr/>
                    <p className={styles.constructionHeaderDescription}>
                        {/*{props.service_description}*/}
                        {t(`services.${replacedSlug}.service_description`)}
                    </p>
                </div>

            </div>

            <div className={styles.constructionContainer}>
                <div className={styles.constructionWrapper}>
                    <div className={styles.workTypesContainer}>
                        <p className={styles.workTypesTitle}>

                            {/*{props.type_of_work_title}*/}
                            {t(`services.${replacedSlug}.type_of_work_title`)}
                        </p>
                        <ul className={styles.workTypes}>
                            {/*{props.type_of_work_content.map((link, id) =>(*/}
                            {/*    <li key={id}>*/}
                            {/*        <Link href={link.link_url}>*/}
                            {/*            {link.link_title}*/}
                            {/*        </Link>*/}
                            {/*    </li>*/}
                            {/*))}*/}
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
                            {/*{props.title}*/}
                            {t(`services.${replacedSlug}.title`)}
                        </p>

                        <p className={styles.workInfoText}>
                            {/*{props.service_content.cost_title}*/}

                            {t(`services.${replacedSlug}.content.cost_title`)}
                        </p>
                        <ul>
                            <li className={styles.workInfoText}>
                                {/*{props.service_content.cost_description}*/}
                                {t(`services.${replacedSlug}.content.cost_description`)}
                            </li>
                        </ul>
                        <p className={styles.workInfoText} id={styles.workDescription}>
                            {/*{props.service_content.content_description}*/}
                            {t(`services.${replacedSlug}.content.content_description`)}
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
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"]))
        },
    };
}