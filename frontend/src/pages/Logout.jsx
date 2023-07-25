import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Logout() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        width: '157vh'
      }}
    >
      <div
        style={{
          textAlign: 'center',
          maxWidth: '300px',
          padding: '80px',
          border: '3px solid #000000',
          borderRadius: '5px',
          backgroundColor: '#EBCCAB', // Tan color
        }}
      >
        <h2 style={{ marginBottom: '40px' }}>Hello, {user.userName}!</h2>
        <p style={{ marginBottom: '50px', fontSize: '21px', }}>Are you sure you want to sign out?</p>
        <button
          onClick={handleClick}
          style={{
            padding: '24px 48px',
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#007bff',
            cursor: 'pointer',
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
