/* ./pages/Login.js */
import React, { useState } from 'react';
import '../css/styles.css';
import { Link, useNavigate } from 'react-router-dom';

function Login({ setLoggedIn }) {
  const navigate = useNavigate();

  // State to manage form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    shippingAddress: 'demo address', // Default demo address
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password
    if (!isEmailValid(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!isPasswordValid(formData.password)) {
      alert('Please enter a valid password.');
      return;
    }

    // Save form data to local storage and navigate to UserProfile
    localStorage.setItem('userFormData', JSON.stringify(formData));
    setLoggedIn(true);
    navigate('/UserProfile');
  };

  // Validate email format
  const isEmailValid = (email) => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(email);
  };

  // Validate password length
  const isPasswordValid = (password) => password.length >= 6;

  return (
    <div className="main-div">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
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
            placeholder="Enter Password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>

        <button type="submit">Login</button>
      </form>

      {/* Links to create account and forgot password pages */}
      <p>
        Don't have an account? <Link to="/create-account">Create one</Link>
      </p>
      <br />
      <p>
        Forgot password? <Link to="/forgot-password">Forgot password</Link>
      </p>
    </div>
  );
}

export default Login;
