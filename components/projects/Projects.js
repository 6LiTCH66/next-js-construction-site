import React, {useEffect, useState} from 'react';
import Link from "next/link"
import styles from "@/styles/Projects.module.css"
import Image from "next/image"


const fetchAllImages = () => {
    const imagePaths = require.context("../../public/assets/our_work_images", true)
    const imagesArray = [];

    imagePaths.keys().forEach(image => {
        const imgPath = imagePaths(image);
        imagesArray.push(imgPath);
    });
    return imagesArray
}

function Projects(props) {
    const [images, setImages] = useState([])

    useEffect(() => {
        const images = fetchAllImages()

        setImages(images)
    }, [])

    return (
        <div className={styles.projectsContainer}>
            <div className={styles.projectsContainerText}>
                <span className={styles.projectsTitle}>
                    Наши работы
                </span>
            </div>
            <div className={styles.projectsImageContainer}>
                {images.slice(0, 6).map((image, key) => (
                    <div className={styles.imageWrapper} key={key}>
                        <Image src={image} alt="image" className={styles.projectsImage}/>
                    </div>
                ))}
            </div>
            <Link href="#" className={styles.projectsButton}>Показать больше</Link>

        </div>
    );
}

export default Projects;