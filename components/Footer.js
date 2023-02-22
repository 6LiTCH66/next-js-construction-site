import { FaFacebookSquare } from 'react-icons/fa';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {BsTelephone} from "react-icons/bs"
import {FiMail} from 'react-icons/fi'
import Link from "next/link"
import styles from "@/styles/Footer.module.css"
function Footer(props) {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerWrapper}>
                <div className={styles.companyVision}>
                    <span className={styles.companyName}>
                        Semarim
                    </span>
                    <span className={styles.companyText}>
                        Есть идея? Свяжитесь с нами, и давайте поговорим об этом.
                    </span>
                </div>
                <div className={styles.companyQuickLinks}>
                    <span className={styles.quickLinksTitle}>
                        Быстрые ссылки:
                    </span>
                    <ul className={styles.footerLinks}>
                        <li>
                            <Link href="/">Главная</Link>
                        </li>
                        <li>
                            <Link href="/terrace-construction">Строительство</Link>
                        </li>
                        <li>
                            <Link href="/floor-resurfacing">Ремонт</Link>
                        </li>
                        <li>
                            <Link href="/consultation">Консультации</Link>
                        </li>
                        <li>
                            <Link href="/">Связвться с нами</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.companyContact}>
                    <span className={styles.contactTitle}>
                        Контакты:
                    </span>
                    <ul className={styles.contactLinks}>
                        <li>
                            <FiMail/> mail@gmail.com
                        </li>
                        <li>
                            <BsTelephone/> +372 555 555 55
                        </li>
                        <li>
                            <HiOutlineLocationMarker/> Таллинн
                        </li>
                    </ul>
                    <div className="footer-social-links">
                        <Link href="#facebook">
                            <FaFacebookSquare color="white" size={30}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;