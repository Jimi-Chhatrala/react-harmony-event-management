import './style.css'
import { CiLogin } from "react-icons/ci";
import Logo from '../../images/2.site-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import axios from 'axios';
import Cookies from 'js-cookie';

export default function NavBar() {
  const navRef = useRef();
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(); 
  // -----------------------------------------------------
  // Get Current User

  useEffect(() => {    
      axios.get('http://localhost:3046/api/v1/users/getcurrentUser', {
          headers:{
              Authorization: Cookies.get('userAccessToken'),
          },
      })
      .then((response) => {
          setCurrentUser(response.data.data)
          console.log(response.data.data)
      }).catch((error)=>console.log(error))
  }, []);

  // -----------------------------------------------------

  const userLogout = (e) => {
    e.preventDefault();

    Cookies.remove('userAccessToken')
    navigate('/')
  }
  
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
        <header>
            <div className="logo">
                <img src={Logo} alt="logo"/>
            </div>
            <nav ref={navRef}>
                    <a onClick={()=>navigate('/')}>HOME</a>
                    <a onClick={()=>navigate('/about')}>ABOUT</a>
                    <a onClick={()=>navigate('/events')}>EVENTS</a>
                    <a onClick={()=>navigate('/gallery')}>GALLERY</a>
                    <a onClick={()=>navigate('/contact')}>CONTACT</a>
                  {/* <li>
                    <a onClick={()=>navigate('/change-detail')}>ChangeDetail</a>
                  </li>
                  <li>
                    <a onClick={()=>navigate('/events/event')}>Event</a>
                  </li>
                  <li>
                    <a onClick={()=>navigate('/events/event/event-detail')}>Event Detail</a>
                  </li>
                  <li>
                    <a onClick={()=>navigate('/my-bookings')}>My Bookings</a>
                  </li> */}
                  <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                  </button>
                  <div>
                    {
                      currentUser ?
                        <div className="profile-login-info-container">
                        <div className="profile-container">
                            <img src={currentUser ? currentUser.avatar : "https://res.cloudinary.com/dtdlad1ud/image/upload/v1703939018/yl9frkeayfp9wftlfz8l.jpg"} alt="Profile Image" className="profile-image" />
                        </div>
                      <div class="dropdown">
                        <button class="dropbtn">{currentUser ? currentUser.fullName : null} 
                          <FaCaretDown />
                        </button>
                        <div class="dropdown-content">
                          <Link to="/account">Account</Link>
                          <a href="#">My Booking</a>
                          <Link onClick={userLogout}>Log Out</Link>
                        </div>
                      </div>
                    </div>
                      :
                        <button className='sign-in-btn'  onClick={()=>navigate('/sign-in')}><CiLogin /> LOGIN</button>
                      }
                    
                    

                  </div>
            </nav>
              <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
              </button>
        </header>
    </div>
  )
}