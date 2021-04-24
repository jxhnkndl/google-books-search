// Import dependencies
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

// Create and export Header component
export default function Header() {
  return (
    <header className="container">
      <Jumbotron className="bg-light text-white p-5 mb-4">
        <div className="text-left">
          <h1>Google Books Search</h1>
          <h4 className="font-weight-light">Find and Save Your Favorite Books</h4>
        </div>
      </Jumbotron>
    </header>
  );
}
