import styles from './style.module.css';
import Footer from '../../Components/Footer';
import { FaLocationDot } from "react-icons/fa6";
import { BiRupee } from "react-icons/bi";
import NavBar from '../NavBar';

export default function EventDetail(){
    
    return(
        <div>
            <NavBar/>
            <section id={styles.hero}></section>
            <section className={styles.event_details_container}>
                <div className={styles.event_details_container_1}>
                    <div>
                        <h2>Speaking Man</h2>
                        <p><span className={styles.vertical_divider}>abc</span><span className={styles.vertical_divider}>Hindi</span><span className={styles.vertical_divider}>12Yrs+</span><span>18:45-15:50</span></p>
                    </div>
                    <button>Book</button>
                </div>
                <hr />
                <div className={styles.event_details_container_2}>
                    <p><span>2024-02-03</span><span>2024-02-16</span><span></span><span className={styles.vertical_divider}><FaLocationDot className={styles.location_icon} /> Surat</span><span></span><span><BiRupee />200 onwards</span></p>
                </div>
            </section>
            <Footer />
        </div>
    );
}