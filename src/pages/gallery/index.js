import React, {useState, useEffect} from "react";
import Image from "next/image"
import fetchAllImages from "../../../utils/getImages"
import styles from "@/styles/Projects.module.css";
import someImage from "../../../public/assets/consultation.jpg"
import { useTranslation } from 'next-i18next';
import {NextSeo} from "next-seo";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export default function Gallery(){
    const [images, setImages] = useState([])
    const [imageId, setImageId] = useState()
    const [openModal, setOpenModal] = useState(false)

    const {t} = useTranslation("common")

    const gallery_title = t("navbar.gallery", {returnObjects: true})
    const gallery_desc = t("gallery.title", {returnObjects: true})

    const seoData = {
        title: gallery_title,
        description: gallery_desc,
        openGraph: {
            title: gallery_title,
            description: gallery_desc,

        },
    };

    useEffect(() => {
        const images = fetchAllImages()

        setImages(images)
    }, []);

    const getImageId = (imageId) =>{
        setImageId(imageId)
        setOpenModal(true)
    }

    return (
        <>
            <NextSeo {...seoData}/>
            <div className={styles.projectsContainer}>
                <div className={styles.projectsContainerText}>
                <span className={styles.projectsTitle}>
                    {t("gallery.title")}
                </span>
                </div>
                <div className={styles.projectsImageContainer}>
                    {images.map((image, key) => (
                        <div className={styles.imageWrapper} key={key}>
                            <Image src={image} alt="image" className={styles.projectsImage} onClick={() => getImageId(key)}/>
                        </div>
                    ))}
                </div>
            </div>

            <div id={styles.myModal} className={styles.modal} style={{display: openModal ? "block" : "none"}} onClick={() => setOpenModal(false)}>
                <span className={styles.close} onClick={() => setOpenModal( false)}>×</span>
                <Image src={imageId ? images[imageId] : someImage } alt="modal image" className={styles.modalContent}/>
            </div>
        </>

    )
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}