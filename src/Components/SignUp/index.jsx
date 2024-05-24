import styles from './style.module.css';
import ChangeDetailPageImage from '../../images/ChangeDetailPageImage.png'
import { CiLock } from "react-icons/ci";
import axios from "axios"
// import { FaStar } from "react-icons/fa";
import NavBar from '../NavBar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SignUp(){


    const [fullName , setFullName] = useState()
    const [email , setEmail] = useState()
    const [mobile_no , setPhno] = useState()
    const [gender , setGender] = useState()
    const [password , setPassword] = useState()

    const data = {fullName , email , mobile_no , gender , password}


    const reg = async(e) =>{
        e.preventDefault();
        await axios.post(`http://localhost:3046/api/v1/users/register` , data)
        .then((response)=>{
            console.log('Response: ', response)
            console.log('Message: ', response.data.message)
            if(response.data.success){
                alert(response.data.message)
                navigate('/sign-in')
            }else{
                alert(response.data.message)
            }
        })
        .catch((error)=>{
            alert(error.response.data.message);
            // console.log('Error: ', error)
            // console.log('Error: ', error.response.data.message)
        })
    }



  const navigate = useNavigate();

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
                        <p className={styles.sign_up_text}>Sign Up</p>
                    </div>
                    <form>
                        <div>
                            <input value={fullName} onChange={(e)=>setFullName(e.target.value)}  type='text' id='name' placeholder='name *'/>
                        </div>

                        <div>
                            <input value={email} onChange={(e)=>setEmail(e.target.value)}  type='email' id='email' placeholder='email *'/>
                        </div>

                        <div>
                            <label htmlFor="gender">Gender</label><br/>
                            <input type="radio" id="female" name="gender" value={"female"} onChange={(e)=>setGender(e.target.value)} />
                            <label htmlFor="female">Female</label>
                            <input type="radio" id="male" name="gender" value={"male"}  onChange={(e)=>setGender(e.target.value)} />
                            <label htmlFor="male">Male</label>
                            <input type="radio" id="other" name="gender" value={"other"}  onChange={(e)=>setGender(e.target.value)} />
                            <label htmlFor="other">Other</label><br/>
                        </div>

                        <div>
                            <label htmlFor="phone_number">Phone Number</label><br/>
                            <input value={mobile_no}  onChange={(e)=>setPhno(e.target.value)} type='number' id='phone_number' placeholder='phone number *'/><br/>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label><br/>
                            <input value={password}  onChange={(e)=>setPassword(e.target.value)} type='password' id='password' placeholder='password *'/><br/>
                        </div>
                        

                        <div>
                        <input type="checkbox" id="remember_me"/>
                        <label htmlFor="remember_me">Remember me</label><br/>
                        </div>

                        <div>
                            <input type='submit' onClick={reg} value={"SIGN UP"}/>
                        </div>
                    </form>
                    <p className={styles.other_links}><a  onClick={()=>navigate('/sign-in')}>Already have an account ? Sign In</a></p>
                    <p>Copyright @ Your Website 2023</p>
                </div>
            </section>
        </div>
    );
}