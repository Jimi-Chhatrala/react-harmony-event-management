import styles from './style.module.css';
import Footer from '../../Components/Footer';
import { BiRupee } from "react-icons/bi";
import NavBar from '../NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import Image1 from '../../images/2.hall.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Events(){
    const [data, setData] = useState();
    const { state } = useLocation();

    useEffect(() => {    
        const fetch  = async () => {
            const data = { category_id: state._id };
        await axios.post('http://localhost:3046/api/v1/admin/showeventsbycategory', data)
        .then((response) => {
            setData(response.data.data)
            console.log(response.data.data)
        }).catch((error)=>console.log(error))
    }
    fetch();
    }, []);


  const navigate = useNavigate();

    return(
        <div>
            <NavBar/>
            <section id={styles.hero}></section>
            <section className={styles.event_container}>
                {
                    data ? data.map((element, index)=>{
                        return(
                            <div className={styles.event} onClick={()=>navigate('/events/event/event-detail')}> 
                                <div className={`${styles.event_image}`}>
                                    <img src={element.image} alt='Image'/>
                                </div>
                                <div className={styles.event_text_1}>
                                    <date>{element.s_date}</date>
                                </div>
                                <div className={styles.event_text_2}>
                                    <h3>{element.title}</h3>
                                    <p>{element.location}</p>
                                    <p className={styles.gallery_text_2}>{element.location}</p>
                                    <p><BiRupee className={styles.gallery_text_icon}/><span>{element.price} onwards</span></p>
                                </div>
                            </div>
                        )
                    }):null
                }
                
            </section>
            <Footer />
        </div>
    );
}