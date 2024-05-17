import { Cookies } from 'react-cookie';
import AdminNavbarHeader from '../AdminNavbarHeader';
import styles from './style.module.css';
import axios from "axios";
import React, { useEffect, useState } from "react";


export default function AdminAllUser(){
    const [data, setData] = useState();
    const [allUser, setAllUser] = useState([]); 

    useEffect(() => {    
        axios.get('http://localhost:3046/api/v1/admin/getalluser', {
            headers:{
                Authorization: localStorage.getItem('accessToken'),
            },
        })
        .then((response) => {
            setAllUser(response.data.data)
            // console.log(response.data.data)
        }).catch((error)=>console.log(error))
    }, []);

    // console.log(allUser , "userList")
    return(
        <div>
            <AdminNavbarHeader/>
            <section className={styles.admin_all_user_container}>
                <div className={styles.fixTableHead}>
                    <table>
                        <thead>
                            <tr className={styles.table_header}>
                                <th>No</th>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Phone Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>                            
                             {allUser ? allUser.map((element , index)=>{
                                return(
                                     <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td><img src={element.avatar} alt="" className={styles.profile_image}/></td>
                                        <td>{element.fullName}</td>
                                        <td>{element.email}</td>
                                        <td>{element.gender}</td>
                                        <td>{element.mobile_no}</td>
                                        <td><button className={styles.action_btn}>Unblock</button></td>
                                    </tr> 
                                )
                            }): null} 
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}