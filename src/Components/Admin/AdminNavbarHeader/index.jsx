import styles from './style.module.css';
import { PiUserListFill } from "react-icons/pi";
import { IoMdCalendar } from "react-icons/io";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaShapes } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { Link, Outlet } from 'react-router-dom';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function AdminNavbarHeader(){
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsive_nav);
    console.log("shownavbar");
  };
  
    return(
        <div>
            <section className={styles.admin_container}>
                <div className={`${styles.navbar}`}  ref={navRef}>
                <button className={`${styles.navbar_btn} ${styles.nav_close_btn}`} onClick={showNavbar}>
                            <FaTimes />
                        </button>
                    <hr className={styles.first_hr} />
                    <div>
                        <ul>

                            <li className={styles.nav_btn}>
                                <Link className={styles.a} to="/admin/all-user"><PiUserListFill className={styles.nav_btn_icon} /><span className={styles.nav_btn_text}>User List</span></Link>
                            </li>
                            <li className={styles.nav_btn}>
                                <Link className={styles.a} to="/admin/add-event"><IoMdCalendar className={styles.nav_btn_icon} /><span className={styles.nav_btn_text}>Event Post</span></Link>
                            </li>
                            <li className={styles.nav_btn}>
                                <Link className={styles.a} to="/my-bookings"><CiBookmarkPlus className={styles.nav_btn_icon} /><span className={styles.nav_btn_text}>Book Events</span></Link>
                            </li>
                            <li className={styles.nav_btn}>
                                <Link className={styles.a} to="/admin/category"><FaShapes className={styles.nav_btn_icon} /><span className={styles.nav_btn_text}>Post Category</span></Link>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <p>Authentication</p>
                    <ul>
                        <li className={styles.nav_btn}>
                            <Link className={styles.a} to="/admin/login"><LuLogOut className={styles.nav_btn_icon} /><span className={styles.nav_btn_text}>Log Out</span></Link>
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
                            <img src="" alt="" className={styles.admin_image} />
                            <div>
                                <p className={styles.admin_text}>Event Management</p>
                                <p className={styles.admin_text}>Admin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Outlet />
        </div>
    );
}