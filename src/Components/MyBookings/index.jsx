import styles from './style.module.css';
import Footer from '../../Components/Footer';
import { BiRupee } from "react-icons/bi";
import MyBookings_1 from '../../images/mybookings/my-bookings-1.jpg'
import MyBookings_2 from '../../images/mybookings/my-bookings-2.jpg'
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import NavBar from '../NavBar';

export default function MyBookings(){
    return(
        <div>
            <NavBar/>
            <section className={styles.my_bookings_container}>
                <div className={styles.my_bookings}>
                    <img src={MyBookings_1} alt='My Booking Image' />
                    <div className={styles.my_bookings_text}>
                        <p>Wed...</p>
                        <p className={styles.date}>10/05/2023</p>
                        <p>Tickets from $52</p>
                    </div>
                    <div className={styles.my_bookings_text_2}>
                        <p><FaRegClock className={styles.icon} />Start 20:00 PM - 22:00 PM</p>
                        <p><FaLocationDot className={styles.icon} />Good Morning All Of You... You Can Join The Wedding</p>
                    </div>
                </div>
                <div className={styles.my_bookings}>
                <img src={MyBookings_2} alt='My Booking Image' />
                    <div className={styles.my_bookings_text}>
                        <p>Wed...</p>
                        <p className={styles.date}>10/05/2023</p>
                        <p>Tickets from $52</p>
                    </div>
                    <div className={styles.my_bookings_text_2}>
                        <p><FaRegClock className={styles.icon} />Start 20:00 PM - 22:00 PM</p>
                        <p><FaLocationDot className={styles.icon} />Good Morning All Of You... You Can Join The Wedding</p>
                    </div>
                </div>
                <div className={styles.my_bookings}>
                <img src={MyBookings_2} alt='My Booking Image' />
                    <div className={styles.my_bookings_text}>
                        <p>Wed...</p>
                        <p className={styles.date}>10/05/2023</p>
                        <p>Tickets from $52</p>
                    </div>
                    <div className={styles.my_bookings_text_2}>
                        <p><FaRegClock className={styles.icon} />Start 20:00 PM - 22:00 PM</p>
                        <p><FaLocationDot className={styles.icon} />Good Morning All Of You... You Can Join The Wedding</p>
                    </div>
                </div>
                <div className={styles.my_bookings}>
                <img src={MyBookings_1} alt='My Booking Image' />
                    <div className={styles.my_bookings_text}>
                        <p>Wed...</p>
                        <p className={styles.date}>10/05/2023</p>
                        <p>Tickets from $52</p>
                    </div>
                    <div className={styles.my_bookings_text_2}>
                        <p><FaRegClock className={styles.icon} />Start 20:00 PM - 22:00 PM</p>
                        <p><FaLocationDot className={styles.icon} />Good Morning All Of You... You Can Join The Wedding</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}