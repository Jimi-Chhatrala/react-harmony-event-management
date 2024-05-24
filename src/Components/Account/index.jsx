import NavBar from '../NavBar'
import styles from './style.module.css'
import { BsFire } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { GrDirections } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';

export default function Account(){
    const navigate = useNavigate();
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
            console.log(response.data.data)
        }).catch((error)=>console.log(error))
    }, []);

    // -----------------------------------------------------

    return(
        <>
        <NavBar/>
        <section className={styles.account_container}>
            <div className={styles.account_sub_container}>
                <div className={styles.account_1}>
                    <span><BsFire /></span><h3>Account Details</h3>
                </div>
                <hr />
                <div className={styles.account_2}>
                    <div className={styles.account_2_1}>
                        <span><IoMdHome /></span><h2>Home</h2>
                    </div>
                    <button onClick={()=> navigate('/changepass')}>Change Password</button>
                </div>
                <div className={styles.account_details_container}>
                    <p>Change Account Details</p>
                    <div className={styles.profile_image_container}>
                        <div className={styles.profile_container}>
                            <img src={currentUser ? currentUser.avatar : "https://res.cloudinary.com/dtdlad1ud/image/upload/v1703939018/yl9frkeayfp9wftlfz8l.jpg"} alt="Profile Image" className={styles.profile_image} />
                            <div className={styles.camera_icon}>
                                <span><FaCamera /></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.user_details}>
                        <div className={styles.user_details_1}>
                            <span><FaUserFriends /></span><span>{currentUser ? currentUser.fullName : null}</span>
                        </div>
                        <span><Link to="/change-detail"><MdEdit /></Link></span>
                    </div>
                    <div className={styles.user_details}>
                        <div className={styles.user_details_1}>
                            <span><FaEnvelope /></span><span>{currentUser ? currentUser.email : null}</span>
                        </div>
                        <span><Link to="/change-detail"><MdEdit /></Link></span>
                    </div>
                    <div className={styles.user_details}>
                        <div className={styles.user_details_1}>
                            <span><GrDirections /></span><span>{currentUser ? currentUser.gender : null}</span>
                        </div>
                        <span><Link to="/change-detail"><MdEdit /></Link></span>
                    </div>
                    <div className={styles.user_details}>
                        <div className={styles.user_details_1}>
                            <span><MdContactPhone /></span><span>{currentUser ? currentUser.mobile_no : null}</span>
                        </div>
                        <span><Link to="/change-detail"><MdEdit /></Link></span>
                    </div>
                    {/* <div className={styles.profile_image_container}>
                        <div className={styles.user_profile_image}>
                            <img src="https://res.cloudinary.com/dtdlad1ud/image/upload/v1703939018/yl9frkeayfp9wftlfz8l.jpg" alt="" />
                            <span><FaCamera /></span>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        </>
    )
}