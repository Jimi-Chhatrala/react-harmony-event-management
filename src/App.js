import logo from "./logo.svg";
import "./App.css";
// import Home from './component/Home1'
// import About from './component/About1'
// import Login from './component/Login1'
// import Headernav from './component/Headernav'

import Home from "./Components/Home";
import About from "./Components/About";
import Events from "./Components/Events";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import ChangeDetail from "./Components/ChangeDetail";
import Event from "./Components/Event";
import EventDetail from "./Components/EventDetail";
import MyBookings from "./Components/MyBookings";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminNavbarHeader from "./Components/Admin/AdminNavbarHeader";
import AdminAllUser from "./Components/Admin/AdminAllUser";
import AdminEvent from "./Components/Admin/AdminEvent";
import AdminCategory from "./Components/Admin/AdminCategory";
import AdminProfile from "./Components/Admin/AdminProfile";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Account from "./Components/Account";
import UserChangePassword from "./Components/UserChangePassword";
import ForgotPassword from "./Components/ForgotPassword";
import AdminAllContactMessages from "./Components/Admin/AdminAllContactMessages";
import AdminShowAllEvents from "./Components/Admin/AdminShowAllEvents";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        {/* <NavBar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/change-detail" element={<ChangeDetail />} />
          <Route path="/events/event" element={<Event />} />
          <Route
            path="/events/event/event-detail/:id"
            element={<EventDetail />}
          />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
          <Route path="/changepass" element={<UserChangePassword />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Navigate to="/admin/login" />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/navbar-header" element={<AdminNavbarHeader />} />
          <Route path="/admin/all-user" element={<AdminAllUser />} />
          <Route path="/admin/add-event" element={<AdminEvent />} />
          <Route path="/admin/category" element={<AdminCategory />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route
            path="/admin/show-all-events"
            element={<AdminShowAllEvents />}
          />
          <Route
            path="/admin/allcontactmessages"
            element={<AdminAllContactMessages />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
