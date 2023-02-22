import header_image from "../../public/assets/header-vector.svg"
import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/Header.module.css'

function Header({header_title, header_description, header_button}) {

    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerWrapper}>
                <div className={styles.headerContent}>
                    <span className={styles.headerContentTitle}>
                        {header_title}
                    </span>
                    <span className={styles.headerContentDescription}>
                        <span className={styles.headerContentCompany}>Semarim</span>
                        {header_description}
                    </span>

                    <Link href="/offer" className={styles.headerContentButton}>{header_button}</Link>

                </div>
                <div className={styles.headerImage}>
                    <Image src={header_image} alt="Header image" layout="responsive"/>
                </div>
            </div>
        </div>
    );
}
// export const getServerSideProps = async ({ locale }) => ({
//     props: {
//         ...(await serverSideTranslations(locale, ['common'])),
//     },
// })

export default Header;