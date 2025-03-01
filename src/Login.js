import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const Center = { textAlign: 'center' };
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Function to validate if input is a .edu email
  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.edu$/.test(email);
  };

  // Handle user input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setErrorMessage(''); // Clear error message when typing
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!validateEmail(inputValue)) {
      setErrorMessage('❌ Please enter a valid .edu email.');
    } else {
      setErrorMessage('✅ Email successfully submitted!');
      // Here you can add logic to set email to user_id
      setTimeout(() => navigate('/home'), 1000);
    }
  };

  return (
    <div>
      <h1 style={Center}>Dormmate</h1>
      <h3 style={Center}>Please enter your .edu email</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your .edu email"
        style={{ display: 'block', margin: '0 auto', textAlign: 'center', padding: '8px', width: '250px' }}
      />
      {errorMessage && <p style={{ color: errorMessage.includes('❌') ? 'red' : 'green', textAlign: 'center' }}>{errorMessage}</p>}
      <button
        onClick={handleSubmit}
        style={{ display: 'block', margin: '10px auto', padding: '10px 20px', cursor: 'pointer' }}
      >
        Submit
      </button>

    </div>
  );
}

export default Login;
