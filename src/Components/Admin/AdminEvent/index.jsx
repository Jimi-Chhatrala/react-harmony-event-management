import styles from './style.module.css';
import AdminNavbarHeader from "../AdminNavbarHeader";
import { CiLock } from "react-icons/ci";

export default function AdminEvent(){
    return(
        <div>
            <AdminNavbarHeader/>
            <section className={styles.admin_event_container}>
                <div className={styles.admin_event_text}>
                    <CiLock className={styles.logo}/>
                    <p>Post Event</p>
                </div>
                <div className={styles.form_container}>
                    <form action="#">
                        <p className={styles.file_input}>
                            <input type="file" name="file" id="file" />
                            <label>CHOOSE PIC</label>
                        </p>
                        <input type="text" name='title' id='title' placeholder='Title *' />
                        <input type="date" name="date" id="date" />
                        <input type="date" name="date" id="date" />
                        <input type="time" name="time" id="time" />
                        <input type="time" name="time" id="time" />
                        <input type="number" name="price" id="price" placeholder='Price' />
                        <select name="category" id="category">
                            <option value="categort">Select Category</option>
                        </select>
                        <input type="text" name='location' id='location' placeholder='Location' />
                        <textarea name="description" id="description" placeholder='Description'></textarea>
                        <input type="submit" value="POST" />
                    </form>
                </div>
            </section>
        </div>
    );
}