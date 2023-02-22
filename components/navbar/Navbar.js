import Link from "next/link"
import Burger from "./Burger";
import styles from "@/styles/Navbar.module.css"
import {IoIosConstruct} from "react-icons/io"

export default function Navbar({navbar_text}) {
    return (
        <div className={styles.navbarBox}>
            <div className={styles.navbarContainer}>

                <div className={styles.navbarLogo}>
                    <Link href="/">
                        <span>
                            <IoIosConstruct size={30}/>
                            Semarim
                        </span>
                    </Link>

                </div>
                <div className={styles.navbarLinksContainer}>
                    <div className={styles.navbarLinksWrapper}>
                        <Burger navbar_text={navbar_text}/>

                    </div>
                </div>
            </div>
        </div>
    );
}
