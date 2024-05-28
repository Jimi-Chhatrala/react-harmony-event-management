// import { Cookies } from 'react-cookie';
import AdminNavbarHeader from '../AdminNavbarHeader';
import styles from './style.module.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom';

const token = Cookies.get('adminAccessToken');

export default function AdminAllUser(){
    const [data, setData] = useState();
    const [allUser, setAllUser] = useState([]); 
    const navigate = useNavigate();
    useEffect(() => {    
        axios.get('http://localhost:3046/api/v1/admin/getalluser', {
            headers:{
                Authorization: Cookies.get('adminAccessToken'),
            },
        })
        .then((response) => {
            setAllUser(response.data.data)
        }).catch((error)=>console.log(error))
    }, []);

    const toggleBlockStatus = async (userId) => {
        const data = { _id: userId };
        await axios.post('http://localhost:3046/api/v1/admin/blockandunblockuser', data, {
            headers:{
                Authorization: token,
            },
        }).then((response)=>{
            if(response.data.success){
                alert(response.data.message)
                // navigate('/admin/all-user')
                setAllUser((prevUsers) =>
                    prevUsers.map((user) =>
                      user.id === userId ? { ...user, isBlocked: !user.isBlocked } : user
                    )
                  );
            }else{
                alert(response.data.message)
            }
        }).catch((error)=>{
            alert(error.response.data.message);
        })
    }

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
                                        <td><button className={styles.action_btn} onClick={()=> toggleBlockStatus(element._id)}>{element.block ? "Unblock" : "Block"}</button></td>
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