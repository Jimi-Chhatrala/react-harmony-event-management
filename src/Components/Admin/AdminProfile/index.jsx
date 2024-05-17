import styles from './style.module.css';
import AdminNavbarHeader from '../AdminNavbarHeader';
import { useState } from 'react';

function PersonalDetailPage(){
    return(
        <div className={styles.admin_profile_details_container}>
            <h3>Personal Details</h3>
            <form action="#">
                <div>

                <label htmlFor="fullname">Full Name:</label>
                <input type="text" id='fullname' name='fullname' />
                </div>
                <div>

                <label htmlFor="email">Email Address:</label>
                <input type="email" id='email' name='email' />
                </div>
                <input type="button" value="Update" />
            </form>
        </div>
    );
}

function ChangePasswordPage(){
    return(
        <div className={styles.admin_profile_details_container}>
            <h3>Change Password</h3>
            <form action="#">
                <div>

                <label htmlFor="old-password">Old Password:</label>
                <input type="password" id='old-password' name='old-password' />
                </div>
                <div>

                <label htmlFor="new-password">New Password:</label>
                <input type="password" id='new-password' name='new-password' />
                </div>
                <div>

                <label htmlFor="confirm-new-password">Confirm New Password:</label>
                <input type="password" id='confirm-new-password' name='confirm-new-password' />
                </div>
                <input type="button" value="Update" />
            </form>
        </div>
    );
}

export default function AdminProfile(){
    const [activeButton, setActiveButton] = useState('personalDetail');
    const handleClick = (button) => {
        setActiveButton(button);
    };

    return(
        <div>
            <AdminNavbarHeader/>
            <section className={styles.admin_profile_container}>
                <div className={styles.admin_profile_image_container}>
                    <img src="" alt="" />
                </div>
                <div className={styles.action_buttons}>
                    <button onClick={() => handleClick('personalDetail')}>Personal Detail</button>
                    <button onClick={() => handleClick('changePassword')}>Change Password</button>
                </div>
                {activeButton === 'personalDetail' && <PersonalDetailPage />}
                {activeButton === 'changePassword' && <ChangePasswordPage />}

            </section>
        </div>
    );
}