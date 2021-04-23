// Import dependencies
import React from 'react';
import SearchForm from '../SearchForm';

// Create and export Search page component
export default function Search() {
  return (
    <section className="bg-light rounded p-3">
      <h3 className="text-secondary">Book Search</h3>
      <SearchForm />
    </section>
  );
}