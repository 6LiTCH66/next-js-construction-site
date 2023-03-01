import React, {useState, useEffect} from "react";
import Image from "next/image"
import fetchAllImages from "../../../utils/getImages"
import styles from "@/styles/Projects.module.css";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import someImage from "../../../public/assets/consultation.jpg"
export default function Gallery(){
    const [images, setImages] = useState([])
    const [selectedImage, setSelectedImage] = useState(someImage)
    useEffect(() => {
        const images = fetchAllImages()

        setImages(images)
    }, []);
    const getSrc = (event) =>{
        event.preventDefault();
        setSelectedImage(event.target.src)
        console.log(event.target.src)
    }

    return (
        <>
            <div className={styles.projectsContainer}>
                <div className={styles.projectsContainerText}>
                <span className={styles.projectsTitle}>
                    Наши сделанные проекты
                </span>
                </div>
                <div className={styles.projectsImageContainer}>
                    {images.map((image, key) => (
                        <div className={styles.imageWrapper} key={key}>
                            <Image src={image} alt="image" className={styles.projectsImage} onClick={getSrc}/>
                        </div>
                    ))}
                </div>
            </div>

            <div id={styles.myModal} className={styles.modal}>
                <span className={styles.close}>×</span>
                <Image src={images[16]} alt="image" className={styles.modalContent}/>
            </div>
        </>

    )
}

export async function getStaticProps({ locale }) {

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}