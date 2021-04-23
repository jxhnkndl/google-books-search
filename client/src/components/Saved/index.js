// Import dependencies
import React from 'react';
import BooksContainer from '../BooksContainer';

// Create and export Search page component
export default function Saved() {
  return (
    <section className="bg-light rounded p-3">
      <h3 className="text-secondary">Saved Books</h3>
      <BooksContainer />
    </section>
  );
}