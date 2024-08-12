import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CartProvider } from "./CartContext";
import "./css/styles.css";
import ContactPage from "./pages/ContactPage";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ShoppingCart from "./pages/ShoppingCart";
import UserProfile from "./pages/Userprofile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Generate dynamic navigation links based on login status
  const dynamicNavLinks = isLoggedIn
    ? [
        { to: "/", label: "Home" },
        { to: "/shopping-cart", label: "Shopping Cart" },
        { to: "/UserProfile", label: "Profile" },
        { to: "/contact-page", label: "Contact Us" },
      ]
    : [
        { to: "/", label: "Home" },
        { to: "/shopping-cart", label: "Shopping Cart" },
        { to: "/login", label: "Login" },
      ];

  return (
    <CartProvider>
      <Router>
        <div className="main-container">
          <header className="header">
            <div className="logo">
              <h1>UrbanCarry</h1>
            </div>
            <nav className="nav">
              {dynamicNavLinks.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/login" element={<Login setLoggedIn={setIsLoggedIn} />} />
            <Route path="/create-account" element={<CreateAccount setLoggedIn={setIsLoggedIn} />} />
            <Route path="/UserProfile" element={<UserProfile setLoggedIn={setIsLoggedIn} />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/contact-page" element={<ContactPage />} />
          </Routes>

          <footer className="footer">
            <p>&copy;2024, Copyright @ Arshit_Final_Project</p>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
