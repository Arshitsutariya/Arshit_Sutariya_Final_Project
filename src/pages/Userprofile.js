/* ./pages/Login.js */
import React, { useEffect, useState } from "react";
import "../css/styles.css";
import "../css/UserProfile.css";
import { useNavigate } from 'react-router-dom';

function UserProfile({ setLoggedIn }) {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userFormData = localStorage.getItem("userFormData");
    if (userFormData) {
      const userData = JSON.parse(userFormData);
      setUserData(userData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userFormData");
    setLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="main-div">
      {userData ? (
        <div className="user-data">
          <div className="input-container">
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              readOnly
            />
          </div>

          <div className="user-data">
            <div className="input-container">
              <label>Password</label>
              <input
                type="text"
                id="password"
                name="password"
                value={userData.password}
                readOnly
              />
            </div>

            <div className="input-container">
              <label>Shipping Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={userData.shippingAddress}
                readOnly
              />
            </div>

            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
}

export default UserProfile;
