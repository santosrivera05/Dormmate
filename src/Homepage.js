import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function HomePage() {
const navigate = useNavigate();
const handleSubmit = () => {
    navigate('/CreateListing')

  };
  return (
    <div style={{textAlign:'center'}}>
      <h1>Homepage</h1>
      <button
              onClick={handleSubmit}
              style={{ display: 'block', margin: '10px auto', padding: '10px 20px', cursor: 'pointer' }}
            >
              Create a Listing
            </button>
      <h2>Listings</h2>
    </div>
  );
}

export default HomePage;
