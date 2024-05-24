import styles from './style.module.css';
import ChangeDetailPageImage from '../../images/ChangeDetailPageImage.png'
import { CiLock } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import NavBar from '../NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

const token = Cookies.get('userAccessToken');

export default function ChangeDetail(){

    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState(); 
    const [fullName , setFullName] = useState()
    const [mobile_no , setPhno] = useState()
    const [email , setEmail] = useState()
    const [gender , setGender] = useState()

    useEffect(()=>{
        setFullName(currentUser?.fullName);
        setPhno(currentUser?.mobile_no);
        setEmail(currentUser?.email);
        setGender(currentUser?.gender);
    }, [currentUser]);


    const dataFetch = async () => {
        await axios.get('http://localhost:3046/api/v1/users/getcurrentUser', {
            headers:{
                Authorization: token,
            },
        })
        .then((response) => {
            setCurrentUser(response.data.data)
            console.log('Current User Data',response.data.data)
        }).catch((error)=>console.log(error))
    }

    useEffect(() => {    
     dataFetch();   
    }, []);

    const update = async (e) => {
        e.preventDefault();
        const data = { fullName, email, gender };

        await axios.post('http://localhost:3046/api/v1/users/update', data, {
            headers:{
                Authorization: token,
            },
        }).then((response)=>{
            if(response.data.success){
                alert(response.data.message)
                navigate('/account')
            }else{
                alert(response.data.message)
            }
        }).catch((error)=>{
            alert(error.response.data.message);
        })
    }

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
                            <input type='text' id='name' placeholder='name *' value={fullName}  onChange={(e)=>setFullName(e.target.value)}/>
                        </div>

                        <div>
                            <label for="email">Email</label>
                            <input type='email' id='email' placeholder='email *' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                        </div>

                        <div>
                            <label for="gender">Gender</label><br/>
                            <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={(e)=>setGender(e.target.value)} />
                            <label for="female">Female</label>
                            <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={(e)=>setGender(e.target.value)} />
                            <label for="male">Male</label>
                            <input type="radio" id="other" name="gender" value="other" checked={gender === 'other'} onChange={(e)=>setGender(e.target.value)} />
                            <label for="other">Other</label><br/>
                        </div>

                        <div>
                            <label for="phone_number">Phone Number</label><br/>
                            <input type='number' id='phone_number' placeholder='phone number *' value={mobile_no} disabled /><br/>
                        </div>

                        <input type="checkbox" id="remember_me"/>
                        <label for="remember_me">Remember me</label><br/>

                        <div>
                            <input type='submit' value={"CHANGE"} onClick={update}/>
                        </div>
                    </form>
                    <p>Copyright @ Your Website 2023</p>
                </div>
            </section>
        </div>
    );
}