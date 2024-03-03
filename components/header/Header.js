import header_image from "../../public/assets/header-vector.svg"
import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/Header.module.css'

function Header({header_title, header_description, header_button}) {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerWrapper}>
                <div className={styles.headerContent}>
                    <h6 className={styles.headerContentTitle}>
                        {header_title}
                    </h6>
                    <h3 className={styles.headerContentDescription}>
                        <span className={styles.headerContentCompany}>Semarim</span>
                        {header_description}
                    </h3>

                    <Link href="/offer" className={styles.headerContentButton}>{header_button}</Link>

                </div>
                <div className={styles.headerImage}>
                    <Image src={header_image} priority={true} alt="Header image" layout="responsive"/>
                </div>
            </div>
        </header>
    );
}


export default Header;