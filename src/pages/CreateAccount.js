/* ./pages/CreateAccount.js */
import React, { useState } from "react";
import "../css/LoginSignup.css";
import { useNavigate } from "react-router-dom";

function CreateAccount({ setLoggedIn }) {
  const navigate = useNavigate();

  // State to manage form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    shippingAddress: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmailValid(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!isPasswordValid(formData.password)) {
      alert("Please enter a valid password.");
      return;
    }

    if (!formData.shippingAddress) {
      alert("Shipping Address is required");
      return;
    }

    // Save user data to local storage and navigate to UserProfile
    localStorage.setItem("userFormData", JSON.stringify(formData));
    setLoggedIn(true);
    navigate("/UserProfile");
  };

  // Validate email format
  const isEmailValid = (email) => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(email);
  };

  // Validate password length
  const isPasswordValid = (password) => password.length >= 8;

  return (
    <div className="main-div">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <div className="input-container">
          <label htmlFor="shippingAddress">Shipping Address</label>
          <textarea
            id="shippingAddress"
            name="shippingAddress"
            rows="4"
            required
            value={formData.shippingAddress}
            onChange={(e) =>
              setFormData({ ...formData, shippingAddress: e.target.value })
            }
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccount;
