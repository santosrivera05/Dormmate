import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const Center = { textAlign: 'center' };
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [isVisible, setIsVisible] = useState(false);

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

  //dropdown
      const handleChange = (event) => {
        setSelectedOption(event.target.value);
      };

  // Handle form submission
  const handleSubmit = () => {
    if (!validateEmail(inputValue) && !isVisible) {
      setErrorMessage('❌ Please enter a valid .edu email.');
    } else if (validateEmail && !isVisible){
      setErrorMessage('✅ Email successfully submitted!');
      // Here you can add logic to set email to user_id
      setIsVisible(true);
    } else if (validateEmail && isVisible && selectedOption != ''){
      setTimeout(() => navigate('/home'), 1000);
    }


  };

  return (
    <div style={{textAlign:'center', position: 'relative'}}>

      <h1>Dormmate</h1>

      <h3>Please enter your .edu email</h3>

       <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your .edu email"
        style={{ display: 'block', margin: '0 auto', textAlign: 'center', padding: '8px', width: '250px' }}
      />

      {errorMessage && <p style={{ color: errorMessage.includes('❌') ? 'red' : 'green', textAlign: 'center' }}>{errorMessage}</p>}

      {isVisible ? <div>
      <h3>Select Dorm Building:</h3>

      <select value={selectedOption} onChange={handleChange}>
              <option value="">-- Select an option --</option>
              <option value="option1">Ozanam</option>
              <option value="option2">Munroe</option>
              <option value="option3">LeCompte</option>
              <option value="option4">University</option>
              <option value="option5">Seton</option>
              <option value="option6">Corcoran</option>
            </select>
            </div> : null}

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
