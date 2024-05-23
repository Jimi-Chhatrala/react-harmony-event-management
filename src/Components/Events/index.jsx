import styles from './style.module.css';
import Footer from '../../Components/Footer';
import NavBar from '../NavBar';
import { useNavigate } from 'react-router-dom';
import Image1 from '../../images/events/event-1.jpg';
import Image2 from '../../images/events/event-2.jpg';
import Image3 from '../../images/events/event-3.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Events(){

    //-----------------------------------------------------------------
    // Get All Category Start

    const [allCategory, setAllCategory] = useState([]); 

    useEffect(() => {    
        axios.get('http://localhost:3046/api/v1/admin/showcategory')
        .then((response) => {
            setAllCategory(response.data.message)
        }).catch((error)=>console.log(error))
    }, []);

    // Get All Category End
    //-----------------------------------------------------------------

  const navigate = useNavigate();
    return(
        <div>
            <NavBar/>
            <section id={styles.hero}></section>
            <section className={styles.events}>
                <div className={styles.events_container}>
                    {
                        allCategory ? allCategory.map((element, index)=>{
                            return(
                                <div className={`${styles.events_image}`} onClick={()=>navigate("/events/event", {state: element})}>
                                    <img src={element.URL} alt='Category Image' />
                                    <div className={styles.events_text}>
                                        <p className={styles.events_text_1} onClick={()=>navigate('/events/event')}>{element.category_name}</p>
                                    </div>
                                </div>
                            )
                        }) : null
                    }
                    
                    {/* <div className={`${styles.events_image}`}>
                        <img src={Image2} alt='Category Image' />
                        <div className={styles.events_text}>
                            <p className={styles.events_text_1} onClick={()=>navigate('/events/event')}>Concert</p>
                        </div>
                    </div>
                    <div className={`${styles.events_image}`}>
                        <img src={Image3} alt='Category Image' />
                        <div className={styles.events_text}>
                            <p className={styles.events_text_1} onClick={()=>navigate('/events/event')}>Concert</p>
                        </div>
                    </div> */}
                    {/* <div className={`${styles.events_image} ${styles.events_image_2}`}>
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
                    </div> */}
                </div>
            </section>
            <Footer />
        </div>
    );
}