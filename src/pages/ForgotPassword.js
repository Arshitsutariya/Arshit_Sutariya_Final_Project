/* ./pages/ForgotPassword.js */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/styles.css";

function ForgotPassword() {
  const navigate = useNavigate();

  // State to manage form data
  const [formData, setFormData] = useState({
    email: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email input
    if (!isEmailValid(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Placeholder alert to simulate password retrieval
    alert("This alert will return password from the database.");
    navigate("/login"); // Redirect to login page
  };

  // Validate email format
  const isEmailValid = (email) => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(email);
  };

  return (
    <div className="main-div">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Registered Email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
