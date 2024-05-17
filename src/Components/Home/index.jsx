import styles from './style.module.css';
import Visitors from '../../images/people.png'
import Footer from '../Footer';
import NavBar from '../NavBar';
import CompanyImage1 from '../../images/company/google.png'
import CompanyImage2 from '../../images/company/slack.png'
import CompanyImage3 from '../../images/company/atlassian.png'
import CompanyImage4 from '../../images/company/dropbox.png'
import CompanyImage5 from '../../images/company/shopify.png'

export default function Home(){
    return(
        <div>
            <NavBar/>
            <section id={styles.hero}>
                <div className={styles.headerContent}>
                    <h1 className={styles.title}>One Stop Event <br/> Planner</h1>
                    <p className={styles.description}>Yet bed any for travelling assistance indulgence <br/> unpleasing. Not thoughts all exercise blessing. <br/> Indulgence way everything joy alteration boisterous <br/> the attachment. Party we years to order allow asked <br/> of.</p>
                    <p className={styles.tagline}>Every event should be Perfect</p>
                    <div>
                        <input type='text' id="email" className={styles.emailBox} name="email" placeholder='Your Email Address' />
                        <button className={styles.emailButton}>Get Started</button>
                    </div>
                    <div className={styles.visitors}>
                        <img src={Visitors} alt="Visitors Image" className={styles.visitorsImage} />
                        <p className={styles.visitorsDescription}>1,600 people requested access a visit in last 24 hours</p>
                    </div>
                </div>
            </section>
            <section className={styles.home_2}>
                <div className={styles.home_companies_container}>
                    <div className={styles.home_company_image}>
                        <img src={CompanyImage1} alt="Google" />
                    </div>
                    <div className={styles.home_company_image}>
                        <img src={CompanyImage2} alt="Slack" />
                    </div>
                    <div className={styles.home_company_image}>
                        <img src={CompanyImage3} alt="Atlassian" />
                    </div>
                    <div className={styles.home_company_image}>
                        <img src={CompanyImage4} alt="Dropbox" />
                    </div>
                    <div className={styles.home_company_image}>
                        <img src={CompanyImage5} alt="Shopify" />
                    </div>
                </div>
                
                <div className={styles.part_2}>
                    <div className={styles.part_2_text_1}>
                        <h3>What is Harmoni Event</h3>
                        <p>We so opinion friends me message as delight. Whole front do of plate heard on ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
                    </div>
                    <div className={styles.part_2_text_2}>
                        <h2>Your Event Will be beyond your imagination</h2>
                        <p>Explore the Library</p>
                    </div>
                    <div className={styles.part_2_text_3}>
                        <div>
                            <h3>Chatbots</h3>   
                            <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
                        </div>
                        <div>
                            <h3>Knowledgebase</h3>
                            <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
                        </div>
                        <div>
                            <h3>Education</h3>
                            <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
                        </div>
                    </div>
                </div>

                <div className={styles.part_3}>
                    <div className={styles.part_3_text_1}>
                        <p>Harmony Event Management Firm & Wedding Planners is a group of creative minds who would like to make weddings, birthdays & any kind of events courteous & a better place for our clients to celebrate important moments of their lives...</p>
                        <div className={styles.part_3_text_1_div_1}>
                            <div>
                                <h3>Photography</h3>
                                <p>A Team Of 3 talented Photographers are ready to snap the best moments of your ceremony</p>
                            </div>
                            <div>
                                <h3>Cinematography or Videography Service</h3>
                                <p>Creative full HD 1080p Video, a different scape of your ceremony</p>
                            </div>
                            <div>
                                <h3>Full Venue Decoration Service</h3>
                                <p>A Blend of out-of-the-box ideas to decore your precious date</p>
                            </div>
                            <div>
                                <h3>Home Decoration</h3>
                                <p>just call us and get total event solution under one roof.</p>
                            </div>
                        </div>
                    </div>
                    <p>Request Early Access to Get Started</p>
                </div>
                <div className={styles.part_4}>
                    <div>
                        <p className={styles.p1}>Request Early Access to Get Started</p>
                        <p className={styles.p2}>Register Today & start exploring the endless possibilities.</p>
                    </div>
                    <button>GET STARTED</button>
                </div>
            </section>
            <Footer/>
        </div>
    );
}