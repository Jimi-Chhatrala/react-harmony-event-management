import styles from './style.module.css';
import AdminNavbarHeader from "../AdminNavbarHeader";
import { CiLock } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminCategory(){
    const [allCategory, setAllCategory] = useState([]); 

    useEffect(() => {    
        axios.get('http://localhost:3046/api/v1/admin/showcategory')
        .then((response) => {
            setAllCategory(response.data.message)
            // console.log(response.data.message)
        }).catch((error)=>console.log(error))
    }, []);

    return(
        <div>
            <AdminNavbarHeader/>
            <section className={styles.admin_category_container}>
                <div className={styles.admin_category_text}>
                    <CiLock className={styles.logo}/>
                    <p>Post Category</p>
                </div>
                <div className={styles.form_container}>
                    <form action="#">
                        <p className={styles.file_input}>
                            <input type="file" name="file" id="file" />
                            <label>CHOOSE PIC</label>
                        </p>
                        <input type="text" name='title' id='title' placeholder='Category name *' />
                        <input type="submit" value="POST" />
                    </form>
                </div>
            <div className={styles.fixTableHead}>
                <table>
                    <thead>
                        <tr className={styles.table_header}>
                            <th>No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                        <tbody>
                            {
                                allCategory ? allCategory.map((element, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td><img src={element.URL} alt="" className={styles.profile_image}/></td>
                                            <td>{element.category_name}</td>
                                            <td>
                                                <a href="#" className={styles.action_btn}><FaEdit /></a>
                                                <a href="#" className={styles.action_btn}><MdDelete /></a>
                                            </td>
                                        </tr>
                                    )
                                }) : null
                            }
                       </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}