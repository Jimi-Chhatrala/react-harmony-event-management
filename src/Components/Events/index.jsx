import styles from './style.module.css';
import Footer from '../../Components/Footer';
import NavBar from '../NavBar';
import { useNavigate } from 'react-router-dom';

export default function Events(){
  const navigate = useNavigate();
    return(
        <div>
            <NavBar/>
            <section id={styles.hero}></section>
            <section className={styles.events}>
                <div className={styles.events_container}>
                    <div className={`${styles.events_image} ${styles.events_image_1}`}>
                        <div className={styles.events_text}>
                            <p className={styles.events_text_1} onClick={()=>navigate('/events/event')}>Concert</p>
                        </div>
                    </div>
                    <div className={`${styles.events_image} ${styles.events_image_2}`}>
                        <div className={styles.events_text}>
                            <p className={styles.events_text_1} onClick={()=>navigate('/events/event')}>Orchestra</p>
                        </div>
                    </div>
                    <div className={`${styles.events_image} ${styles.events_image_3}`}>
                        <div className={styles.events_text}>
                            <p className={styles.events_text_1} onClick={()=>navigate('/events/event')}>Festival</p>
                        </div>
                    </div>
                    <div className={`${styles.events_image} ${styles.events_image_4}`}>
                        <div className={styles.events_text}>
                            <p className={styles.events_text_1} onClick={()=>navigate('/events/event')}>Singing</p>
                        </div>
                    </div>
                    <div className={`${styles.events_image} ${styles.events_image_5}`}>
                        <div className={styles.events_text}>
                            <p className={styles.events_text_1} onClick={()=>navigate('/events/event')}>Party</p>
                        </div>
                    </div>
                    <div className={`${styles.events_image} ${styles.events_image_6}`}>
                        <div className={styles.events_text}>
                            <p className={styles.events_text_1} onClick={()=>navigate('/events/event')}>Work</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}