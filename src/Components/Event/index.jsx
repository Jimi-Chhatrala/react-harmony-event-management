import styles from './style.module.css';
import Footer from '../../Components/Footer';
import { BiRupee } from "react-icons/bi";
import NavBar from '../NavBar';
import { useNavigate } from 'react-router-dom';

export default function Events(){
  const navigate = useNavigate();

    return(
        <div>
            <NavBar/>
            <section id={styles.hero}></section>
            <section className={styles.event_container}>
                <div className={styles.event} onClick={()=>navigate('/events/event/event-detail')}> 
                    <div className={`${styles.event_image} ${styles.event_image_1}`}></div>
                    <div className={styles.event_text_1}>
                        <date>2024-02-03</date>
                    </div>
                    <div className={styles.event_text_2}>
                        <h3>Stand Up Speaker</h3>
                        <p>Surat</p>
                        <p className={styles.gallery_text_2}>Dhumas</p>
                        <p><BiRupee className={styles.gallery_text_icon}/><span>200 onwards</span></p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}