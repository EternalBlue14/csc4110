// Logout.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import './Logout.css';

export default function Logout() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div className="container">
      <div className="logout-box">
        <h2>Hello, {user.userName}!</h2>
        <p>Are you sure you want to sign out?</p>
        <button onClick={handleClick}>Sign Out</button>
      </div>
    </div>
  );
}
