// import { Cookies } from 'react-cookie';
import AdminNavbarHeader from "../AdminNavbarHeader";
import styles from "./style.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

const token = Cookies.get("adminAccessToken");

export default function AdminShowAllEvents() {
  const [allEvents, setAllEvents] = useState();

  const showAllEvents = async () => {
    axios
      .get("http://localhost:3046/api/v1/admin/showallevents")
      .then((response) => {
        setAllEvents(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    showAllEvents();
  }, []);

  return (
    <div>
      <AdminNavbarHeader />
      <section className={styles.admin_all_user_container}>
        <div className={styles.fixTableHead}>
          <table>
            <thead>
              <tr className={styles.table_header}>
                <th>No</th>
                <th>Category Id</th>
                <th>Description</th>
                <th>End Date</th>
                <th>End Time</th>
                <th>Event Status</th>
                <th>Image</th>
                <th>Location</th>
                <th>Price</th>
                <th>Start Date</th>
                <th>Start Time</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {allEvents
                ? allEvents.map((element, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{element.category_id}</td>
                        <td>{element.description}</td>
                        <td>{element.e_date}</td>
                        <td>{element.e_time}</td>
                        <td>{element.event_status}</td>
                        <td>
                          <img src={element.image} style={{ width: "100px" }} />
                        </td>
                        <td>{element.location}</td>
                        <td>{element.price}</td>
                        <td>{element.s_date}</td>
                        <td>{element.s_time}</td>
                        <td>{element.title}</td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
