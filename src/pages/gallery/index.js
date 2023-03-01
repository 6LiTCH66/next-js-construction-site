import React, {useState, useEffect} from "react";
import Image from "next/image"
import fetchAllImages from "../../../utils/getImages"
import styles from "@/styles/Projects.module.css";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import someImage from "../../../public/assets/consultation.jpg"
export default function Gallery(){
    const [images, setImages] = useState([])
    const [imageId, setImageId] = useState()
    const [openModal, setOpenModal] = useState(false)
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
            <div className={styles.projectsContainer}>
                <div className={styles.projectsContainerText}>
                <span className={styles.projectsTitle}>
                    Наши сделанные проекты
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
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}