// Import dependencies
import React from 'react';
import API from './utils/API';
import Button from 'react-bootstrap/Button';

// Create and export App component
export default function App() {
  const fetchBooks = async () => {
    try {
      const books = await API.getBooks();
      console.log(books);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-5 text-center">
      <h1>I'M ONLINE!</h1>
      <Button variant="info" onClick={fetchBooks}>
        GET GIGS
      </Button>
    </div>
  );
}
