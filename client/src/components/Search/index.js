// Import dependencies
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Book from '../Book';
import API from '../../utils/API';
import './style.scss';

// Temporary book data for designing and testing components
import bookData from '../../testData';

// Create and export Search page component
export default function Search() {
  // Create stateful properties
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [bookObj, setBookObj] = useState({});

  useEffect(() => {
    setResults(bookData);
  }, []);

  // Search input change hanlder
  const handleInputChange = () => {
    const { value } = event.target;
    setSearch(value);
    console.log(search);
  }

  // Final rendered component
  return (
    <section>
      <div className="rounded px-5 pt-5 pb-1">
        <h3 className="text-secondary">Search Google Books</h3>
        <Form>
          <Form.Group controlId="form-title">
            <Form.Control
              className="input bg-dark text-secondary"
              type="text"
              placeholder="Enter a Book Title..."

              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary">Search</Button>
        </Form>
      </div>
      <div className="rounded p-5">
        <h4 className="text-secondary">Results</h4>
        {results.map((book, index) => {
          return (
            <Book 
              key={index}
              title={book.title}
              authors={book.authors}
              image={book.image}
              link={book.link}
              description={book.description}
            />
          );
        })}
      </div>
    </section>
  );
}