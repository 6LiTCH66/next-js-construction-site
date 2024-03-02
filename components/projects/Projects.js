import React, {useEffect, useState} from 'react';
import Link from "next/link"
import styles from "@/styles/Projects.module.css"
import Image from "next/image"
import fetchAllImages from "../../utils/getImages"

function Projects({project_title, projects_button}) {
    const [images, setImages] = useState([])

    useEffect(() => {
        const images = fetchAllImages()

        setImages(images)
    }, [])

    return (
        <section className={styles.projectsContainer}>
            <div className={styles.projectsContainerText}>
                <h6 className={styles.projectsTitle}>
                    {project_title}
                </h6>
            </div>
            <div className={styles.projectsImageContainer}>
                {images.slice(0, 6).map((image, key) => (
                    <div className={styles.imageWrapper} key={key}>
                        <Image src={image} alt="image" className={styles.projectsImage}/>
                    </div>
                ))}
            </div>
            <Link href="/gallery" className={styles.projectsButton}>{projects_button}</Link>

        </section>
    );
}

export default Projects;