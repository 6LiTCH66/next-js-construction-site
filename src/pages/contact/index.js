import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import styles from "@/styles/ContactPage.module.css"
import stylesForm from "@/styles/ContactForm.module.css"
import React, {useState} from "react";

export default function Contact() {
    const [name, setName] = useState(" ")
    const [email, setEmail] = useState(" ")

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
            <div className={styles.contactUsHeader}>
                <div className={styles.contactUsHeaderWrapper}>
                    <p className={styles.contactUsTitle}>Kонтакты</p>
                    <hr/>
                    <p className={styles.contactUsDescription}>Свяжитесь с нами и получите бесплатную профессиональную консультацию по всем строительным вопросам.</p>
                </div>
            </div>
            <div className={styles.contactUsContainer}>
                <div className={styles.contactUsWrapper}>
                    <div className={styles.contactUsForm}>
                        <p className={`${styles.contactUsInfoTitle} ${styles.mobile}`}>Вы можете связаться с нами, позвонив или отправив сообщение.</p>
                        <div className={stylesForm.inputContainer}>
                            <div className={`${stylesForm.formInput} ${name ? "" : stylesForm.errorHelperText}`}>
                                <input type="text" placeholder="Имя" id="first_name" onChange={nameChange}/>
                                <label htmlFor="first_name" className={stylesForm.required}>Имя</label>
                            </div>
                            {!name ? <p className={stylesForm.errorInput}>Обязательное поле</p> : <></>}

                        </div>
                        <div className={stylesForm.inputContainer} style={{marginTop: "40px"}}>
                            <div className={`${stylesForm.formInput} ${email ? "" : stylesForm.errorHelperText}`}>
                                <input type="email" placeholder="Э-почта" id="email" onChange={emailChange}/>
                                <label htmlFor="email" className={stylesForm.required}>Э-почта</label>
                            </div>
                            {!email ? <p className={stylesForm.errorInput}>Обязательное поле</p> : <></>}
                        </div>

                        <div className={`${stylesForm.formInput} ${stylesForm.contactFormRow}`}>
                            <textarea id={stylesForm.workDescription} rows="5" placeholder="Описание работы"></textarea>
                            <label htmlFor="workDescription" className="textarea-label">Описание работы</label>
                        </div>

                        <div className={stylesForm.formButton}>
                            <button className={stylesForm.sendButton}>
                                Отправить форму
                            </button>
                        </div>

                    </div>

                    <div className={styles.contactUsInfo}>
                        <p className={styles.contactUsInfoTitle}>Вы можете связаться с нами, позвонив или отправив сообщение.</p>
                        <div className={styles.contactUsTextContainer}>
                            <h2 className={`${styles.contactUsCompany} ${styles.contactUsText}`}>
                                SEMARIM OÜ
                                <br/>
                                Registrikood: 14439231
                            </h2>
                            <h2 className={styles.contactUsText}>
                                Э-почта: <a href="mailto:rimgor@yandex.ru">rimgor@yandex.ru</a>
                                <br/>
                                Tелефон: <a href="tel:+37258491096">+372 58491096</a>
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

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}

