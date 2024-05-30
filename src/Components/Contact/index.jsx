import styles from "./style.module.css";
import ForestImage from "../../images/contact-form-image.png";
import { CiLock } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  // Add New Event
  //-----------------------------------------------------------------------
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [mobile_no, setMobileNo] = useState();
  const [message, setMessage] = useState();

  const fd = new FormData();

  const addContact = async (e) => {
    e.preventDefault();

    fd.append("fullName", fullName);
    fd.append("email", email);
    fd.append("mobile_no", mobile_no);
    fd.append("message", message);

    await axios
      .post("http://localhost:3046/api/v1/contact/sendmessage", fd)
      .then((response) => {
        console.log("Response: ", response);

        if (response.data.success) {
          setFullName("");
          setEmail("");
          setMobileNo("");
          setMessage("");
          alert(response.data.message);
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
      });
  };

  //-----------------------------------------------------------------------

  return (
    <div>
      <NavBar />
      <section id={styles.hero}>
        <div className={styles.contact_us}>
          <p className={styles.contact_1}>CONTACT US NOW</p>
          <p className={styles.contact_2}>
            <span>KEEP</span> IN TOUCH
          </p>
          <div>
            <span className={styles.contact_3_1}>Home</span>
            <span className={styles.contact_3_2}>Contact Us</span>
          </div>
        </div>
      </section>
      <section className={styles.contact_us_form}>
        <div className={styles.contact_image}>
          <img src={ForestImage} alt="Forest" />
        </div>
        <div className={styles.contact_form}>
          <div className={styles.contact_us_label}>
            <p className={styles.contact_us_icon}>
              <CiLock className={styles.lock_icon} />
            </p>
            <p className={styles.contact_us_text}>Contact Us</p>
            <form>
              <input
                type="text"
                id="name"
                placeholder="name *"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <br />
              <input
                type="email"
                id="email"
                placeholder="email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              {/* <input type='text' id='country' placeholder='country *'/><br/> */}
              <input
                type="number"
                id="phone_number"
                placeholder="phone number *"
                value={mobile_no}
                onChange={(e) => setMobileNo(e.target.value)}
              />
              <br />
              {/* <input type='password' id='password' placeholder='password *'/><br/> */}
              <textarea
                rows={5}
                placeholder="Messsage"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <input type="submit" value={"Send"} onClick={addContact} />
            </form>
          </div>
        </div>
      </section>
      <section className={styles.location}>
        <div className={styles.location_label}>
          <p>
            <FaStar />
            <FaStar /> <span>Your Location</span> <FaStar />
            <FaStar />
          </p>
        </div>
      </section>
      <section>
        <div className={styles.google_map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15249885.318783779!2d82.75252935!3d21.0680074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1714570286601!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Footer />
    </div>
  );
}
