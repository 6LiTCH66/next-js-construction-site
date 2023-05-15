import styles from "@/styles/ContactPage.module.css"
import stylesForm from "@/styles/ContactForm.module.css"
import React, {useState} from "react";
import useTranslation from "next-translate/useTranslation";
import {NextSeo} from "next-seo";

export default function Contact() {
    const { t } = useTranslation("common");
    const [name, setName] = useState(" ")
    const [email, setEmail] = useState(" ")

    const seoData = {
        title: t("contact.title"),
        description: t("contact.description"),
        openGraph: {
            title: t("contact.title"),
            description: t("contact.description"),
            // images: [
            //     {
            //         url: 'https://example.com/terrace-construction.jpg', // Replace with the actual image URL
            //         alt: 'Terrace Construction',
            //     },
            // ],
        },
    };

    const nameChange = event =>{
        setName(event.target.value);

        if (event.target.value.trim().length > 0){
            console.log('✅ Input is not empty');
        }else{
            console.log('⛔️ Input is empty');
        }
    }
    const emailChange = event =>{
        setEmail(event.target.value);

        if (event.target.value.trim().length > 0){
            console.log('✅ Input is not empty');
        }else{
            console.log('⛔️ Input is empty');
        }
    }
    return (
        <div className={styles.contactUsBox}>
            <NextSeo {...seoData}/>
            <div className={styles.contactUsHeader}>
                <div className={styles.contactUsHeaderWrapper}>
                    <p className={styles.contactUsTitle}>{t("contact.title")}</p>
                    <hr/>
                    <p className={styles.contactUsDescription}>
                        {t("contact.description")}
                    </p>
                </div>
            </div>
            <div className={styles.contactUsContainer}>
                <div className={styles.contactUsWrapper}>
                    <div className={styles.contactUsForm}>
                        <p className={`${styles.contactUsInfoTitle} ${styles.mobile}`}>
                            {t("contact.info_title")}
                        </p>
                        <div className={stylesForm.inputContainer}>
                            <div className={`${stylesForm.formInput} ${name ? "" : stylesForm.errorHelperText}`}>
                                <input type="text" placeholder={t("contact_form.name_input")} id="first_name" onChange={nameChange}/>
                                <label htmlFor="first_name" className={stylesForm.required}>{t("contact_form.name_input")}</label>
                            </div>
                            {!name ? <p className={stylesForm.errorInput}>Обязательное поле</p> : <></>}

                        </div>
                        <div className={stylesForm.inputContainer} style={{marginTop: "40px"}}>
                            <div className={`${stylesForm.formInput} ${email ? "" : stylesForm.errorHelperText}`}>
                                <input type="email" placeholder={t("contact_form.email_input")} id="email" onChange={emailChange}/>
                                <label htmlFor="email" className={stylesForm.required}>{t("contact_form.email_input")}</label>
                            </div>
                            {!email ? <p className={stylesForm.errorInput}>Обязательное поле</p> : <></>}
                        </div>

                        <div className={`${stylesForm.formInput} ${stylesForm.contactFormRow}`}>
                            <textarea id={stylesForm.workDescription} rows="5" placeholder={t("contact_form.work_description_input")}></textarea>
                            <label htmlFor="workDescription" className={stylesForm.textareaLabel}>{t("contact_form.work_description_input")}</label>
                        </div>

                        <div className={stylesForm.formButton}>
                            <button className={stylesForm.sendButton}>
                                {t("contact_form.projects_button")}
                            </button>
                        </div>

                    </div>

                    <div className={styles.contactUsInfo}>
                        <p className={styles.contactUsInfoTitle}>
                            {t("contact.info_title")}
                        </p>
                        <div className={styles.contactUsTextContainer}>
                            <h2 className={`${styles.contactUsCompany} ${styles.contactUsText}`}>
                                SEMARIM OÜ
                                <br/>
                                Registrikood: 14439231
                            </h2>
                            <h2 className={styles.contactUsText}>
                                {t("contact.email")} <a href="mailto:rimgor@yandex.ru">rimgor@yandex.ru</a>
                                <br/>
                                {t("contact.telephone")} <a href="tel:+37258491096">+372 58491096</a>
                            </h2>
                            <h2 className={styles.contactUsText}>
                                Harju maakond, Maardu linn, Veeru tn 16-37, 74113
                            </h2>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}


