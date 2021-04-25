// Import dependencies
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Book from '../Book';
import API from '../../utils/API';
import './style.scss';

// Create and export Search page component
export default function Search() {
  // Create stateful properties
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [bookObj, setBookObj] = useState({});

  // Execute search for title using Google Books API
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const books = await API.search(query);
      setResults(books.data.items);
      setQuery('');
    } catch (err) {
      console.log(err);
    }
  };

  // Final rendered component
  return (
    <section>
      <div className="rounded px-5 pt-5 pb-1">
        <h3 className="text-secondary">Search Google Books</h3>
        <Form>
          <Form.Group controlId="form-title">
            {/* Search bar */}
            <Form.Control
              className="input bg-dark text-secondary"
              type="text"
              placeholder="Enter a Book Title..."
              onChange={(event) => {
                if (query === '') {
                  setResults([]);
                }
                setQuery(event.target.value);
              }}
              value={query}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Search
          </Button>
        </Form>
      </div>

      {/* If there are results, render them */}
      {/* Otherwise, display no results message */}
      {results.length ? (
        <div className="rounded p-5">
          <h4 className="text-secondary">Results</h4>
          {results.map((book, index) => {
            // Destructure required properties
            const {
              id,
              authors,
              description,
              imageLinks,
              infoLink,
              title,
            } = book.volumeInfo;

            // Skip over the result if a key field is missing
            if (!authors || !description || !title || !imageLinks) {
              return;
            }

            // Render Book components for up to 20 results
            return (
              <Book
                key={index}
                id={index}
                title={title}
                authors={authors}
                description={description}
                image={imageLinks.thumbnail}
                link={infoLink}
              />
            );
          })}
        </div>
      ) : (
        <div className="rounded p-5">
          <h4 className="text-secondary">No Results to Display</h4>
        </div>
      )}
    </section>
  );
}
