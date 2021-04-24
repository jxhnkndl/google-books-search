// Import dependencies
import React from 'react';
import SearchForm from '../SearchForm';
import BooksContainer from '../BooksContainer';

// Create and export Search page component
export default function Search() {
  return (
    <section>
      <div className="bg-light rounded p-5 mb-4">
        <h3 className="text-secondary">Book Search</h3>
        <SearchForm />
      </div>
      <div className="bg-light rounded p-5">
        <BooksContainer />
      </div>
    </section>
  );
}