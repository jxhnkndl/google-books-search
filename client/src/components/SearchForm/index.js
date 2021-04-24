// Import dependencies
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.scss';

// Create and export SearchForm component
export default function SearchForm() {
  return (
    <Form>
      <Form.Group controlId="form-title">
        <Form.Control
          className="input bg-dark text-secondary"
          type="text"
          placeholder="Enter a Book Title..."
        />
      </Form.Group>
      <Button variant="primary">Search</Button>
    </Form>
  );
}
