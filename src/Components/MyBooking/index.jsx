import styles from "./style.module.css";
import Footer from "../../Components/Footer";
import { BiRupee } from "react-icons/bi";
import MyBookings_1 from "../../images/mybookings/my-bookings-1.jpg";
import MyBookings_2 from "../../images/mybookings/my-bookings-2.jpg";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import NavBar from "../NavBar";
import QRCodeImage from "../../images/qrcode.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export default function MyBooking() {
  const [myBooking, setMyBooking] = useState();

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`http://localhost:3046/api/v1/users/getbooking`, {
          headers: {
            Authorization: Cookies.get("userAccessToken"),
          },
        })
        .then((response) => {
          setMyBooking(response.data.data);
        })
        .catch((error) => {
          toast.error(error);
        });
    };
    fetch();
  }, []);

  console.log(myBooking);

  return (
    <div>
      <NavBar />
      <section className={styles.mybooking_container}>
        {myBooking?.map((element, index) => {
          const event = element.event_id;
          return (
            <div key={index} className={styles.mybooking}>
              <div className={styles.part_1}>
                <img src={QRCodeImage} alt="" />
                <button>Download</button>
              </div>
              <div className={styles.part_2}>
                <p>
                  Ticket ID: <br />
                  <span>{element._id}</span>
                </p>
                <p>
                  Location: <br />
                  <span>{event.location}</span>
                </p>
                <p>
                  Price: <br />
                  <span className={styles.mybooking_price}>
                    <BiRupee />
                    {event.price}
                  </span>
                </p>
              </div>
              <div className={styles.part_3}>
                <p>
                  Date & Time: <br />
                  <span>
                    {event.s_date} & {event.s_time}
                  </span>
                </p>
                <p>
                  Booking Date: <br />
                  <span>{new Date(event.createdAt).toLocaleDateString()}</span>
                </p>
                <p>
                  Title: <br />
                  <span>{event.title}</span>
                </p>
              </div>
            </div>
          );
        })}
      </section>
      <Footer />
    </div>
  );
}
