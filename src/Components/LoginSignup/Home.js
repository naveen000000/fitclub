import React from 'react';
import axios from 'axios';

const Home = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });
      if (response.status === 200) {
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
