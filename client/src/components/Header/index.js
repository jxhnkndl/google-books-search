// Import dependencies
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

// Create and export Header component
export default function Header() {
  return (
    <header>
      <Jumbotron className="bg-light text-white">
        <Container className="text-left">
          <h1>Google Books Search</h1>
          <h4 className="font-weight-light">Find and Save Your Favorite Books</h4>
        </Container>
      </Jumbotron>
    </header>
  );
}
