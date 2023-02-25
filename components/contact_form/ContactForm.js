import React, {useState} from 'react';
import styles from "@/styles/ContactForm.module.css"

function ContactForm(props) {
    const [name, setName] = useState(" ")
    const [email, setEmail] = useState(" ")
    const [value, setValue] = useState()

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
        <div className={styles.contactContainer}>
            <div className={styles.contactWrapper}>
                <p className={styles.contactInfo}>
                    <i>
                        Cвяжитесь с нами через форму или по номеру +327 555 555 55
                    </i>
                </p>
                <select className={styles.formSelect} defaultValue="DEFAULT" onChange={(e) => setValue(e.target.value)}>
                    <option value="DEFAULT" defaultValue hidden>Пожалуйста выберите</option>
                    <option value="building">Строительство</option>
                    <option value="repair">Ремонт</option>
                    <option value="consultations">Консультации</option>
                </select>

                <div className={styles.contactFormRow}>
                    <div className={styles.inputContainer}>
                        <div className={`${styles.formInput} ${name ? "" : styles.errorHelperText}`}>
                            <input type="text" placeholder="Имя" id="first_name" onChange={nameChange}/>
                            <label htmlFor="first_name" className={styles.required}>Имя</label>
                        </div>
                        {!name ? <p className={styles.errorInput}>Обязательное поле</p> : <></>}

                    </div>
                    <div className={styles.inputContainer}>
                        <div className={`${styles.formInput} ${email ? "" : styles.errorHelperText}`}>
                            <input type="email" placeholder="Э-почта" id="email" onChange={emailChange}/>
                            <label htmlFor="email" className={styles.required} >Э-почта</label>
                        </div>
                        {!email ? <p className={styles.errorInput}>Обязательное поле</p> : <></>}
                    </div>

                </div>
                <div className={styles.contactFormRow}>
                    <div className={styles.formInput}>
                        <input type="tel" placeholder="Телефон" id="telephone"/>
                        <label htmlFor="telephone">Телефон</label>
                    </div>
                    <div className={styles.formInput}>
                        <input type="text" placeholder="Место работы" id="working_place"/>
                        <label htmlFor="working_place">Место работы</label>
                    </div>
                </div>
                <div className={`${styles.formInput} ${styles.contactFormRow}`}>
                    <textarea id={styles.workDescription} rows="5" placeholder="Описание работы"></textarea>
                    <label htmlFor="workDescription" className={styles.textareaLabel}>Описание работы</label>
                </div>

                <div className={styles.formButton}>
                    <button className={styles.sendButton}>
                        Отправить форму
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;