import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { FaLock } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';

export default function AdminLogin(){
    const [email , setEmail] = useState()
    const [password , setPassword] = useState()

    const data = {email , password}

    const adminLogin = async(e) =>{
        e.preventDefault();
        await axios.post(`http://localhost:3046/api/v1/admin/login` , data)
        .then((response)=>{
            localStorage.setItem('accessToken', response.data.accessToken) 
            console.log(response)
            console.log("accesstoken: "+ response.data.accessToken)
            console.log("success: "+ response.data.success)
            if(response.data.success){
                alert(response.data.message)
                navigate('/admin/all-user')
            }else{
                alert(response.data.message)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const navigate = useNavigate();

    return(
        <div>
            <section className={styles.admin_login_container}>
                <div className={styles.admin_login_box}>
                    <div className={styles.login_text}>
                        <FaLock className={styles.login_logo}/>
                        <h1>LOGIN</h1>
                    </div>
                    <div className={styles.login_input}>
                        <input type="email" name="email" id="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} /><br/>
                        <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} /><br />
                        <input type="checkbox" name="remember_me" id="remember_me" />
                        <label htmlFor="remember_me">Remember Me ?</label>
                        <input type="submit" value="Log In" onClick={adminLogin}/>
                        {/* <input type="submit" value="Log In" onClick={()=>navigate('/admin/navbar-header')}/> */}
                    </div>
                </div>
            </section>
        </div>
    );
}