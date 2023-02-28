import React, {useState, useEffect} from "react";
import Image from "next/image"
import fetchAllImages from "../../../utils/getImages"
import styles from "@/styles/Projects.module.css";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
export default function Gallery(){
    const [images, setImages] = useState([])

    useEffect(() => {
        const images = fetchAllImages()

        setImages(images)
    }, []);


    return (
        <div className={styles.projectsContainer}>
            <div className={styles.projectsContainerText}>
                <span className={styles.projectsTitle}>
                    Наши сделанные проекты
                </span>
            </div>
            <div className={styles.projectsImageContainer}>
                {images.map((image, key) => (
                    <div className={styles.imageWrapper} key={key}>
                        <Image src={image} alt="image" className={styles.projectsImage}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export async function getStaticProps({ locale }) {

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}