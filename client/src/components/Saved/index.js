// Import dependencies
import React, { useState, useEffect } from 'react';
import Book from '../Book';
import API from '../../utils/API';

// Create and export Search page component
export default function Saved(props) {
  // Init saved books state
  const [savedBooks, setSavedBooks] = useState([]);

  // When component mounts, load saved books
  useEffect(() => {
    loadBooks();
  }, []);

  // Initiate API call for saved books
  const loadBooks = async () => {
    try {
      const results = await API.getBooks();
      console.log(results);
      setSavedBooks(results.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section>
      {savedBooks.length ? (
        <div className="rounded p-5">
          <h3 className="text-secondary">Saved Books</h3>
          {savedBooks.map((book, index) => {
            console.log(book);
            return (
              <Book 
                key={book._id}
                id={book._id}
                title={book.title}
                authors={book.authors}
                description={book.description}
                image={book.image}
                link={book.link}
              />
            );
          })}
        </div>
      ) : (
        <div className="rounded p-5">
          <h4 className="text-secondary">No Saved Books to Display</h4>
        </div>
      )}
    </section>
  );
}