import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});
    setMessage('');
  };

  const validateForm = () => {
    const validationErrors = {};
    if (!email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Email is invalid';
    }
    if (!password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
    }
    if (!isLogin && password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }
    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate the form fields
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop further execution if there are validation errors
    }
  
    try {
      // Determine the URL based on login or signup
      const url = isLogin ? 'http://localhost:5000/api/auth/login' : 'http://localhost:5000/api/auth/signup';
  
      // Perform the fetch request
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Send email and password as JSON
      });
  
      // Check if the response is not ok (status code not in the range 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}, Status Text: ${response.statusText}`);
      }
  
      // Parse the JSON response
      const result = await response.json();
  
      // Check if the result indicates success
      if (result.success) {
        if (isLogin) {
          setMessage('Login successful');
          window.location.href = '/home'; // Redirect after successful login
        } else {
          setMessage('Signup successful, please log in.'); // Show message after successful signup
          setIsLogin(true); // Switch to login form after signup
        }
      } else {
        throw new Error(result.message || 'Unexpected error occurred'); // Handle unexpected errors
      }
    } catch (error) {
      // Log detailed error information and update the UI
      console.error('Error during authentication:', error);
      setErrors({ auth: error.message }); // Set error message in state to display in the UI
    }
  };
  

  return (
    <div className="login-signup-container">
      <div className="form-container">
        <h2>{isLogin ? 'Login' : 'Signup'}</h2>
        <form onSubmit={handleSubmit} className="form-box">
          <div className="inputbox">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email</label>
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="inputbox">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          {!isLogin && (
            <div className="inputbox">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <label>Confirm Password</label>
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
            </div>
          )}
          <button id="form-button" type="submit">
            {isLogin ? 'Log in' : 'Sign up'}
          </button>
          {message && <p className="success-message">{message}</p>}
          {errors.auth && <p className="error-message">{errors.auth}</p>}
        </form>
        <button className="toggle-button" onClick={handleToggleForm}>
          {isLogin ? 'Don\'t have an account? Sign up' : 'Already have an account? Log in'}
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
