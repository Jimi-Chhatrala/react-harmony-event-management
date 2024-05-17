import styles from './style.module.css';
import AboutImage_1 from  '../../images/about/company-age-bg.jpg'
import AboutImage_2 from  '../../images/about/company-banner.png'
import Footer from '../Footer';
import NavBar from '../NavBar';

export default function About(){
    return(
        <div>
            <NavBar/>
            <section id={styles.hero}>
                <div className={styles.contact_us}>
                    <p className={styles.contact_1}>ALL YOU NEED TO KNOW</p>
                    <p className={styles.contact_2}><span>ABOUT</span> HARMONI</p>
                    <div>
                        <span className={styles.contact_3_1}>Home</span><span  className={styles.contact_3_2}>About Us</span>
                    </div>
                </div>
            </section>
            <section className={styles.mission_vision}>
                <div className={styles.mission_vision_container}>
                    <div className={styles.mission_vision_1}>
                        <p>we are harmoni</p>
                        <h1>No.1 Events</h1>
                        <h1>Management</h1>
                        <p>get started!</p>
                    </div>
                    <div className={styles.mission_vision_1}>
                        <h2>our mission</h2>
                        <p>Lorem ipsum dollor site amet the best consectuer adipiscing elites sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit.</p>
                        <p className={styles.mission_vision_text}>Lorem ipsum dollor site amet the best consectuer adipiscing elites sed diam nonummy nibh euismod.</p>
                    </div>
                    <div className={styles.mission_vision_1}>
                        <h2>our vission</h2>
                        <p>Lorem ipsum dollor site amet the best consectuer adipiscing elites sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit.</p>
                        <p className={styles.mission_vision_text}>Lorem ipsum dollor site amet the best consectuer adipiscing elites sed diam nonummy nibh euismod.</p>
                    </div>
                </div>
                <div className={styles.company_awards_container}>
                    <div className={styles.awards_container}>
                        <div className={styles.harmoni_image_1}>
                            <img src={AboutImage_1}/>
                        </div>
                        <div className={styles.harmoni_image_2}>
                            <img src={AboutImage_2}/>
                        </div>
                        {/* <div class="image-stack">
                            <div class="image-stack__item image-stack__item--top">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/110238/portrait1.jpeg" alt="" height="180px">
                            </div>
                            <div class="image-stack__item image-stack__item--bottom">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/110238/texture-waves-cropped.jpg" alt="">
                            </div>
                        </div> */}
                    </div>
                    <div className={styles.our_winning_awards}>
                        <p>harmoni award</p>
                        <h1>Our Winning Awards</h1>
                        <div className={styles.our_winning_awards_container}>
                            <div className={styles.award}>
                                <h3 className={styles.award_title}>AUG 2015</h3>
                                <div className={styles.award_description}>
                                    <h3>1st Place for Unique Events 2018</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem quam sit beatae explicabo tempora?</p>
                                </div>
                            </div>
                            <div className={styles.award}>
                                <h3 className={styles.award_title}>MAY 2014</h3>
                                <div className={styles.award_description}>
                                    <h3>1st Winner Best New Year Events</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem quam sit beatae explicabo tempora?</p>
                                </div>
                            </div>
                            <div className={styles.award}>
                                <h3 className={styles.award_title}>DEC 2013</h3>
                                <div className={styles.award_description}>
                                    <h3>1st Place International Events Awards</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem quam sit beatae explicabo tempora?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.study_with_us}>
                    <div className={styles.study_with_us_content}>
                        <h3>Study With Us</h3>
                        <p>Visit our world class facility for South African Scientist and Spectrum</p>
                    </div>
                    <div className={styles.study_with_us_content}>
                        <h3>Study With Us</h3>
                        <p>Visit our world class facility for South African Scientist and Spectrum</p>
                    </div>
                    <div className={styles.study_with_us_content}>
                        <h3>Study With Us</h3>
                        <p>Visit our world class facility for South African Scientist and Spectrum</p>
                    </div>
                    <div className={styles.study_with_us_content}>
                        <h3>Study With Us</h3>
                        <p>Visit our world class facility for South African Scientist and Spectrum</p>
                    </div>
                    <div className={styles.study_with_us_content}>
                        <h3>Study With Us</h3>
                        <p>Visit our world class facility for South African Scientist and Spectrum</p>
                    </div>
                    <div className={styles.study_with_us_content}>
                        <h3>Study With Us</h3>
                        <p>Visit our world class facility for South African Scientist and Spectrum</p>
                    </div>
                    <div className={styles.study_with_us_content}>
                        <h3>Study With Us</h3>
                        <p>Visit our world class facility for South African Scientist and Spectrum</p>
                    </div>
                    <div className={styles.study_with_us_content}>
                        <h3>Study With Us</h3>
                        <p>Visit our world class facility for South African Scientist and Spectrum</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}