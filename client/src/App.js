// Import dependencies
import React from 'react';
import API from './utils/API';

// Create and export App component
export default function App() {
  const fetchGigs = async () => {
    try {
      const gigs = await API.getGigs();
      console.log(gigs);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="p-5 text-center">
      <h1>I'M ONLINE!</h1>
      <Button variant="info" onClick={fetchGigs}>GET GIGS</Button>{' '}
    </div>
  );
}