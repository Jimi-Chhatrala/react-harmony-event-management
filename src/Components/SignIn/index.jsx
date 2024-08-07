import styles from "./style.module.css";
import ChangeDetailPageImage from "../../images/ChangeDetailPageImage.png";
import { CiLock } from "react-icons/ci";
// import { FaStar } from "react-icons/fa";
import NavBar from "../NavBar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useUserSignInMutation } from "../userApi";

export default function SignIn() {
  const [mobile_no, setPhno] = useState();
  const [password, setPassword] = useState();

  // const data = { mobile_no, password }; // 9328608883 , 12345
  const [responseData, { data, isSuccess, isError }] = useUserSignInMutation();

  const signIn = async (e) => {
    e.preventDefault();
    if (mobile_no && password) {
      try {
        const stringifyData = JSON.stringify({ mobile_no, password });
        const response = await responseData(stringifyData);

        if (response.data.success) {
          Cookies.set("userAccessToken", response.data.accessToken);
          toast.success(response.data.message);
          navigate("/");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
    // await axios
    //   .post(`http://localhost:3046/api/v1/users/login`, data)
    //   .then((response) => {
    //     console.log(response);
    //     if (response.data.success) {
    //       Cookies.set("userAccessToken", response.data.accessToken);
    //       toast.success(response.data.message);
    //       navigate("/");
    //     } else {
    //       toast.error(response.data.message);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
            <p className={styles.sign_in_text}>Sign In</p>
          </div>
          <form>
            <div>
              <input
                type="number"
                id="mobile_no"
                placeholder="Mobile Number *"
                value={mobile_no}
                onChange={(e) => setPhno(e.target.value)}
              />
            </div>

            <div>
              <input
                type="password"
                id="password"
                placeholder="Password *"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <input type="checkbox" id="remember_me" />
            <label htmlFor="remember_me">Remember me</label>
            <br />

            <div>
              <input type="submit" onClick={signIn} value={"SIGN IN"} />
            </div>
          </form>
          <p className={styles.other_links}>
            <Link to="/forgot_password">Forgot password ?</Link>
            <a onClick={() => navigate("/sign-up")}>
              Don't have an account ? Sign Up
            </a>
          </p>
          <p>Copyright @ Your Website 2023</p>
        </div>
      </section>
    </div>
  );
}
