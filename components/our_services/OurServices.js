import Link from "next/link"
import Image from "next/image";
import construction_work from "../../public/assets/construction.jpg"
import repair_work from "../../public/assets/repair.jpg"
import consultation from "../../public/assets/consultation.jpg"
import styles from "@/styles/OurService.module.css"

export default function OurServices(){
    return (
        <div className={styles.servicesContainer}>
            <div className={styles.servicesContentHeader}>
                <span className={styles.servicesContentTitle}>
                    Наши услуги
                    {/*{ru.our_services.title}*/}
                </span>
                <span className={styles.servicesContentDescription}>
                    Наша компания предлагает широкий спектр строительных услуг для клиентов, желающих провести строительные или ремонтные работы.
                    {/*{ru.our_services.description}*/}
                </span>

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
                        <span className={styles.servicesContentWrapperTitle}>
                            Строительство
                            {/*{ru.our_services.construction.title}*/}
                        </span>
                        <span className={styles.servicesContentWrapperDescription}>
                            Мы предоставляем услуги по строительству терасс, навесов, перголы, пристроек, дровников - сараев и устройство тёплых грядок.
                            {/*{ru.our_services.construction.description}*/}
                        </span>
                        <Link href="/terrace-construction" className={styles.servicesContentButton}>
                            Узнать больше
                            {/*{ru.our_services.button_text}*/}
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
                        <span className={styles.servicesContentWrapperTitle}>
                            Ремонт
                            {/*{ru.our_services.repair.title}*/}
                        </span>
                        <span className={styles.servicesContentWrapperDescription}>
                            Наша компания предлагает профессиональные услуги по ремонту и реставрации полов, деревянных фасадов и террас.
                            {/*{ru.our_services.repair.description}*/}
                        </span>
                        <Link href="floor-resurfacing" className={styles.servicesContentButton}>
                            Узнать больше
                            {/*{ru.our_services.button_text}*/}
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
                        <span className={styles.servicesContentWrapperTitle}>
                            Консультация
                            {/*{ru.our_services.consultation.title}*/}
                        </span>
                        <span className={styles.servicesContentWrapperDescription}>
                            С удовольствием предоставляем Вам бесплатную консультацию. Наши специалисты готовы помочь Вам с решением любой проблемы. Задавайте вопросы и получайте качественные ответы.
                            {/*{ru.our_services.consultation.description}*/}
                        </span>
                        <Link href="consultation" className={styles.servicesContentButton}>
                            Узнать больше
                            {/*{ru.our_services.button_text}*/}
                        </Link>
                    </div>
                </div>



            </div>
        </div>
    )
}