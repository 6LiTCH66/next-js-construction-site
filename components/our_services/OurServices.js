import Link from "next/link"
import Image from "next/image";
import construction_work from "../../public/assets/construction.jpg"
import repair_work from "../../public/assets/repair.jpg"
import consultation from "../../public/assets/consultation.jpg"
import styles from "@/styles/OurService.module.css"

export default function OurServices({our_services_object}){
    return (
        <section className={styles.servicesContainer}>
            <div className={styles.servicesContentHeader}>
                <h5 className={styles.servicesContentTitle}>
                    {our_services_object.title}
                </h5>
                <h4 className={styles.servicesContentDescription}>
                    {our_services_object.description}
                </h4>

            </div>
            <div className={styles.servicesContentBody}>

                <div className={styles.servicesContentWrapper} id={styles.construction_work}>
                    <div className={styles.servicesContentWrapperImage}>
                        <Image src={construction_work} alt="construction work"
                               style={{
                                   width: "100%",
                                   height: "auto",
                                   objectFit: "cover",
                                   maxHeight: "100%",
                                   maxWidth: "470px"
                               }}/>
                    </div>
                    <div className={styles.servicesContentWrapperContent}>
                        <h6 className={styles.servicesContentWrapperTitle}>
                            {our_services_object.construction.title}
                        </h6>
                        <h6 className={styles.servicesContentWrapperDescription}>
                            {our_services_object.construction.description}
                        </h6>
                        <Link href="/terrace-construction" className={styles.servicesContentButton}>
                            {our_services_object.button_text}
                        </Link>
                    </div>
                </div>



                <div className={styles.servicesContentWrapper} id={styles.repair_work}>
                    <div className={styles.servicesContentWrapperImage} id={styles.repairWorkImage}>
                        <Image src={repair_work} alt="repair work" style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            maxHeight: "100%",
                            maxWidth: "470px"
                        }}/>
                    </div>
                    <div className={styles.servicesContentWrapperContent}>
                        <h6 className={styles.servicesContentWrapperTitle}>
                            {our_services_object.repair.title}
                        </h6>
                        <h6 className={styles.servicesContentWrapperDescription}>
                            {our_services_object.repair.description}
                        </h6>
                        <Link href="floor-resurfacing" className={styles.servicesContentButton}>
                            {our_services_object.button_text}
                        </Link>
                    </div>
                </div>


                <div className={styles.servicesContentWrapper} id={styles.consultation_work}>
                    <div className={styles.servicesContentWrapperImage}>
                        <Image src={consultation} alt="consultation" style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            maxHeight: "100%",
                            maxWidth: "470px"
                        }}/>
                    </div>
                    <div className={styles.servicesContentWrapperContent}>
                        <h6 className={styles.servicesContentWrapperTitle}>
                            {our_services_object.consultation.title}
                        </h6>
                        <h6 className={styles.servicesContentWrapperDescription}>
                            {our_services_object.consultation.description}
                        </h6>
                        <Link href="consultation" className={styles.servicesContentButton}>
                            {our_services_object.button_text}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}