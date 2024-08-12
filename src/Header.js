// Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn }) => {
    console.log('isLoggedIn:', isLoggedIn);

  const dynamicNavLinks = [
    { to: '/', label: 'Home' },
    { to: '/shopping-cart', label: 'Shopping Cart' },
  ];

  if (isLoggedIn) {
    dynamicNavLinks.push({ to: '/UserProfile', label: 'Profile' });
  } else {
    dynamicNavLinks.push({ to: '/login', label: 'Login' });
  }

  return (
    <header className="header">
      <div className="logo">
        <h1>Hola Site</h1>
      </div>
      <nav className="nav">
        {dynamicNavLinks.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
