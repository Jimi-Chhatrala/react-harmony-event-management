import styles from "./style.module.css";
import { PiUserListFill } from "react-icons/pi";
import { IoMdCalendar } from "react-icons/io";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaShapes } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Cookies from "js-cookie";
import axios from "axios";
import { RiAdminFill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { MdEventRepeat } from "react-icons/md";

const adminToken = Cookies.get("adminAccessToken");

export default function AdminNavbarHeader() {
  const [currentAdmin, setCurrentAdmin] = useState();

  const navigate = useNavigate();
  const adminLogout = (e) => {
    e.preventDefault();

    Cookies.remove("adminAccessToken");
    navigate("/admin/login");
  };

  // -------------------------------------------------------
  //   Get Current Admin

  const getCurrentAdmin = async () => {
    await axios
      .get("http://localhost:3046/api/v1/admin/getcurrentAdmin", {
        headers: {
          Authorization: adminToken,
        },
      })
      .then((response) => {
        setCurrentAdmin(response.data.data);
        console.log("Current Admin Data", response.data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCurrentAdmin();
  }, []);

  //   Get Current Admin
  // -------------------------------------------------------

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsive_nav);
    console.log("shownavbar");
  };

  return (
    <div>
      <section className={styles.admin_container}>
        <div className={`${styles.navbar}`} ref={navRef}>
          <button
            className={`${styles.navbar_btn} ${styles.nav_close_btn}`}
            onClick={showNavbar}
          >
            <FaTimes />
          </button>
          <hr className={styles.first_hr} />
          <div>
            <ul>
              <li className={styles.nav_btn}>
                <Link className={styles.a} to="/admin/all-user">
                  <PiUserListFill className={styles.nav_btn_icon} />
                  <span className={styles.nav_btn_text}>User List</span>
                </Link>
              </li>
              <li className={styles.nav_btn}>
                <Link className={styles.a} to="/admin/add-event">
                  <IoMdCalendar className={styles.nav_btn_icon} />
                  <span className={styles.nav_btn_text}>Event Post</span>
                </Link>
              </li>
              <li className={styles.nav_btn}>
                <Link className={styles.a} to="/admin/show-all-events">
                  <MdEventRepeat className={styles.nav_btn_icon} />
                  <span className={styles.nav_btn_text}>Show All Events</span>
                </Link>
              </li>
              <li className={styles.nav_btn}>
                <Link className={styles.a} to="/my-bookings">
                  <CiBookmarkPlus className={styles.nav_btn_icon} />
                  <span className={styles.nav_btn_text}>Book Events</span>
                </Link>
              </li>
              <li className={styles.nav_btn}>
                <Link className={styles.a} to="/admin/category">
                  <FaShapes className={styles.nav_btn_icon} />
                  <span className={styles.nav_btn_text}>Post Category</span>
                </Link>
              </li>
              <li className={styles.nav_btn}>
                <Link className={styles.a} to="/admin/allcontactmessages">
                  <MdMessage className={styles.nav_btn_icon} />
                  <span className={styles.nav_btn_text}>Messages</span>
                </Link>
              </li>
            </ul>
          </div>
          <hr />
          <p>Authentication</p>
          <ul>
            <li className={styles.nav_btn}>
              <Link className={styles.a} to="/admin/profile">
                <RiAdminFill className={styles.nav_btn_icon} />
                <span className={styles.nav_btn_text}>Admin Profile</span>
              </Link>
            </li>
            <li className={styles.nav_btn}>
              <Link className={styles.a} onClick={adminLogout}>
                <LuLogOut className={styles.nav_btn_icon} />
                <span className={styles.nav_btn_text}>Log Out</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.header}>
          <div>
            <button className={styles.navbar_btn} onClick={showNavbar}>
              <FaBars />
            </button>
            <h3 className={styles.admin_text}>Admin</h3>
          </div>
          <div>
            <div className={styles.admin_details_container}>
              <img
                src="https://res.cloudinary.com/dtdlad1ud/image/upload/v1703939018/yl9frkeayfp9wftlfz8l.jpg"
                alt=""
                className={styles.admin_image}
              />
              <div>
                <p className={styles.admin_text}>{currentAdmin?.fullName}</p>
                <p className={styles.admin_text}>{currentAdmin?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </div>
  );
}
