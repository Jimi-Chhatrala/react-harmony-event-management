import './style.css'
import { CiLogin } from "react-icons/ci";
import Logo from '../../images/2.site-logo.png';
import { useNavigate } from 'react-router-dom';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const navRef = useRef();
  const navigate = useNavigate();

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
            <button className='sign-in-btn'  onClick={()=>navigate('/sign-in')}><CiLogin /> SignIn</button>
            </nav>
              <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
              </button>
        </header>
    </div>
  )
}