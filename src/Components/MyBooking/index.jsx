import styles from "./style.module.css";
import Footer from "../../Components/Footer";
import { BiRupee } from "react-icons/bi";
import MyBookings_1 from "../../images/mybookings/my-bookings-1.jpg";
import MyBookings_2 from "../../images/mybookings/my-bookings-2.jpg";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import NavBar from "../NavBar";
import QRCodeImage from "../../images/qrcode.png";

export default function MyBooking() {
  return (
    <div>
      <NavBar />
      <section className={styles.mybooking_container}>
        <div className={styles.mybooking}>
          <div className={styles.part_1}>
            <img src={QRCodeImage} alt="" />
            <button>Download</button>
          </div>
          <div className={styles.part_2}>
            <p>
              Ticket ID: <br />
              <span>{"a987d9a54d6a87d9q5sd46a"}</span>
            </p>
            <p>
              Location: <br />
              <span>Himalaya Mall</span>
            </p>
            <p>
              Price: <br />
              <span className={styles.mybooking_price}>
                <BiRupee />
                200
              </span>
            </p>
          </div>
          <div className={styles.part_3}>
            <p>
              Date & Time: <br />
              <span>2024-04-13, 03:45</span>
            </p>
            <p>
              Booking Date: <br />
              <span>4/13/2024</span>
            </p>
            <p>
              Title: <br />
              <span>12th fresher party</span>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
