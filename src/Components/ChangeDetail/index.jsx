import styles from './style.module.css';
import ChangeDetailPageImage from '../../images/ChangeDetailPageImage.png'
import { CiLock } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import NavBar from '../NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'

export default function ChangeDetail(){
    const [currentUser, setCurrentUser] = useState(); 
    // -----------------------------------------------------
    // Get Current User

    useEffect(() => {    
        axios.get('http://localhost:3046/api/v1/users/getcurrentUser', {
            headers:{
                Authorization: Cookies.get('userAccessToken'),
            },
        })
        .then((response) => {
            setCurrentUser(response.data.data)
            console.log('Current User Data',response.data.data)
        }).catch((error)=>console.log(error))
    }, []);

    // -----------------------------------------------------

    return(
        <div>
            <NavBar/>
            <section className={styles.contact_us_form}>
                <div className={styles.contact_image}>
                    <img src={ChangeDetailPageImage} alt="Forest"/>
                </div>
                <div className={styles.contact_form}>
                    <div className={styles.contact_us_label}>
                        <p className={styles.contact_us_icon}><CiLock className={styles.lock_icon} /></p>
                        <p className={styles.contact_us_text}>Change User Detail</p>
                    </div>
                    <form>
                        <div>
                            <label for="name">Name</label>
                            <input type='text' id='name' placeholder='name *' value={currentUser.fullName} />
                        </div>

                        <div>
                            <label for="email">Email</label>
                            <input type='email' id='email' placeholder='email *' value={currentUser.email}/>
                        </div>

                        <div>
                            <label for="gender">Gender</label><br/>
                            <input type="radio" id="female" name="gender" value="Female"/>
                            <label for="female">Female</label>
                            <input type="radio" id="male" name="gender" value="Male"/>
                            <label for="male">Male</label>
                            <input type="radio" id="other" name="gender" value="Other"/>
                            <label for="other">Other</label><br/>
                        </div>

                        <div>
                            <label for="phone_number">Phone Number</label><br/>
                            <input type='number' id='phone_number' placeholder='phone number *' value={currentUser.mobile_no} /><br/>
                        </div>

                        <input type="checkbox" id="remember_me"/>
                        <label for="remember_me">Remember me</label><br/>

                        <div>
                            <input type='submit' value={"CHANGE"}/>
                        </div>
                    </form>
                    <p>Copyright @ Your Website 2023</p>
                </div>
            </section>
        </div>
    );
}