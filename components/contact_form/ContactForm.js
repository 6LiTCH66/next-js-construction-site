import React, {useState} from 'react';
import styles from "@/styles/ContactForm.module.css"

function ContactForm({contact_object}) {
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
                        {contact_object.contact_info}
                    </i>
                </p>
                <select className={styles.formSelect} defaultValue="DEFAULT" onChange={(e) => setValue(e.target.value)}>
                    <option value="DEFAULT" defaultValue hidden>{contact_object.section_from.title}</option>
                    <option value="building">{contact_object.section_from.construction}</option>
                    <option value="repair">{contact_object.section_from.repair}</option>
                    <option value="consultations">{contact_object.section_from.consultation}</option>
                </select>

                <div className={styles.contactFormRow}>
                    <div className={styles.inputContainer}>
                        <div className={`${styles.formInput} ${name ? "" : styles.errorHelperText}`}>
                            <input type="text" placeholder={contact_object.name_input} id="first_name" onChange={nameChange}/>
                            <label htmlFor="first_name" className={styles.required}>{contact_object.name_input}</label>
                        </div>
                        {!name ? <p className={styles.errorInput}>Обязательное поле</p> : <></>}

                    </div>
                    <div className={styles.inputContainer}>
                        <div className={`${styles.formInput} ${email ? "" : styles.errorHelperText}`}>
                            <input type="email" placeholder={contact_object.email_input} id="email" onChange={emailChange}/>
                            <label htmlFor="email" className={styles.required} >{contact_object.email_input}</label>
                        </div>
                        {!email ? <p className={styles.errorInput}>Обязательное поле</p> : <></>}
                    </div>

                </div>
                <div className={styles.contactFormRow}>
                    <div className={styles.formInput}>
                        <input type="tel" placeholder={contact_object.telephone_input} id="telephone"/>
                        <label htmlFor="telephone">{contact_object.telephone_input}</label>
                    </div>
                    <div className={styles.formInput}>
                        <input type="text" placeholder={contact_object.work_place_input} id="working_place"/>
                        <label htmlFor="working_place">{contact_object.work_place_input}</label>
                    </div>
                </div>
                <div className={`${styles.formInput} ${styles.contactFormRow}`}>
                    <textarea id={styles.workDescription} rows="5" placeholder={contact_object.work_description_input}></textarea>
                    <label htmlFor="workDescription" className={styles.textareaLabel}>{contact_object.work_description_input}</label>
                </div>

                <div className={styles.formButton}>
                    <button className={styles.sendButton}>
                        {contact_object.projects_button}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;