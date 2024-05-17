import Footer from '../Footer';
import GoogleMap from '../GoggleMap';
import YourLocation from '../YourLocation';
import styles from './style.module.css';
import { FaStar } from "react-icons/fa";
import GalleryImage_1 from '../../images/gallery/1.image.jpg';
import GalleryImage_2 from '../../images/gallery/2.image.jpg';
import GalleryImage_3 from '../../images/gallery/3.image.jpg';
import GalleryImage_4 from '../../images/gallery/4.image.jpg';
import GalleryImage_5 from '../../images/gallery/5.image.jpg';
import GalleryImage_6 from '../../images/gallery/6.image.jpg';
import GalleryImage_7 from '../../images/gallery/7.image.jpg';
import GalleryImage_8 from '../../images/gallery/8.image.jpg';
import { IoIosInformationCircle } from "react-icons/io";
import NavBar from '../NavBar';

export default function Gallery(){
    return(
        <div>
            <NavBar/>
            <section id={styles.hero}>
                <div className={styles.contact_us}>
                    <p className={styles.contact_1}>HARMONI EVENTS</p>
                    <p className={styles.contact_2}><span>HARMONI</span> GALLERY</p>
                    <div>
                        <span className={styles.contact_3_1}>Home</span><span  className={styles.contact_3_2}>HARMONI GALLERY</span>
                    </div>
                </div>
            </section>
            <section className={styles.location}>
                <div className={styles.location_label}>
                    <p><FaStar className={styles.star} /><FaStar className={styles.star} /> <span>Our Gallery</span> <FaStar className={styles.star} /><FaStar className={styles.star} /></p>
                </div>
            </section>
            <section>
                <div className={styles.gallery_container}>
                    <div className={`${styles.gallery_image} ${styles.gallery_image_1}`}>
                        <div className={styles.gallery_text}>
                            <p className={styles.gallery_text_1}>hii there</p>
                            <p className={styles.gallery_text_2}>shello there</p>
                            <IoIosInformationCircle className={styles.gallery_text_icon}/>
                        </div>
                    </div>
                    <div className={`${styles.gallery_image} ${styles.gallery_image_2}`}>
                        <div className={styles.gallery_text}>
                            <p className={styles.gallery_text_1}>hii there</p>
                            <p className={styles.gallery_text_2}>shello there</p>
                            <IoIosInformationCircle className={styles.gallery_text_icon}/>
                        </div>
                    </div>
                    <div className={`${styles.gallery_image} ${styles.gallery_image_3}`}>
                        <div className={styles.gallery_text}>
                            <p className={styles.gallery_text_1}>hii there</p>
                            <p className={styles.gallery_text_2}>shello there</p>
                            <IoIosInformationCircle className={styles.gallery_text_icon}/>
                        </div>
                    </div>
                    <div className={`${styles.gallery_image} ${styles.gallery_image_4}`}>
                        <div className={styles.gallery_text}>
                            <p className={styles.gallery_text_1}>hii there</p>
                            <p className={styles.gallery_text_2}>shello there</p>
                            <IoIosInformationCircle className={styles.gallery_text_icon}/>
                        </div>
                    </div>
                    <div className={`${styles.gallery_image} ${styles.gallery_image_5}`}>
                        <div className={styles.gallery_text}>
                            <p className={styles.gallery_text_1}>hii there</p>
                            <p className={styles.gallery_text_2}>shello there</p>
                            <IoIosInformationCircle className={styles.gallery_text_icon}/>
                        </div>
                    </div>
                    <div className={`${styles.gallery_image} ${styles.gallery_image_6}`}>
                        <div className={styles.gallery_text}>
                            <p className={styles.gallery_text_1}>hii there</p>
                            <p className={styles.gallery_text_2}>shello there</p>
                            <IoIosInformationCircle className={styles.gallery_text_icon}/>
                        </div>
                    </div>
                    <div className={`${styles.gallery_image} ${styles.gallery_image_7}`}>
                        <div className={styles.gallery_text}>
                            <p className={styles.gallery_text_1}>hii there</p>
                            <p className={styles.gallery_text_2}>shello there</p>
                            <IoIosInformationCircle className={styles.gallery_text_icon}/>
                        </div>
                    </div>
                    <div className={`${styles.gallery_image} ${styles.gallery_image_8}`}>
                        <div className={styles.gallery_text}>
                            <p className={styles.gallery_text_1}>hii there</p>
                            <p className={styles.gallery_text_2}>shello there</p>
                            <IoIosInformationCircle className={styles.gallery_text_icon}/>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <YourLocation/>
                <GoogleMap/>
                <div className={styles.offer_banner}>
                    <p className={styles.offer_text}>30% Off In June ~ July For Birthday Events</p><button className={styles.offer_button}>MAKE AN EVENT NOW</button>
                </div>
                <Footer/>
            </section>
        </div>
    );
}