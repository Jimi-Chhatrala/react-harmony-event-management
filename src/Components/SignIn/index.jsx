import styles from './style.module.css';
import ChangeDetailPageImage from '../../images/ChangeDetailPageImage.png'
import { CiLock } from "react-icons/ci";
// import { FaStar } from "react-icons/fa";
import NavBar from '../NavBar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function SignIn(){
    const [mobile_no , setPhno] = useState()
    const [password , setPassword] = useState()

    const data = {mobile_no , password}

    const signIn = async(e) =>{
        e.preventDefault();
        await axios.post(`http://localhost:3046/api/v1/users/login` , data)
        .then((response)=>{
            console.log(response)
            if(response.data.success){
                alert(response.data.message)
                navigate('/')
            }else{
                alert(response.data.message)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const navigate = useNavigate();

    return(
        <div>
            <NavBar/>
            <section className={styles.sign_in_form}>
                <div className={styles.contact_image}>
                    <img src={ChangeDetailPageImage} alt="Forest"/>
                </div>
                <div className={styles.contact_form}>
                    <div className={styles.sign_in_label}>
                        <p className={styles.sign_in_icon}><CiLock className={styles.lock_icon} /></p>
                        <p className={styles.sign_in_text}>Sign In</p>
                    </div>
                    <form>
                        <div>
                            <input type='number' id='mobile_no' placeholder='Mobile Number *' value={mobile_no} onChange={(e) => setPhno(e.target.value)}/>
                        </div>

                        <div>
                            <input type='password' id='password' placeholder='Password *' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                        </div>

                        <input type="checkbox" id="remember_me"/>
                        <label htmlFor="remember_me">Remember me</label><br/>

                        <div>
                            <input type='submit'  onClick={signIn}  value={"SIGN IN"}/>
                        </div>
                    </form>
                    <p className={styles.other_links}><a href="#">Forgot password ?</a><a onClick={()=>navigate('/sign-up')}>Don't have an account ? Sign Up</a></p>
                    <p>Copyright @ Your Website 2023</p>
                </div>
            </section>
        </div>
    );
}