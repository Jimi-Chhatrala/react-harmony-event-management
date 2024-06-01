import styles from "./style.module.css";
import ChangeDetailPageImage from "../../images/ChangeDetailPageImage.png";
import { CiLock } from "react-icons/ci";
// import { FaStar } from "react-icons/fa";
import NavBar from "../NavBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function ForgotPassword() {
  const [mobile_no, setMobile_no] = useState();
  const [otp, setOTP] = useState();
  const [password, setPassword] = useState();
  const [c_password, setC_Password] = useState();
  const [id, setId] = useState();
  const [show, setShow] = useState(false);
  const data = { mobile_no, password }; // 9328608883 , 12345

  const sendOTP = async () => {
    const data = { mobile_no };
    await axios
      .post(`http://localhost:3046/api/v1/users/sendotp`, data)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          setShow(true);
          alert(response.data.message);
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const verifyOTP = async () => {
    const data = { mobile_no, otp };

    await axios
      .post(`http://localhost:3046/api/v1/users/sendotp`, data)
      .then((res) => {
        if (res.data.success) {
          alert(res.data.message);
          setMobile_no("");
          setOTP("");
          setPassword("");
          setC_Password("");
          setId(res.data.id);
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => alert(err));
  };

  const pass = async () => {
    const data = { id, password };

    if (password == c_password) {
      await axios
        .post(`http://localhost:3046/api/v1/users/forgotpassword`, data)
        .then((response) => {
          if (response.data.success) {
            alert(response.data.message);
            navigate("/sign-in");
          } else {
            alert(response.data.message);
          }
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert(`Password don't match.`);
    }
  };

  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <section className={styles.sign_in_form}>
        <div className={styles.contact_image}>
          <img src={ChangeDetailPageImage} alt="Forest" />
        </div>
        <div className={styles.contact_form}>
          <div className={styles.sign_in_label}>
            <p className={styles.sign_in_icon}>
              <CiLock className={styles.lock_icon} />
            </p>
            <p className={styles.sign_in_text}>Forgot Password</p>
          </div>
          <form>
            <div>
              <input
                type="number"
                id="mobile_no"
                placeholder="Enter Mobile Number To Send OTP *"
                value={mobile_no}
                onChange={(e) => setMobile_no(e.target.value)}
              />
            </div>

            {/* <div>
              <input
                type="password"
                id="password"
                placeholder="Password *"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div> */}

            <div>
              <input type="submit" onClick={sendOTP} value={"SEND OTP"} />
            </div>
          </form>
          {/* <p className={styles.other_links}>
            <a href="#">Forgot password ?</a>
            <a onClick={() => navigate("/sign-up")}>
              Don't have an account ? Sign Up
            </a>
          </p> */}
          {/* <p>Copyright @ Your Website 2023</p> */}
        </div>
      </section>
    </div>
  );
}
