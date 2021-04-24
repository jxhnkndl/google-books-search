// Import dependencies
import React from 'react';
import SearchForm from '../SearchForm';
import Book from '../Book';

// Temporary book data for designing and testing components
import bookData from '../../testData';

// Create and export Search page component
export default function Search() {

  // Temporary assign testing data to results state
  const results = bookData;

  return (
    <section>
      <div className="rounded px-5 pt-5 pb-1">
        <h3 className="text-secondary">Search Google Books</h3>
        <SearchForm />
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