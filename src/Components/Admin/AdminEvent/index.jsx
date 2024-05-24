import styles from './style.module.css';
import AdminNavbarHeader from "../AdminNavbarHeader";
import { CiLock } from "react-icons/ci";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function AdminEvent(){
    // Add New Event
    //-----------------------------------------------------------------------

    const [image , setImage] = useState();
    const [title , setTitle] = useState();
    const [s_date , setS_date] = useState();
    const [e_date , setE_date] = useState();
    const [s_time , setS_time] = useState();
    const [e_time , setE_time] = useState();
    const [location , setLocation] = useState();
    const [description , setDescription] = useState();
    // const [category_id , setCategory_id] = useState();
    const [category_name , setCategoryName] = useState("");
    const [price , setPrice] = useState();

    const fd = new FormData()

    const addEvent = async(e) => {
        e.preventDefault();
        
        fd.append('title', title);
        fd.append('s_date', s_date);
        fd.append('e_date', e_date);
        fd.append('s_time', s_time);
        fd.append('e_time', e_time);
        fd.append('location', location);
        fd.append('description', description);
        // fd.append('category_id', category_id);
        fd.append('category_name', category_name);
        fd.append('image', image);
        fd.append('fileName', image.name);
        fd.append('price', price);
        
// console.log(typeof category_name, category_name);

        await axios.post('http://localhost:3046/api/v1/admin/addevent',
        fd,
         {
            headers:{
                Authorization: Cookies.get('adminAccessToken'),
                'content-type': 'multipart/form-data',
            },
        }
    )
        .then((response) => {
            console.log('Response: ', response)
    
            if(response.data.success) {
                alert(response.data.message)
            } else {
                alert(response.data.message)
            }
        }).catch((error) => {
            console.log(error);
            alert(error.response.data.message);
        })
    }


    //-----------------------------------------------------------------------

        // Get All Category Start
    //-----------------------------------------------------------------

    const [allCategory, setAllCategory] = useState([]); 

    useEffect(() => {    
        axios.get('http://localhost:3046/api/v1/admin/showcategory')
        .then((response) => {
            setAllCategory(response.data.message)
            // console.log(response.data.message)
        }).catch((error)=>console.log(error))
    }, []);

    // Get All Category End
    //-----------------------------------------------------------------

    return(
        <div>
            <AdminNavbarHeader/>
            <section className={styles.admin_event_container}>
                <div className={styles.admin_event_text}>
                    <CiLock className={styles.logo}/>
                    <p>Post Event</p>
                </div>
                <div className={styles.form_container}>
                    <form action="#">
                        <p className={styles.file_input}>
                            <input onChange={(e)=>setImage(e.target.files[0])}  type="file" name="file" id="file" />
                            <label>CHOOSE PIC</label>
                        </p>
                        <input type="text" name='title' id='title' placeholder='Title *' value={title} onChange={(e)=> setTitle(e.target.value)} />
                        <input type="date" name="date" id="date"  value={s_date} onChange={(e)=> setS_date(e.target.value)} />
                        <input type="date" name="date" id="date"  value={e_date} onChange={(e)=> setE_date(e.target.value)} />
                        <input type="time" name="time" id="time"  value={s_time} onChange={(e)=> setS_time(e.target.value)} />
                        <input type="time" name="time" id="time"  value={e_time} onChange={(e)=> setE_time(e.target.value)} />
                        <input type="number" name="price" id="price" placeholder='Price'  value={price} onChange={(e)=> setPrice(e.target.value)} />
                        
                        <select name="category" id="category" value={category_name}  onChange={(e)=> setCategoryName(e.target.value)}>
                            <option value="">Select Category</option>
                        {
                                allCategory ? allCategory.map((element, index)=>{
                                    return(
                                        <option key={index} value={element.category_name} >{element.category_name}</option>
                                    )
                                }) : null
                            }
                        </select>

                        <input type="text" name='location' id='location' placeholder='Location'  value={location} onChange={(e)=> setLocation(e.target.value)} />
                        <textarea name="description" id="description" placeholder='Description'  value={description} onChange={(e)=> setDescription(e.target.value)} ></textarea>
                        <input type="submit" value="POST" onClick={addEvent} />
                    </form>
                </div>
            </section>
        </div>
    );
}