// Import dependencies
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const styles = {
  header: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/bg-books.jpg'})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  jumbotron: {
    backgroundColor: 'rgba(21, 32, 43, 0.7)',
  }
};

// Create and export Header component
export default function Header() {
  return (
    <header style={styles.header}>
      <Jumbotron style={styles.jumbotron} className="text-white p-5 mb-0">
        <div className="text-left">
          <h1>Find and save your favorite books</h1>
          <h4 className="font-weight-light">Powered by Google Books API</h4>
        </div>
      </Jumbotron>
    </header>
  );
}
