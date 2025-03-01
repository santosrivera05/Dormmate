import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CreateListing() {
// handle Title Input
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
// handle image input
    const [imageInput, setImageValue] = useState(null);
    const handleImageChange = (event)=> {
        const file = event.target.files[0]; // Get the first file
                if (file) {
                    setImageValue(URL.createObjectURL(file)); // Create a preview URL
                }
    };

    function displayImage(uploaded){
    var pic;
    if (uploaded){
    }
    }
    //initialize navigate
    const navigate = useNavigate();

  return (
  <div style={{textAlign:'center', position: 'relative'}}>
    <button
                onClick={() => navigate('/home')}
                style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    padding: '8px 16px',
                    cursor: 'pointer'
                }}
            >
                ← Back to Homepage
            </button>

    <h1>Create a Listing</h1>

    <h3>Title</h3>
    <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Title"
            style={{ display: 'block', margin: '0 auto', textAlign: 'center', padding: '8px', width: '250px' }}
          />
    <h3>Price $</h3>
    <input
        type="number"
        placeholder="Price $"
    />
    <h3>Location</h3>
    <input
        type="text"
        placeholder="Location"
    />
    <h3>Image</h3>
    <input
        type="file"
        accept="image/*"

        onChange={handleImageChange}
    />
    {/* Display image preview */}
                {imageInput && (
                    <div>
                        <h3>Image Preview:</h3>
                        <img src={imageInput} alt="Preview" style={{ maxWidth: '300px', marginTop: '10px' }} />
                    </div>
                )}
    <button
                  style={{ display: 'block', margin: '10px auto', padding: '10px 20px', cursor: 'pointer' }}
                >
                  Submit
                </button>

    </div>
  );
}

export default CreateListing;