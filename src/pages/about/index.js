import {useTranslation} from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from "@/styles/About.module.css";
import {NextSeo} from "next-seo";
import React, {useEffect} from "react";
import VideoPlayer from "../../../components/video_player/VideoPlayer";

export default function About(){
    const { t } = useTranslation("common");


    // const seoData = {
    //     title: t("contact.title"),
    //     description: t("contact.description"),
    //     openGraph: {
    //         title: t("contact.title"),
    //         description: t("contact.description"),
    //
    //     },
    // };
    useEffect(() => {
    }, []);

    return (
        <div className={styles.aboutUsBox}>
            {/*<NextSeo {...seoData}/>*/}

            <div className={styles.aboutUsHeader}>
                <div className={styles.aboutUsHeaderWrapper}>
                    <p className={styles.aboutUsTitle}>{t("about.title")}</p>
                    <hr/>
                    <p className={styles.aboutUsDescription}>
                        {t("about.description")}
                    </p>
                </div>
            </div>

            <div className={styles.aboutUsContainer}>
                <div className={styles.aboutUsWrapper}>
                    <div style={{textAlign: "center", marginBottom: "1rem"}}>
                        <h1>{t("about.whoWeAreTitle")}</h1>
                    </div>
                    <div className={styles.aboutUsVideoContainer}>
                        <VideoPlayer filename={"Semarim1_final.mp4"}/>
                        <div className={styles.videoPlayerText}>
                            <h3>{t("about.videoText1")}
                                <br/>
                                <br/>
                                {t("about.videoText2")}
                                <br/>
                                {t("about.videoText3")}

                            </h3>
                        </div>
                    </div>
                    <div style={{textAlign: "center", marginBottom: "1rem", marginTop: '3rem'}}>
                        <h1>{t("about.whyClientChooseUsTitle")}</h1>
                    </div>
                    <div className={styles.aboutUsVideoContainer}
                         style={{marginTop: "1rem", padding: "1rem"}}>

                        <div className={styles.videoPlayerText}>
                            <b>{t("about.whyChooseUsTitle")}</b>
                            <ul>
                                <li><b>{t("about.experience.title")}</b> {t("about.experience.description")}
                                </li>
                                <li><b>{t("about.individualApproach.title")}</b> {t("about.individualApproach.description")}
                                </li>
                                <li><b>{t("about.highQuality.title")}</b> {t("about.highQuality.description")}
                                </li>
                            </ul>
                        </div>

                        <div className={styles.videoPlayerText}>
                            <b>{t("about.ourServicesTitle")}</b>
                            <ul>
                                <li><b>{t("about.terracesAndCanopies.title")}</b> {t("about.terracesAndCanopies.description")}
                                </li>
                                <li><b>{t("about.pergolasAndExtensions.title")}</b> {t("about.pergolasAndExtensions.description")}
                                </li>
                                <li><b>{t("about.woodshedsAndSheds.title")}</b> {t("about.woodshedsAndSheds.description")}
                                </li>
                                <li><b>{t("about.warmBeds.title")}</b> {t("about.warmBeds.description")}
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps({locale}) {

    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}
