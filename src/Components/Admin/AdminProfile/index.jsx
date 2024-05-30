import styles from "./style.module.css";
import AdminNavbarHeader from "../AdminNavbarHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function PersonalDetailPage() {
  const [currentAdmin, setCurrentAdmin] = useState();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setFullName(currentAdmin?.fullName);
    setEmail(currentAdmin?.email);
  }, [currentAdmin]);

  const getCurrentAdmin = async () => {
    axios
      .get("http://localhost:3046/api/v1/admin/getcurrentAdmin", {
        headers: {
          Authorization: Cookies.get("adminAccessToken"),
        },
      })
      .then((response) => {
        setCurrentAdmin(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCurrentAdmin();
  }, []);

  const updateAdminDetails = async (e) => {
    e.preventDefault();
    const data = { fullName, email };

    await axios
      .post("http://localhost:3046/api/v1/admin/update", data, {
        headers: {
          Authorization: Cookies.get("adminAccessToken"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          alert(response.data.message);
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className={styles.admin_profile_details_container}>
      <h3>Personal Details</h3>
      <form action="#">
        <div>
          <label htmlFor="fullname">Full Name:</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input type="button" value="Update" onClick={updateAdminDetails} />
      </form>
    </div>
  );
}

function ChangePasswordPage() {
  return (
    <div className={styles.admin_profile_details_container}>
      <h3>Change Password</h3>
      <form action="#">
        <div>
          <label htmlFor="old-password">Old Password:</label>
          <input type="password" id="old-password" name="old-password" />
        </div>
        <div>
          <label htmlFor="new-password">New Password:</label>
          <input type="password" id="new-password" name="new-password" />
        </div>
        <div>
          <label htmlFor="confirm-new-password">Confirm New Password:</label>
          <input
            type="password"
            id="confirm-new-password"
            name="confirm-new-password"
          />
        </div>
        <input type="button" value="Update" />
      </form>
    </div>
  );
}

export default function AdminProfile() {
  const [activeButton, setActiveButton] = useState("personalDetail");

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div>
      <AdminNavbarHeader />
      <section className={styles.admin_profile_container}>
        <div className={styles.admin_profile_image_container}>
          <img src="" alt="" />
        </div>
        <div className={styles.action_buttons}>
          <button onClick={() => handleClick("personalDetail")}>
            Personal Detail
          </button>
          <button onClick={() => handleClick("changePassword")}>
            Change Password
          </button>
        </div>
        {activeButton === "personalDetail" && <PersonalDetailPage />}
        {activeButton === "changePassword" && <ChangePasswordPage />}
      </section>
    </div>
  );
}
