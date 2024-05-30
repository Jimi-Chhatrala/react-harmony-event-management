// import { Cookies } from 'react-cookie';
import AdminNavbarHeader from "../AdminNavbarHeader";
import styles from "./style.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

const token = Cookies.get("adminAccessToken");

export default function AdminAllContactMessages() {
  const [allMessages, setAllMessages] = useState();

  const getAllContactMessages = async () => {
    axios
      .get("http://localhost:3046/api/v1/contact/allmessage", {
        headers: {
          Authorization: Cookies.get("adminAccessToken"),
        },
      })
      .then((response) => {
        setAllMessages(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllContactMessages();
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
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {allMessages
                ? allMessages.map((element, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>

                        <td>{element.fullName}</td>
                        <td>{element.email}</td>
                        <td>{element.mobile_no}</td>
                        <td>{element.message}</td>
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
