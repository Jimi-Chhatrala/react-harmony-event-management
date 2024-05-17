import styles from './style.module.css';
import ForestImage from '../../images/contact-form-image.png'
import { CiLock } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Footer from '../Footer';
import NavBar from '../NavBar';

export default function Contact(){
    return(
        <div>
            <NavBar/>
            <section id={styles.hero}>
                <div className={styles.contact_us}>
                    <p className={styles.contact_1}>CONTACT US NOW</p>
                    <p className={styles.contact_2}><span>KEEP</span> IN TOUCH</p>
                    <div>
                        <span className={styles.contact_3_1}>Home</span><span  className={styles.contact_3_2}>Contact Us</span>
                    </div>
                </div>
            </section>
            <section className={styles.contact_us_form}>
                <div className={styles.contact_image}>
                    <img src={ForestImage} alt="Forest"/>
                </div>
                <div className={styles.contact_form}>
                    <div className={styles.contact_us_label}>
                        <p className={styles.contact_us_icon}><CiLock className={styles.lock_icon} /></p>
                        <p className={styles.contact_us_text}>Contact Us</p>
                        <form>
                            <input type='text' id='name' placeholder='name *'/><br/>
                            <input type='email' id='email' placeholder='email *'/><br/>
                            <input type='text' id='country' placeholder='country *'/><br/>
                            <input type='number' id='phone_number' placeholder='phone number *'/><br/>
                            <input type='password' id='password' placeholder='password *'/><br/>
                            <input type='submit' value={"Send"}/>
                        </form>
                    </div>
                </div>
            </section>
            <section className={styles.location}>
                <div className={styles.location_label}>
                    <p><FaStar /><FaStar /> <span>Your Location</span> <FaStar /><FaStar /></p>
                </div>
            </section>
            <section>
                    <div className={styles.google_map}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15249885.318783779!2d82.75252935!3d21.0680074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1714570286601!5m2!1sen!2sin" width="100%" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
            </section>
            <Footer/>
        </div>
    );
}