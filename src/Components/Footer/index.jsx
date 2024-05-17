import styles from './style.module.css';
import logo from '../../logo.svg';

export default function Footer(){
    return(
        <div>
            <section className={styles.footer}>
                <p className={styles.footer_text_1}>Do you want to step in to the future of Your Upcoming Event</p>
                <div className={styles.footer_button_container}><button className={styles.footer_button}>Request Early Access</button></div>
                <div className={styles.links}>
                    <div>
                        <img src={logo} alt='react logo' className={styles.react_logo}/>
                        <p>Crechterwoord K12 182 DK Alknjkcb,</p>
                        <p>All Rights Reserved</p>
                    </div>
                    <div>
                        <p className={styles.text}>Links</p>
                        <ul>
                            <li>Overons</li>
                            <li>Social Media</li>
                            <li>Counters</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                    <p className={styles.text}>Company</p>
                        <ul>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy Contact</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <p className={styles.text}>Get in touch</p>
                        <ul>
                            <li>Crechterwoord K12 182 DK Alknjkcb</li>
                            <li>085-132567</li>
                            <li>info@payme.net</li>
                        </ul>
                    </div>
                </div>
                <p className={styles.copyright_text}>@2021 GPT-3. All rights reserved.</p>
            </section>
        </div>
    );
}