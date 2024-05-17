import styles from './style.module.css'
import { FaStar } from "react-icons/fa";

export default function YourLocation(){
    return(
        <div>
            <section className={styles.location}>
                <div className={styles.location_label}>
                    <p><FaStar /><FaStar /> <span>Your Location</span> <FaStar /><FaStar /></p>
                </div>
            </section>
        </div>
    );
}