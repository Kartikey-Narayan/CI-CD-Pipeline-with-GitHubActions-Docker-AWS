// Importing necessary components and hooks from React
import React, { useEffect, useState } from 'react';

// Importing styles
import './Home.css';

// API endpoint constant for better maintainability
const API_URL = 'https://backend-clouddeployer.kartikeynarayan.in/api/message';

// Define a functional component named Home
const Home = () => {

  // State to store the fetched message and any errors
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  // Fetch message from the API when the component mounts
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (data && data.message) {
          setMessage(data.message);
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (error) {
        console.error('Error fetching message: ', error);
        setError('⚠️ Unable to load message, Please try again later.');
      }
    };

    fetchMessage();
  }, []);

   // JSX for the component
  return (
    <div className='home-container'>
      <h1 className='home-text'>
        🚀 Cloud Deployer - Full-Stack CI/CD Pipeline with GitHub Actions, Docker & AWS
      </h1>
      {
        error 
        ? 
        (
          <p className='home-error'>{error}</p>
        ) 
        : 
        (
          <p className='home-subtext'>
            { message ? `💬 ${message}` : '⏳ Loading message...' }
          </p>
        )
      }
    </div>
  );
};

// Export the Home component
export default Home;