import styles from "./style.module.css";
import Footer from "../../Components/Footer";
import { FaLocationDot } from "react-icons/fa6";
import { BiRupee } from "react-icons/bi";
import NavBar from "../NavBar";
import Image1 from "../../images/event-speaking-man.jpg";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export default function EventDetail() {
  const [data, setData] = useState();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("ID:", id);

  useEffect(() => {
    const fetch = async () => {
      //   const data = { _id: state._id };
      const data = { _id: id };
      await axios
        .post("http://localhost:3046/api/v1/admin/showevents", data)
        .then((response) => {
          setData(response.data.data);
          console.log("Current event:-> ", response.data.data);
        })
        .catch((error) => console.log(error));
    };
    fetch();
  }, []);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount, event_id) => {
    console.log(amount, event_id);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("you are offline");
      return;
    }

    const option = {
      key: "rzp_test_dEYhZg38SrkYMD",
      currency: "INR",
      amount: amount * 100,
      name: "data",
      description: "Thanks for buying products from the our website",
      image:
        "https://res.cloudinary.com/dtdlad1ud/image/upload/v1707733051/uhwydfqry5wqwkaazbbk.jpg",
      handler: async function (response) {
        await axios
          .post(
            "http://localhost:3046/api/v1/users/booking",
            { event_id },
            {
              headers: {
                Authorization: Cookies.get("userAccessToken"),
              },
            }
          )
          .then((res) => {
            toast.success(res.data.message);
            navigate("/my-bookings");
          })
          .catch((err) => console.log(err));
      },
      prefill: {
        name: "hello",
      },
    };

    const paymentObject = new window.Razorpay(option);
    paymentObject.open();
  };

  return (
    <div>
      <NavBar />
      {data ? (
        <>
          <section id={styles.hero}>
            <img src={data.image} alt="Image" />
          </section>
          <section className={styles.event_details_container}>
            <div className={styles.event_details_container_1}>
              <div>
                <h2>{data.title}</h2>
                <p>
                  <span className={styles.vertical_divider}>
                    {data.description}
                  </span>
                  <span className={styles.vertical_divider}>Hindi</span>
                  <span className={styles.vertical_divider}>12Yrs+</span>
                  <span>
                    {data.s_time}-{data.e_time}
                  </span>
                </p>
              </div>
              <button onClick={() => displayRazorpay(data.price, id)}>
                Book
              </button>
            </div>
            <hr />
            <div className={styles.event_details_container_2}>
              <p>
                <span>{data.s_date}</span>
                <span>{data.e_date}</span>
                <span></span>
                <span className={styles.vertical_divider}>
                  <FaLocationDot className={styles.location_icon} />{" "}
                  {data.location}
                </span>
                <span></span>
                <span>
                  <BiRupee />
                  {data.price} onwards
                </span>
              </p>
            </div>
          </section>
        </>
      ) : null}

      <Footer />
    </div>
  );
}
