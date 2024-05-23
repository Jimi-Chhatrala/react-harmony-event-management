import styles from './style.module.css';
import Footer from '../../Components/Footer';
import { FaLocationDot } from "react-icons/fa6";
import { BiRupee } from "react-icons/bi";
import NavBar from '../NavBar';
import Image1 from '../../images/event-speaking-man.jpg'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function EventDetail(){
    const [data, setData] = useState();
    const { state } = useLocation();

    useEffect(() => {    
        const fetch  = async () => {
            const data = { _id: state._id };
        await axios.post('http://localhost:3046/api/v1/admin/showevents', data)
        .then((response) => {
            setData(response.data.data)
            console.log('Current event:-> ',response.data.data)
        }).catch((error)=>console.log(error))
    }
    fetch();
    }, []);

    return(
        <div>
            <NavBar/>
            {
                data ?
                        <>
                            <section id={styles.hero}>
                                <img src={data.image} alt='Image'/>
                            </section>
                            <section className={styles.event_details_container}>
                                <div className={styles.event_details_container_1}>
                                    <div>
                                        <h2>{data.title}</h2>
                                        <p><span className={styles.vertical_divider}>{data.description}</span><span className={styles.vertical_divider}>Hindi</span><span className={styles.vertical_divider}>12Yrs+</span><span>{data.s_time}-{data.e_time}</span></p>
                                    </div>
                                    <button>Book</button>
                                </div>
                                <hr />
                                <div className={styles.event_details_container_2}>
                                    <p><span>{data.s_date}</span><span>{data.e_date}</span><span></span><span className={styles.vertical_divider}><FaLocationDot className={styles.location_icon} /> {data.location}</span><span></span><span><BiRupee />{data.price} onwards</span></p>
                                </div>
                            </section>
                        </>
                    : null
            }

            <Footer />
        </div>
    );
}