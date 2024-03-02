import styles from "@/styles/DynamicServices.module.css"
import ContactForm from "../../components/contact_form/ContactForm";
import Link from "next/link"
import {useRouter} from "next/router";
import {NextSeo} from "next-seo";

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export default function DynamicServices({services, locale}){
    const {t} = useTranslation("common");
    const router = useRouter();
    const replacedSlug = router.query.slug.replaceAll("-", "_")

    const seoData = {
        title: services[replacedSlug].title,
        description: services[replacedSlug].content.content_description,
        canonical: `https://www.semarim.ee/${locale}`,
        openGraph: {
            title: services[replacedSlug].title,
            description: services[replacedSlug].content.content_description,
            url: `https://www.semarim.ee/${locale}`

        },
    };

    return(
        <>
            <NextSeo {...seoData}/>
            <header className={styles.constructionHeader}>
                <div className={styles.constructionHeaderWrapper}>
                    <h1 className={styles.constructionHeaderTitle}>
                        {services.service_title}
                    </h1>
                    <hr/>
                    <h4 className={styles.constructionHeaderDescription}>
                        {services.service_description}
                    </h4>
                </div>
            </header>

            <div className={styles.constructionContainer}>
                <div className={styles.constructionWrapper}>
                    <aside className={styles.workTypesContainer}>
                        <h5 className={styles.workTypesTitle}>

                            {services.type_of_work_title}
                        </h5>
                        <ul className={styles.workTypes}>

                            {services.type_of_work_links.map((link, id) =>{
                                return(
                                    <li key={id}>
                                        <Link href={link.link_url}>
                                            {link.link_title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </aside>

                    <div className={styles.workInfoContainer}>
                        <h1 className={styles.workInfoTitle}>
                            {services[replacedSlug].title}
                        </h1>

                        <h6 className={styles.workInfoText}>
                            {services[replacedSlug].content.cost_title}
                        </h6>
                        <ul>
                            <li className={styles.workInfoText}>
                                {services[replacedSlug].content.cost_description}
                            </li>
                        </ul>
                        <h5 className={styles.workInfoText} id={styles.workDescription}>
                            {services[replacedSlug].content.content_description}
                        </h5>
                        <ContactForm contact_object={t("contact_form", {returnObjects: true})} display_select_menu={false}/>
                    </div>
                </div>
            </div>
        </>
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

export const getStaticProps = async ({ locale, params }) => {
    const pagePath = params.slug;
    const serviceType = getServicesType(pagePath);
    const services = {...(await serverSideTranslations(locale, ['common']))._nextI18Next.initialI18nStore[locale].common.services[serviceType]}

    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            services: services,
            locale: `${locale === "ru" ? "" : `${locale}/`}${pagePath}`
        }
    };
};

