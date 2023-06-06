import { FaFacebookSquare } from 'react-icons/fa';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {BsTelephone} from "react-icons/bs"
import {FiMail} from 'react-icons/fi'
import Link from "next/link"
import styles from "@/styles/Footer.module.css"
function Footer({footer_text}) {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerWrapper}>
                <div className={styles.companyVision}>
                    <span className={styles.companyName}>
                        Semarim
                    </span>
                    <span className={styles.companyText}>
                        {footer_text.company_text}
                    </span>
                </div>
                <div className={styles.companyQuickLinks}>
                    <span className={styles.quickLinksTitle}>
                        {footer_text.quick_links}
                    </span>
                    <ul className={styles.footerLinks}>
                        <li>
                            <Link href="/">{footer_text.home_link}</Link>
                        </li>
                        <li>
                            <Link href="/terrace-construction">{footer_text.construction_link}</Link>
                        </li>
                        <li>
                            <Link href="/floor-resurfacing">{footer_text.repair_link}</Link>
                        </li>
                        <li>
                            <Link href="/consultation">{footer_text.consultation_link}</Link>
                        </li>
                        <li>
                            <Link href="/">{footer_text.contact_us_link}</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.companyContact}>
                    <span className={styles.contactTitle}>
                        {footer_text.contacts}
                    </span>
                    <ul className={styles.contactLinks}>
                        <li>
                            <Link href="mailto: info.semarim@gmail.com">
                                <FiMail/> info.semarim@gmail.com
                            </Link>

                        </li>
                        <li>
                            <Link href="tel:+37258491096">
                                <BsTelephone/> +372 584 910 96
                            </Link>

                        </li>
                        <li>
                            <HiOutlineLocationMarker/> {footer_text.city_name}
                        </li>
                    </ul>
                    <div className="footer-social-links">
                        <Link href="https://www.facebook.com/profile.php?id=100068329059742" target="_blank">
                            <FaFacebookSquare color="white" size={30}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;