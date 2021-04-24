// Import dependencies
import React from 'react';
import { useLocation } from 'react-router-dom';
import Book from '../Book';

// Create and export BooksContainer component
export default function BooksContainer(props) {
  const location = useLocation();

  return (
    <section>
      {location.pathname === "/search" &&
        <h4 className="text-secondary">Results</h4>
      }
    </section>
  );
}
