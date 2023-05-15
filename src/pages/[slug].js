import styles from "@/styles/DynamicServices.module.css"
import ContactForm from "../../components/contact_form/ContactForm";
import Link from "next/link"
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";
import getT from "next-translate/getT";
import Head from 'next/head'
import {NextSeo} from "next-seo";

export default function DynamicServices({services}){
    const {t} = useTranslation("common");
    const router = useRouter();
    const replacedSlug = router.query.slug.replaceAll("-", "_")

    const seoData = {
        title: services[replacedSlug].title,
        description: services[replacedSlug].content.content_description,
        openGraph: {
            title: services[replacedSlug].title,
            description: services[replacedSlug].content.content_description,
            // images: [
            //     {
            //         url: 'https://example.com/terrace-construction.jpg', // Replace with the actual image URL
            //         alt: 'Terrace Construction',
            //     },
            // ],
        },
    };


    return(
        <div className={styles.constructionBox}>

            {/*<Head>*/}
            {/*    <title>{services.service_title} - {services[replacedSlug].title}</title>*/}
            {/*    <meta name="description" content={services.service_description} />*/}
            {/*    <meta property="og:title" content={services.service_title} />*/}
            {/*    <meta property="og:description" content={services.service_description} />*/}
            {/*    <meta property="og:url" content={`https://www.semarim.ee/${router.query.slug}`} />*/}
            {/*    <meta property="og:type" content="website" />*/}
            {/*</Head>*/}

            <NextSeo {...seoData}/>

            <div className={styles.constructionHeader}>
                <div className={styles.constructionHeaderWrapper}>
                    <p className={styles.constructionHeaderTitle}>
                        {services.service_title}
                    </p>
                    <hr/>
                    <p className={styles.constructionHeaderDescription}>
                        {services.service_description}
                    </p>
                </div>

            </div>

            <div className={styles.constructionContainer}>
                <div className={styles.constructionWrapper}>
                    <div className={styles.workTypesContainer}>
                        <p className={styles.workTypesTitle}>

                            {services.type_of_work_title}
                        </p>
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
                    </div>

                    <div className={styles.workInfoContainer}>
                        <p className={styles.workInfoTitle}>
                            {services[replacedSlug].title}
                        </p>

                        <p className={styles.workInfoText}>

                            {services[replacedSlug].content.cost_title}
                        </p>
                        <ul>
                            <li className={styles.workInfoText}>
                                {services[replacedSlug].content.cost_description}
                            </li>
                        </ul>
                        <p className={styles.workInfoText} id={styles.workDescription}>
                            {services[replacedSlug].content.content_description}
                        </p>
                        <ContactForm contact_object={t("contact_form", {}, {returnObjects: true})} display_select_menu={false}/>
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

export const getStaticProps = async ({ locale, params }) => {
    const pagePath = params.slug;
    const serviceType = getServicesType(pagePath)

    const t = await getT(locale, 'common')
    return { props: { services: t(`services.${serviceType}`, {}, {returnObjects: true}) } }
}
