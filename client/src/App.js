// Import dependencies
import React from 'react';
import API from './utils/API';
import MainNav from './components/MainNav';
import Container from 'react-bootstrap/Container'
import Header from './components/Header';
import './App.scss';

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
    <div className="bg-dark">
      <MainNav />
      <Container>
        <Header />
      </Container>
    </div>
  );
}