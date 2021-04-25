// Import dependencies
import React from 'react';
import Book from '../Book';

// Create and export Search page component
export default function Saved(props) {
  // Temporary assign testing data to results state
  const results = bookData;

  return (
    <section>
      <div className="rounded p-5">
        <h3 className="text-secondary">Saved Books</h3>
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