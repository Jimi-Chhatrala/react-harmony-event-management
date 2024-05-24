import styles from './style.module.css';
import ChangeDetailPageImage from '../../images/ChangeDetailPageImage.png'
import { CiLock } from "react-icons/ci";
import axios from "axios"
import NavBar from '../NavBar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'js-cookie';

export default function UserChangePassword(){
    const navigate = useNavigate();

    const [password , setPassword] = useState()
    const [newPassword , setNewPassword] = useState()

    const data = { password, newPassword }

    const changePassword = async(e) =>{
        e.preventDefault();
    
        await axios.post(`http://localhost:3046/api/v1/users/passwordChange` , data, {
            headers:{
                Authorization: Cookies.get('userAccessToken'),
            },
        })
        .then((response)=>{
            if(response.data.success) {
                alert(response.data.message)
                navigate('/account')
            } else {
                alert(response.data.message)
            }
        })
        .catch((error)=>{
            alert(error.response.data.message);
        })
    }

    return(
        <div>
            <NavBar/>
            <section className={styles.sign_up_form}>
                <div className={styles.contact_image}>
                    <img src={ChangeDetailPageImage} alt="Forest"/>
                </div>
                <div className={styles.contact_form}>
                    <div className={styles.sign_up_label}>
                        <p className={styles.sign_up_icon}><CiLock className={styles.lock_icon} /></p>
                        <p className={styles.sign_up_text}>Change Password</p>
                    </div>
                    <form>
                        <div>
                            <label htmlFor="password">Current Password</label><br/>
                            <input value={password}  onChange={(e)=>setPassword(e.target.value)} type='password' id='password' placeholder='password *'/><br/>
                        </div>
                        <div>
                            <label htmlFor="new_password">New Password</label><br/>
                            <input value={newPassword}  onChange={(e)=>setNewPassword(e.target.value)} type='password' id='new_password' placeholder='new password *'/><br/>
                        </div>
                        <div>
                            <input type='submit' onClick={changePassword} value={"CHANGE"}/>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}